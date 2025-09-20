import React from 'react';

const team = [
  {
    name: 'Aman Sharma',
    role: 'Founder & Lead Developer',
    avatar: 'https://ui-avatars.com/api/?name=Aman+Sharma&background=6366f1&color=fff&size=128'
  },
  {
    name: 'Priya Singh',
    role: 'AI Researcher',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Singh&background=06b6d4&color=fff&size=128'
  },
  {
    name: 'Rahul Verma',
    role: 'Frontend Engineer',
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=8b5cf6&color=fff&size=128'
  }
];

const About = () => (
  <div className="min-h-screen bg-slate-900 text-white py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold gradient-text mb-8 text-center">About StudyMate</h1>
      <p className="text-lg text-slate-300 mb-12 text-center">
        StudyMate is an AI-powered academic assistant designed to help students learn smarter, not harder. Our mission is to make advanced study tools accessible to everyone, empowering learners to reach their full potential.
      </p>
      <div className="bg-slate-800 rounded-2xl p-8 shadow-xl mb-12">
        <h2 className="text-2xl font-semibold mb-4 gradient-text text-center">Our Mission</h2>
        <p className="text-slate-300 text-center">
          We believe in the power of technology to transform education. StudyMate leverages cutting-edge AI to analyze documents, answer questions, and provide personalized study analytics—all in a secure, private, and user-friendly platform.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mb-6 gradient-text text-center">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
            <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500" />
            <h3 className="text-xl font-bold mb-2 gradient-text">{member.name}</h3>
            <p className="text-slate-300">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
