import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ChatPage from './components/ChatPage';
import UploadPDF from './components/UploadPDF';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Features from './components/Features';
import About from './components/About';


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/chat' || location.pathname.startsWith('/chat/');
  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Conditionally render Navbar except on /chat routes */}
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/features" element={<Features />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/upload" element={<UploadPDF />} />
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
  );
}

export default App;
