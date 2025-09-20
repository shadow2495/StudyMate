import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const UploadPDF = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [, setUploadProgress] = useState({});
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    
    if (pdfFiles.length !== files.length) {
      alert('Please only upload PDF files.');
    }

    pdfFiles.forEach(file => {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        alert(`File "${file.name}" is too large. Maximum size is 50MB.`);
        return;
      }

      const fileId = Date.now() + Math.random();
      const fileData = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        status: 'uploading',
        progress: 0
      };

      setUploadedFiles(prev => [...prev, fileData]);
      simulateUpload(fileId);
    });
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, status: 'completed', progress: 100 }
            : file
        ));
      } else {
        setUploadProgress(prev => ({ ...prev, [fileId]: progress }));
        setUploadedFiles(prev => prev.map(file => 
          file.id === fileId 
            ? { ...file, progress: Math.round(progress) }
            : file
        ));
      }
    }, 200);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileStatusIcon = (status) => {
    switch (status) {
      case 'uploading':
        return (
          <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        );
      case 'completed':
        return (
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Navigation */}
      <nav className="glass-card border-0 border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-gradient rounded-xl flex items-center justify-center">
              <span className="text-lg sm:text-xl font-bold text-white">S</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text">StudyMate</span>
          </Link>
          
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link 
              to="/chat" 
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Chat
            </Link>
            <Link 
              to="/dashboard" 
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Upload Your <span className="gradient-text">Study Materials</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Upload PDF documents and let our AI help you understand and learn from them effectively.
          </p>
        </div>

        {/* Upload Area */}
        <div className="mb-8">
          <div
            className={`glass-card rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer border-2 border-dashed ${
              dragActive 
                ? 'border-blue-400 bg-blue-500/10 scale-105' 
                : 'border-white/20 hover:border-white/40 hover:bg-white/5'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="animate-float">
              <div className="w-20 h-20 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Drop your PDF files here
            </h3>
            
            <p className="text-slate-300 mb-6 text-lg">
              or click to browse and select files
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF files only
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Max 50MB per file
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure & Private
              </span>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>

        {/* Upload Progress */}
        {uploadedFiles.length > 0 && (
          <div className="glass-card rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Uploading Files ({uploadedFiles.length})
            </h3>
            
            <div className="space-y-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="glass p-4 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        {getFileStatusIcon(file.status)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">
                          {file.name}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-slate-300">
                        {file.progress}%
                      </span>
                      
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-slate-400 hover:text-red-400 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        file.status === 'completed' 
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                      }`}
                      style={{ width: `${file.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link 
            to="/dashboard" 
            className="border border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Dashboard
          </Link>
          
          <Link 
            to="/chat" 
            className="bg-primary-gradient text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow-lg transition-all duration-300 btn-glow"
          >
            Start Chatting
          </Link>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Processing</h3>
            <p className="text-slate-300 text-sm">Our AI processes your PDFs quickly and efficiently</p>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
            <p className="text-slate-300 text-sm">Your documents are encrypted and never shared</p>
          </div>
          
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Analysis</h3>
            <p className="text-slate-300 text-sm">AI understands context and provides relevant answers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPDF;
