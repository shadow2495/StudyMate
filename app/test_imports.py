#!/usr/bin/env python3
"""
Test script to check if all imports work correctly
"""

try:
    print("Testing imports...")
    
    # Test config import
    from config import settings
    print("✓ Config import successful")
    
    # Test database import
    from database import engine, Base
    print("✓ Database import successful")
    
    # Test models import
    from models import User, Document
    print("✓ Models import successful")
    
    # Test auth import
    from auth import verify_password, create_access_token
    print("✓ Auth import successful")
    
    # Test crud import
    from crud import create_user, get_user_by_email
    print("✓ CRUD import successful")
    
    # Test schemas import
    from schemas import UserCreate, UserOut, Token
    print("✓ Schemas import successful")
    
    # Test routes import
    from routes import auth, pdf
    print("✓ Routes import successful")
    
    # Test RAG import
    from RAG import rag
    print("✓ RAG import successful")
    
    # Test main import
    from main import app
    print("✓ Main app import successful")
    
    print("\n🎉 All imports successful! The server should work now.")
    
except Exception as e:
    print(f"❌ Import error: {e}")
    import traceback
    traceback.print_exc()
