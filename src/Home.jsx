import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="relative rounded-xl mb-10 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Share Your Ideas, Inspire Innovation
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl">
              Connect with developers and bring your ideas to life. Explore innovative projects and contribute to the future of technology.
            </p>
            <div className="flex w-full max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-200 focus:outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-4">Get Started</h2>
          <p className="text-gray-300 mb-6">Join our community and start sharing your ideas or exploring projects today.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold mb-8 hover:bg-blue-700">Explore Ideas</button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#232b36] rounded-lg p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Share Your Idea</h4>
              <p className="text-gray-400 text-sm">Have a groundbreaking idea? Share it with our community and find developers to bring it to life.</p>
            </div>
            <div className="bg-[#232b36] rounded-lg p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M8 17l4-4 4 4M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Find a Project</h4>
              <p className="text-gray-400 text-sm">Browse through a wide range of innovative projects and find one that sparks your interest.</p>
            </div>
            <div className="bg-[#232b36] rounded-lg p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6M9 20H4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Collaborate</h4>
              <p className="text-gray-400 text-sm">Connect with other users, collaborate on projects, and build the future of technology together.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 