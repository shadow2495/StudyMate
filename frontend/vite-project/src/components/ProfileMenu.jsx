import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null,
    plan: 'Pro'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logging out...');
    setIsOpen(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-accent-gradient rounded-full flex items-center justify-center">
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-semibold text-sm">
              {getInitials(user.name)}
            </span>
          )}
        </div>
        
        <div className="hidden md:block text-left">
          <p className="text-white font-medium text-sm">{user.name}</p>
          <p className="text-slate-400 text-xs">{user.plan} Plan</p>
        </div>
        
        <svg 
          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className="absolute right-0 top-full mt-2 w-64 glass-card rounded-2xl shadow-2xl z-50 animate-slide-down"
        >
          {/* User Info */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-white font-semibold">
                    {getInitials(user.name)}
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{user.name}</p>
                <p className="text-slate-400 text-sm truncate">{user.email}</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs text-slate-400">{user.plan} Plan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-slate-300 group-hover:text-white">Profile Settings</span>
            </Link>

            <Link 
              to="/billing" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-slate-300 group-hover:text-white">Billing & Plans</span>
            </Link>

            <Link 
              to="/usage" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-slate-300 group-hover:text-white">Usage Analytics</span>
            </Link>

            <Link 
              to="/settings" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-slate-300 group-hover:text-white">Preferences</span>
            </Link>

            <Link 
              to="/help" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-slate-300 group-hover:text-white">Help & Support</span>
            </Link>

            <div className="border-t border-white/10 mt-2 pt-2">
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-red-500/20 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="text-slate-300 group-hover:text-red-400">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;