import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [recentChats] = useState([
    {
      id: 1,
      title: 'Machine Learning Concepts',
      lastMessage: 'What are the main types of machine learning algorithms?',
      timestamp: '2 hours ago',
      messageCount: 15
    },
    {
      id: 2,
      title: 'Data Structures Discussion',
      lastMessage: 'Explain the difference between arrays and linked lists',
      timestamp: '1 day ago',
      messageCount: 8
    },
    {
      id: 3,
      title: 'Algorithms Study Session',
      lastMessage: 'How does quicksort work?',
      timestamp: '3 days ago',
      messageCount: 22
    }
  ]);

  const [uploadedDocuments] = useState([
    {
      id: 1,
      name: 'Machine Learning Fundamentals.pdf',
      pages: 45,
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      questions: 127,
      status: 'processed'
    },
    {
      id: 2,
      name: 'Data Structures and Algorithms.pdf',
      pages: 320,
      size: '8.7 MB',
      uploadDate: '2024-01-14',
      questions: 89,
      status: 'processed'
    },
    {
      id: 3,
      name: 'Neural Networks Deep Dive.pdf',
      pages: 156,
      size: '5.2 MB',
      uploadDate: '2024-01-12',
      questions: 43,
      status: 'processing'
    }
  ]);

  const [studyStats] = useState({
    totalQuestions: 259,
    documentsProcessed: 12,
    hoursStudied: 34,
    streakDays: 7
  });

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Navigation */}
      <nav className="glass-card border-0 border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-white">S</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">StudyMate</span>
          </Link>
          
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Link 
              to="/chat" 
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Chat
            </Link>
            <Link 
              to="/upload" 
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Upload
            </Link>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent-gradient rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-xs sm:text-sm font-bold text-white">U</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="gradient-text">Student!</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300">
            Here's your learning progress and recent activity
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            to="/upload" 
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Upload Documents</h3>
            <p className="text-slate-400 text-sm">Add new study materials to your library</p>
          </Link>

          <Link 
            to="/chat" 
            className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Start Chatting</h3>
            <p className="text-slate-400 text-sm">Ask questions about your documents</p>
          </Link>

          <div className="glass-card rounded-2xl p-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Study Analytics</h3>
            <p className="text-slate-400 text-sm">View your learning progress and insights</p>
          </div>
        </div>

        {/* Study Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{studyStats.totalQuestions}</div>
            <div className="text-slate-300 text-sm">Questions Asked</div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{studyStats.documentsProcessed}</div>
            <div className="text-slate-300 text-sm">Documents Processed</div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{studyStats.hoursStudied}h</div>
            <div className="text-slate-300 text-sm">Hours Studied</div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{studyStats.streakDays}</div>
            <div className="text-slate-300 text-sm">Day Streak</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Chats */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Chats</h2>
              <Link 
                to="/chat" 
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentChats.map((chat) => (
                <Link 
                  key={chat.id}
                  to={`/chat/${chat.id}`}
                  className="block glass p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors duration-200">
                        {chat.title}
                      </h3>
                      <p className="text-slate-400 text-sm truncate mb-2">
                        {chat.lastMessage}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-slate-500">
                        <span>{chat.timestamp}</span>
                        <span>{chat.messageCount} messages</span>
                      </div>
                    </div>
                    
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Uploaded Documents */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Documents</h2>
              <Link 
                to="/upload" 
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                Upload More
              </Link>
            </div>
            
            <div className="space-y-4">
              {uploadedDocuments.map((doc) => (
                <div key={doc.id} className="glass p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm truncate mb-1">
                        {doc.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-xs text-slate-400">
                        <span>{doc.pages} pages</span>
                        <span>{doc.size}</span>
                        <span>{doc.questions} Q&As</span>
                      </div>
                      <div className="flex items-center mt-2">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          doc.status === 'processed' ? 'bg-green-400' : 'bg-yellow-400'
                        }`}></div>
                        <span className="text-xs text-slate-400 capitalize">
                          {doc.status}
                        </span>
                      </div>
                    </div>
                    
                    <button className="text-slate-400 hover:text-white transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;