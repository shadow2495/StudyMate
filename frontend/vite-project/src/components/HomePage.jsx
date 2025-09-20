import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-gradient rounded-3xl mb-6 shadow-glow animate-glow">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold gradient-text mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                StudyMate
              </h1>
            </div>
            
            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Your AI-powered academic assistant. Transform how you study with intelligent document analysis and natural language Q&A.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-row justify-center items-center gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/register" 
                className="group flex items-center justify-center min-w-[180px] px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-2 border-blue-400 hover:from-blue-500 hover:to-purple-500 hover:shadow-blue-500/40 focus:shadow-blue-500/60 transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
                style={{boxShadow: '0 0 16px 2px #6366f1, 0 4px 24px rgba(59,130,246,0.3)'}}
              >
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="/login" 
                className="group flex items-center justify-center min-w-[180px] px-8 py-4 rounded-xl text-lg font-semibold bg-white/10 text-white border-2 border-blue-400 shadow-2xl hover:bg-white/20 hover:shadow-blue-500/40 focus:shadow-blue-500/60 transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
                style={{boxShadow: '0 0 16px 2px #6366f1, 0 4px 24px rgba(59,130,246,0.3)'}}
              >
                Sign In
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Free to use</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Fast Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Why Choose StudyMate?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to enhance your learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-outline p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Document Analysis</h3>
              <p className="text-slate-300 leading-relaxed">
                Upload your PDFs and let our AI extract key insights, summarize content, and answer your questions.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="card-outline p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Natural Language Q&A</h3>
              <p className="text-slate-300 leading-relaxed">
                Ask questions in plain English and get accurate, contextual answers from your documents.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="card-outline p-8 text-center hover-lift animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Study Analytics</h3>
              <p className="text-slate-300 leading-relaxed">
                Track your learning progress, identify knowledge gaps, and optimize your study sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-modern p-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of students who are already using StudyMate to study smarter, not harder.
            </p>
            <Link 
              to="/register" 
              className="btn-primary group inline-flex items-center"
            >
              Start Your Free Trial
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-slate-400 font-medium">Active Students</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-slate-400 font-medium">Documents Processed</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">95%</div>
              <div className="text-slate-400 font-medium">Accuracy Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-slate-400 font-medium">AI Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;