import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 sm:px-6 py-4 bg-slate-900/70 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/40 transition-all duration-300 hover:bg-slate-900/75 hover:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight no-underline transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:scale-105"
          >
            StudyMate
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href="#features" 
            className="relative text-slate-300 hover:text-white font-medium text-sm py-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full after:transition-all after:duration-400 hover:after:w-full"
          >
            Features
          </a>
          <a 
            href="#about" 
            className="relative text-slate-300 hover:text-white font-medium text-sm py-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full after:transition-all after:duration-400 hover:after:w-full"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="relative text-slate-300 hover:text-white font-medium text-sm py-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:via-purple-400 after:to-pink-400 after:rounded-full after:transition-all after:duration-400 hover:after:w-full"
          >
            Contact
          </a>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link 
            to="/login" 
            className="text-slate-300 hover:text-white font-medium text-sm sm:text-base px-4 py-2 rounded-lg transition-all duration-300 border border-transparent hover:bg-white/5 hover:border-white/10"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-4 sm:px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;