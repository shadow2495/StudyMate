import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const ChatPage = () => {
  const { token, user, logout } = useAuth();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [documents, setDocuments] = useState([]);
  const messagesEndRef = useRef(null);
  const API_BASE_URL = 'http://localhost:8080';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch user documents on component mount
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pdf/documents`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          const docs = await response.json();
          setDocuments(docs);
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    if (token) {
      fetchDocuments();
    }
  }, [token]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch(`${API_BASE_URL}/rag/query/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: currentMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: data.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: data.context ? data.context.map((ctx, index) => ({
            title: `Document ${index + 1}`,
            page: 'N/A'
          })) : []
        };
        setMessages(prev => [...prev, aiResponse]);
      } else {
        const errorResponse = {
          id: Date.now() + 1,
          type: 'ai',
          content: 'Sorry, I encountered an error processing your question. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, errorResponse]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Sorry, I encountered a network error. Please check your connection and try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-900 flex">
    {/* Sidebar */}
  <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">  {/* Decreased width */}
        {/* Header */}
  <div className="p-4 border-b border-slate-700"> {/* Decreased padding */}
          <div className="flex items-center space-x-2 mb-2"> {/* Decreased spacing */}
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md"> {/* Smaller avatar */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-lg font-bold text-white">StudyMate</h1>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-200 text-xs"
          >
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Uploaded Documents */}
        <div className="flex-1 p-4">
          <h3 className="text-base font-semibold text-white mb-2">Your Documents</h3>
          <div className="space-y-2">
            {documents.length === 0 ? (
              <p className="text-slate-400 text-sm">No documents uploaded yet</p>
            ) : (
              documents.map((doc) => (
                <div key={doc.id} className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 transition-colors duration-200">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-red-900 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">{doc.filename}</p>
                      <p className="text-xs text-slate-400">Uploaded {new Date(doc.uploaded_at).toLocaleDateString()}</p>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-medium bg-green-900 text-green-300">
                          Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Upload Button */}
  <div className="p-4 border-t border-slate-700">
          <Link 
            to="/upload" 
            className="w-full bg-blue-700 text-white py-2 px-2 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200 text-center block text-sm"
          >
            Upload New Document
          </Link>
        </div>
      </div>

      {/* Main Chat Area */}
  <div className="flex-1 flex flex-col">
        {/* Chat Header */}
  <div className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">AI Study Assistant</h2>
              <p className="text-xs text-slate-400">Ask questions about your documents</p>
            </div>
          </div>
        </div>

        {/* Messages */}
  <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-slate-900 custom-chat-scroll" style={{maxHeight: 'calc(100vh - 120px)'}}>
  {/* Hide scrollbar for chat area */}
  <style>{`
    .custom-chat-scroll::-webkit-scrollbar { display: none; }
    .custom-chat-scroll { scrollbar-width: none; -ms-overflow-style: none; }
  `}</style>
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}> {/* Decreased max width */}
                <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-blue-700' 
                      : 'bg-gradient-to-r from-blue-700 to-purple-700'
                  }`}>
                    {message.type === 'user' ? (
                      <span className="text-white text-xs font-medium">U</span>
                    ) : (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                  </div>
                  {/* Message Content */}
                  <div className={`rounded-xl px-3 py-2 ${
                    message.type === 'user' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-slate-800 border border-slate-700 text-slate-200'
                  }`}>
                    <div className="whitespace-pre-wrap text-xs leading-relaxed">
                      {message.content}
                    </div>
                    {/* Sources */}
                    {message.sources && (
                      <div className="mt-2 pt-2 border-t border-slate-700">
                        <p className="text-xs font-medium text-slate-400 mb-1">Sources:</p>
                        <div className="space-y-0.5">
                          {message.sources.map((source, index) => (
                            <div key={index} className="text-xs text-slate-500">
                              📄 {source.title} (page {source.page})
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-200' : 'text-slate-500'
                    }`}>
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xl">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-slate-200">
                    <div className="flex space-x-0.5">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-slate-800 border-t border-slate-700 p-3">
          <form onSubmit={handleSendMessage} className="flex items-end space-x-2">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask a question about your documents..."
                className="w-full px-3 py-2 border border-slate-700 bg-slate-900 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                rows="2"
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
              disabled={!inputMessage.trim()}
              className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default ChatPage;