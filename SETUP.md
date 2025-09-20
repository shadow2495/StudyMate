# StudyMate Setup Instructions

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd StudyMate/backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the backend directory with the following variables:
   ```env
   DATABASE_URL=sqlite+aiosqlite:///./studymate.db
   SECRET_KEY=your-secret-key-here-change-in-production
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-supabase-key
   SUPABASE_BUCKET=studymate-documents
   GOOGLE_API_KEY=your-google-api-key
   ```

5. Run the backend server:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd StudyMate/frontend/vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features Implemented

### Authentication
- User registration and login
- JWT token-based authentication
- Protected routes
- Password hashing with bcrypt

### Document Management
- PDF file upload
- Document storage and retrieval
- User-specific document isolation

### RAG (Retrieval-Augmented Generation)
- Document processing with LangChain
- Vector database with Milvus
- Google Gemini AI integration
- Question-answering based on uploaded documents

### Frontend
- Modern React UI with Tailwind CSS
- Real-time chat interface
- File upload with drag-and-drop
- Responsive design

## API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/me` - Get current user
- `POST /auth/logout` - User logout

### Document Management
- `POST /pdf/upload` - Upload PDF file
- `GET /pdf/documents` - Get user's documents
- `DELETE /pdf/documents/{id}` - Delete document

### RAG
- `POST /rag/query/` - Ask questions about documents
- `POST /rag/process/` - Process document for RAG

## Usage

1. Start both backend and frontend servers
2. Register a new account or login
3. Upload PDF documents
4. Navigate to the chat page
5. Ask questions about your uploaded documents
6. Get AI-powered answers based on your documents

## Notes

- Make sure to set up your Google API key for the RAG functionality
- The application uses SQLite for development (can be changed to PostgreSQL for production)
- File uploads are stored locally in the `uploads` directory
- CORS is configured for localhost development
