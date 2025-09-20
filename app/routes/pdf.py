from fastapi import APIRouter, Depends, HTTPException, UploadFile, File, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
import os
import shutil
from pathlib import Path

from database import async_session
from models import User, Document
from schemas import DocumentOut
from routes.auth import get_current_user
from crud import create_document

router = APIRouter(prefix="/pdf", tags=["pdf"])

# Create upload directory
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

async def get_db():
    async with async_session() as session:
        yield session

@router.post("/upload", response_model=DocumentOut)
async def upload_pdf(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    # Check file type
    if not file.filename.lower().endswith('.pdf'):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF files are allowed"
        )
    
    # Create user-specific directory
    user_dir = Path(UPLOAD_DIR) / str(current_user.id)
    user_dir.mkdir(exist_ok=True)
    
    # Save file
    file_path = user_dir / file.filename
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Save document record to database
    document = await create_document(db, file.filename, current_user.id)
    
    return DocumentOut(
        id=document.id,
        filename=document.filename,
        storage_path=str(file_path),
        uploaded_at=document.uploaded_at.isoformat()
    )

@router.get("/documents", response_model=List[DocumentOut])
async def get_user_documents(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    from sqlalchemy.future import select
    result = await db.execute(
        select(Document).where(Document.user_id == current_user.id)
    )
    documents = result.scalars().all()
    
    return [
        DocumentOut(
            id=doc.id,
            filename=doc.filename,
            storage_path=f"uploads/{current_user.id}/{doc.filename}",
            uploaded_at=doc.uploaded_at.isoformat()
        )
        for doc in documents
    ]

@router.delete("/documents/{document_id}")
async def delete_document(
    document_id: int,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    from sqlalchemy.future import select
    from sqlalchemy import delete
    
    # Check if document exists and belongs to user
    result = await db.execute(
        select(Document).where(
            Document.id == document_id,
            Document.user_id == current_user.id
        )
    )
    document = result.scalar_one_or_none()
    
    if not document:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Document not found"
        )
    
    # Delete file from filesystem
    file_path = Path(UPLOAD_DIR) / str(current_user.id) / document.filename
    if file_path.exists():
        file_path.unlink()
    
    # Delete from database
    await db.execute(
        delete(Document).where(Document.id == document_id)
    )
    await db.commit()
    
    return {"message": "Document deleted successfully"}
