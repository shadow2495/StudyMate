# StudyMate - AI-Powered Academic Assistant

StudyMate is a modern, responsive web application that allows students to upload PDF documents and interact with an AI assistant to get instant answers about their study materials.

## ✨ Features

- **🎨 Modern Dark Theme**: Beautiful glassmorphism design with gradient effects
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **🤖 AI Chat Interface**: Interactive chat system for Q&A with documents
- **📄 PDF Upload**: Drag & drop PDF upload with progress tracking
- **📊 Dashboard**: Overview of uploaded documents and study analytics
- **🔐 Authentication**: Login and registration forms with validation
- **⚡ Fast & Modern**: Built with React 19, Vite, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript
- **Styling**: Tailwind CSS with custom dark theme
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Heroicons (via Tailwind)
- **Fonts**: Inter (Google Fonts)

## 📱 Pages & Components

### Core Pages
- **HomePage**: Landing page with hero section and features
- **LoginForm**: User authentication with glassmorphism design
- **RegisterForm**: User registration with password strength indicator
- **Dashboard**: User overview with stats and recent activity
- **ChatPage**: AI chat interface with document sidebar
- **UploadPDF**: Drag & drop file upload with progress tracking

### Additional Components
- **ProfileMenu**: User profile dropdown with settings
- **Footer**: Modern footer with links and newsletter signup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Design Features

### Color Palette
- **Primary**: Blue gradient (#1e40af to #60a5fa)
- **Accent**: Purple/Pink gradient (#701a75 to #c026d3)
- **Background**: Dark gradient (#020617 to #475569)
- **Glass Effects**: Semi-transparent overlays with backdrop blur

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.jsx         # Landing page
│   ├── LoginForm.jsx        # Authentication
│   ├── RegisterForm.jsx     # User registration
│   ├── Dashboard.jsx        # User dashboard
│   ├── ChatPage.jsx         # AI chat interface
│   ├── UploadPDF.jsx        # File upload
│   ├── ProfileMenu.jsx      # User menu
│   └── Footer.jsx           # Site footer
├── App.jsx                  # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features in Detail

### Glassmorphism Design
- Semi-transparent cards with backdrop blur
- Subtle borders and shadows
- Gradient overlays and effects

### Responsive Chat Interface
- Mobile-first design approach
- Collapsible sidebar on mobile
- Touch-friendly message bubbles
- Adaptive text sizing

### Interactive Upload
- Drag & drop functionality
- Real-time progress tracking
- File validation and error handling
- Visual feedback during upload

### Modern Navigation
- Responsive navigation bar
- Mobile hamburger menu
- Smooth transitions and animations
- Consistent branding across pages

## 🎯 Future Enhancements

- Backend integration with AI APIs
- Real PDF processing and analysis
- User authentication with JWT
- Database integration for user data
- Real-time chat with WebSocket
- Advanced analytics and reporting

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for students worldwide by StudyMate Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
