import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' }
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.75rem 1rem;
          color: #94a3b8;
          font-weight: 500;
          text-decoration: none;
          border-radius: 0.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none !important;
          box-shadow: none !important;
        }

        .nav-link:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        .nav-link:active {
          outline: none !important;
          box-shadow: none !important;
          transform: scale(0.98);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0.25rem;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 2px;
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover {
          color: #60a5fa;
          background-color: rgba(59, 130, 246, 0.1);
        }

        .nav-link:hover::after {
          width: 70%;
        }

        .nav-link.active {
          color: #60a5fa;
          background-color: rgba(59, 130, 246, 0.15);
        }

        .nav-link.active::after {
          width: 70%;
        }
      `}</style>

      <nav className="bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50 w-full relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  StudyMate
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${activeLink === link.path ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.path)}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="px-4 py-2 text-slate-300 hover:text-blue-400 font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-200 outline-none focus:outline-none"
                tabIndex={0}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 outline-none focus:outline-none"
                tabIndex={0}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 focus:outline-none"
                aria-label="Toggle menu"
                onFocus={(e) => e.target.blur()}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-800/90 backdrop-blur-md rounded-b-2xl border-t border-slate-700/50 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 font-medium rounded-lg transition-all duration-200 transform hover:translate-x-1 focus:outline-none ${
                    activeLink === link.path
                      ? 'text-blue-400 bg-blue-500/20'
                      : 'text-slate-300 hover:text-blue-400 hover:bg-slate-700/50'
                  }`}
                  onClick={() => handleLinkClick(link.path)}
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="border-t border-slate-600/50 pt-4 mt-4 space-y-2">
                <Link
                  to="/login"
                  className="block px-4 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 font-medium rounded-lg transition-all duration-200 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={0}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block mx-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg transform hover:scale-105 focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={0}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;