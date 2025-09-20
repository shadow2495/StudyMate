import React from 'react';

const features = [
  {
    title: 'Smart Document Analysis',
    description: 'Upload your PDFs and let our AI extract key insights, summarize content, and answer your questions.',
    icon: (
      <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Natural Language Q&A',
    description: 'Ask questions in plain English and get accurate, contextual answers from your documents.',
    icon: (
      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Study Analytics',
    description: 'Track your learning progress, identify knowledge gaps, and optimize your study sessions.',
    icon: (
      <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Features = () => (
  <div className="min-h-screen bg-slate-900 text-white py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold gradient-text mb-8 text-center">Features</h1>
      <p className="text-lg text-slate-300 mb-12 text-center">Discover StudyMate's powerful features for smarter learning.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-6">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 gradient-text">{feature.title}</h2>
            <p className="text-slate-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Features;
