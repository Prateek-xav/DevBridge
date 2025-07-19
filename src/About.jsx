import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-[#232b36] rounded-xl shadow-lg p-8 w-full flex flex-col items-center">
          <div className="mb-6">
            <img
              src="/me.jpg"
              alt="Prateek Kumar"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 object-cover ring-4 ring-blue-400/50 hover:ring-blue-300 transition duration-300"
              style={{ boxShadow: '0 0 24px 4px #2563eb, 0 2px 8px rgba(0,0,0,0.2)' }}
            />
            <p className="text-lg text-white font-semibold">Prateek Kumar</p>
            <p className="text-gray-300">Bennett University</p>
          </div>
          <p className="text-gray-400 mb-4">
            This is just a concept project focused on the frontend. All features, UI, and flows are for demonstration and learning purposes only.
          </p>
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">Frontend Concept Project</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 