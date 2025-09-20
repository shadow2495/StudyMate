import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI study assistant. Upload a PDF document and I\'ll help you understand its contents. What would you like to learn about?',
      timestamp: new Date(),
      sources: []
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [uploadedPDFs] = useState([
    { id: 1, name: 'Machine Learning Fundamentals.pdf', pages: 45, uploadTime: '2 hours ago' },
    { id: 2, name: 'Data Structures and Algorithms.pdf', pages: 320, uploadTime: '1 day ago' }
  ]);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: `Based on your question "${inputMessage}", I've found relevant information in your uploaded documents. Here's what I can tell you...`,
        timestamp: new Date(),
        sources: [
          { document: 'Machine Learning Fundamentals.pdf', page: 12 },
          { document: 'Data Structures and Algorithms.pdf', page: 156 }
        ]
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-80 glass-card border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col order-2 lg:order-1">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10">
          <Link to="/dashboard" className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-white">S</span>
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">StudyMate</span>
          </Link>
          
          <Link 
            to="/upload" 
            className="w-full bg-accent-gradient text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium hover:shadow-glow transition-all duration-300 btn-glow flex items-center justify-center text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Upload PDF
          </Link>
        </div>

        {/* Uploaded PDFs */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Your Documents</h3>
          
          <div className="space-y-3">
            {uploadedPDFs.map((pdf) => (
              <div key={pdf.id} className="glass p-4 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer group">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm truncate group-hover:text-blue-300 transition-colors duration-200">
                      {pdf.name}
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                      {pdf.pages} pages • {pdf.uploadTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {uploadedPDFs.length === 0 && (
            <div className="text-center py-8">
              <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-slate-400 text-sm">No documents uploaded yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col order-1 lg:order-2">
        {/* Chat Header */}
        <div className="glass-card border-b border-white/10 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">AI Assistant</h1>
                <p className="text-slate-300 text-sm sm:text-base">Ask me anything about your uploaded documents</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              
              <button className="p-2 text-slate-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] sm:max-w-3xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-start space-x-2 sm:space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-primary-gradient' 
                      : 'bg-accent-gradient'
                  }`}>
                    {message.type === 'user' ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`glass-card rounded-2xl p-3 sm:p-4 ${message.type === 'user' ? 'bg-primary-gradient' : ''}`}>
                      <p className="text-white whitespace-pre-wrap text-sm sm:text-base">{message.content}</p>
                      
                      {/* Sources */}
                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                          <p className="text-slate-300 text-xs sm:text-sm mb-2">Sources:</p>
                          <div className="space-y-1">
                            {message.sources.map((source, index) => (
                              <div key={index} className="flex items-center text-xs text-slate-400">
                                <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span className="truncate">{source.document}, Page {source.page}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-slate-400 mt-1 sm:mt-2">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-3xl">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  
                  <div className="glass-card rounded-2xl p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="glass-card border-t border-white/10 p-4 sm:p-6">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-2 sm:space-x-4">
            <div className="flex-1">
              <textarea
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask me anything about your documents..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                rows="1"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={!inputMessage.trim() || isTyping}
              className="bg-primary-gradient text-white p-2 sm:p-3 rounded-xl hover:shadow-glow transition-all duration-300 btn-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
