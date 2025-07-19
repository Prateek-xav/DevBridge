import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-[#232b36] rounded-xl shadow-lg p-6 sm:p-8 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">About the Developer</h1>
          <div className="mb-6">
            <img
              src="/me.jpg"
              alt="Prateek Kumar"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 object-cover ring-4 ring-blue-400/50 hover:ring-blue-300 transition duration-300 mx-auto"
              style={{ boxShadow: '0 0 24px 4px #2563eb, 0 2px 8px rgba(0,0,0,0.2)' }}
            />
            <p className="text-base sm:text-lg text-white font-semibold">Prateek Kumar</p>
            <p className="text-gray-300 text-sm sm:text-base">Bennett University</p>
          </div>
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            This is just a concept project focused on the frontend. All features, UI, and flows are for demonstration and learning purposes only.
          </p>
          <div className="mt-6 sm:mt-8">
            <span className="inline-block bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">Frontend Concept Project</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 