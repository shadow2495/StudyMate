import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ChatPage from './components/ChatPage';
import UploadPDF from './components/UploadPDF';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-hero-gradient">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          
          {/* Protected Routes (would typically require authentication) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/upload" element={<UploadPDF />} />
          
          {/* Additional routes for future pages */}
          <Route path="/profile" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Profile Page - Coming Soon</div></div>} />
          <Route path="/settings" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Settings Page - Coming Soon</div></div>} />
          <Route path="/help" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Help Page - Coming Soon</div></div>} />
          <Route path="/features" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Features Page - Coming Soon</div></div>} />
          <Route path="/pricing" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Pricing Page - Coming Soon</div></div>} />
          <Route path="/about" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">About Page - Coming Soon</div></div>} />
          <Route path="/contact" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Contact Page - Coming Soon</div></div>} />
          <Route path="/terms" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Terms of Service - Coming Soon</div></div>} />
          <Route path="/privacy" element={<div className="min-h-screen bg-hero-gradient flex items-center justify-center"><div className="text-white text-2xl">Privacy Policy - Coming Soon</div></div>} />
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen bg-hero-gradient flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                <p className="text-xl text-slate-300 mb-8">Oops! Page not found</p>
                <a href="/" className="bg-primary-gradient text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow-lg transition-all duration-300 btn-glow">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
        
        {/* Footer - Only show on specific pages */}
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/features" element={<Footer />} />
          <Route path="/pricing" element={<Footer />} />
          <Route path="/about" element={<Footer />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
