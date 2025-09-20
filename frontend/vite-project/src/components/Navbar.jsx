import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-card border-0 border-b border-white/10 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
            <span className="text-lg sm:text-xl font-bold text-white">S</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold gradient-text">StudyMate</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-200">
            Features
          </a>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link 
            to="/login" 
            className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-primary-gradient text-white px-3 sm:px-6 py-2 rounded-lg font-medium hover:shadow-glow transition-all duration-300 btn-glow text-sm sm:text-base"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;