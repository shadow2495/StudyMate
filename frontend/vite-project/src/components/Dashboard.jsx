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
      pages: 180,
      size: '5.2 MB',
      uploadDate: '2024-01-13',
      questions: 156,
      status: 'processing'
    }
  ]);

  const stats = [
    { label: 'Total Documents', value: '12', icon: '📄' },
    { label: 'Questions Asked', value: '1,247', icon: '❓' },
    { label: 'Study Hours', value: '48.5', icon: '⏱️' },
    { label: 'Accuracy Rate', value: '94%', icon: '🎯' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">StudyMate</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/upload" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Upload PDF
            </Link>
            <Link 
              to="/chat" 
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-200"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Chats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Recent Chats</h3>
              <Link 
                to="/chat" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
              >
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentChats.map((chat) => (
                <div key={chat.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{chat.title}</h4>
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{chat.lastMessage}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{chat.messageCount} messages</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Uploaded Documents */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Uploaded Documents</h3>
              <Link 
                to="/upload" 
                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
              >
                Upload More
              </Link>
            </div>
            
            <div className="space-y-4">
              {uploadedDocuments.map((doc) => (
                <div key={doc.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{doc.name}</h4>
                        <p className="text-xs text-gray-500">{doc.pages} pages • {doc.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {doc.status === 'processed' ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Ready</span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Processing</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">{doc.questions} questions answered</span>
                    <span className="text-xs text-gray-500">{doc.uploadDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/upload" 
              className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 text-center"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Upload Document</h4>
              <p className="text-sm text-gray-600">Add new PDFs to study</p>
            </Link>
            
            <Link 
              to="/chat" 
              className="p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200 text-center"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">Start Chat</h4>
              <p className="text-sm text-gray-600">Ask questions about your docs</p>
            </Link>
            
            <Link 
              to="/analytics" 
              className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-200 text-center"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-medium text-gray-900 mb-1">View Analytics</h4>
              <p className="text-sm text-gray-600">Track your progress</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;