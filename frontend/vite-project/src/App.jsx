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
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';

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
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatPage />} />
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
    </Router>
  );
}

export default App;
