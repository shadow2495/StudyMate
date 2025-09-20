# StudyMate - AI-Powered Academic Assistant 🤖📚

A modern, dark-themed React application that allows students to upload PDF documents and engage in AI-powered Q&A sessions about their study materials.

## ✨ Features

### 🎨 Modern UI/UX
- **Dark Theme**: Beautiful dark mode with glassmorphism effects
- **Gradient Designs**: Stunning gradients throughout the interface
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Elegant transitions and hover effects
- **Glass Morphism**: Modern glass-like UI components

### 🔐 Authentication
- **Login Form**: Modern login with social media integration
- **Registration**: Comprehensive signup with password strength indicator
- **Profile Management**: User profile dropdown with settings

### 📄 Document Management
- **Drag & Drop Upload**: Intuitive PDF upload interface
- **Progress Tracking**: Real-time upload progress indicators
- **File Management**: View and manage uploaded documents
- **Document Processing**: AI-powered content extraction

### 💬 AI Chat Interface
- **Smart Q&A**: Ask questions about uploaded documents
- **Contextual Answers**: AI provides relevant, sourced responses
- **Chat History**: Persistent conversation history
- **Source Citations**: Links to specific document pages

### 📊 Dashboard
- **Study Analytics**: Track learning progress and statistics
- **Recent Activity**: Quick access to recent chats and documents
- **Quick Actions**: Fast navigation to common tasks

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **Styling**: Tailwind CSS 4.1.13
- **Build Tool**: Vite 7.1.6
- **Icons**: Heroicons (via SVG)
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd StudyMate/frontend/vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Landing page with hero section
│   ├── LoginForm.jsx         # User authentication
│   ├── RegisterForm.jsx      # User registration
│   ├── ChatPage.jsx          # AI chat interface
│   ├── UploadPDF.jsx         # Document upload
│   ├── Dashboard.jsx         # User dashboard
│   ├── ProfileMenu.jsx       # Profile dropdown
│   └── Footer.jsx            # Site footer
├── App.jsx                   # Main app with routing
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#1e40af → #3b82f6 → #60a5fa)
- **Accent**: Purple/Pink gradients (#701a75 → #a21caf → #c026d3)
- **Background**: Dark gradient (#020617 → #0f172a → #1e293b)
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Typography
- **Font Family**: Inter (Google Fonts)
- **Gradient Text**: Blue to purple to pink gradients
- **Font Weights**: 300-900 range for different use cases

### Components
- **Glass Cards**: Semi-transparent cards with blur effects
- **Gradient Buttons**: Hover effects with glow animations
- **Form Elements**: Dark themed with blue focus states
- **Navigation**: Clean, minimal navigation bars

## 🌟 Key Features Breakdown

### HomePage
- Hero section with animated gradients
- Feature showcase with icons and descriptions
- Call-to-action buttons with hover effects
- Statistics section
- Responsive grid layouts

### Authentication Forms
- Modern form design with glassmorphism
- Password strength indicator (registration)
- Social media login options
- Form validation and loading states
- Smooth animations and transitions

### Chat Interface
- Real-time chat simulation
- Message bubbles with user/AI distinction
- Typing indicators
- Source citations for AI responses
- Sidebar with document management

### Upload Interface
- Drag and drop functionality
- File validation (PDF only, 50MB limit)
- Progress bars with animated uploads
- File management with remove options
- Feature highlights section

### Dashboard
- Study statistics overview
- Recent chat history
- Document library
- Quick action buttons
- Progress tracking

## 🔧 Customization

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended gradients
- Custom animations
- Backdrop blur utilities
- Box shadow utilities

### Adding New Components
1. Create component in `/src/components/`
2. Add route in `App.jsx`
3. Import and use in other components
4. Follow existing design patterns

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components adapt gracefully across different screen sizes.

## 🚀 Production Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy to your preferred platform**
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Follow the existing code style
5. Test your changes
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Built with ❤️ for students worldwide**