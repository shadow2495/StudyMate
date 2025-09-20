import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Q&A',
      description: 'Ask natural language questions and get instant, contextualized answers from your study materials.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '📄',
      title: 'Smart PDF Processing',
      description: 'Upload multiple PDFs and let our AI extract and organize content for intelligent responses.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: '🔍',
      title: 'Semantic Search',
      description: 'Advanced search capabilities that understand context and meaning, not just keywords.',
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      icon: '⚡',
      title: 'Instant Responses',
      description: 'Get immediate answers to complex questions with relevant citations and explanations.',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: '📚',
      title: 'Study Analytics',
      description: 'Track your learning progress and identify knowledge gaps with intelligent insights.',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: '🎯',
      title: 'Precision Learning',
      description: 'Focus on what matters most with AI-curated content and personalized study paths.',
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Your <span className="gradient-text">AI-Powered</span>
              <br />
              Academic Assistant
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Transform how you study with HOGN23. Upload your PDFs, ask questions in natural language, 
              and get instant, intelligent answers from your study materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link 
                to="/register" 
                className="w-full sm:w-auto bg-primary-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-glow-lg transition-all duration-300 btn-glow animate-pulse-glow text-center"
              >
                Start Learning Now
              </Link>
              
              <Link 
                to="/demo" 
                className="w-full sm:w-auto glass-card text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Watch Demo
              </Link>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-10 sm:left-20 w-20 sm:w-24 h-20 sm:h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Everything you need to revolutionize your study experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-300 animate-slide-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-12 animate-scale-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Learning?</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join thousands of students who are already studying smarter with AI-powered assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/register" 
                className="bg-accent-gradient text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 btn-glow"
              >
                Get Started Free
              </Link>
              
              <Link 
                to="/features" 
                className="border border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-slate-300 text-lg">Active Students</div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-slate-300 text-lg">Questions Answered</div>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">99%</div>
              <div className="text-slate-300 text-lg">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
