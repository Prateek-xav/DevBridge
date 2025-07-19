import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Hero Section */}
        <section className="bg-[#232b36] rounded-xl p-4 sm:p-8 mb-6 sm:mb-10">
          <div className="relative w-full">
            <img
              src="/hero.jpg"
              alt="Hero"
              className="w-full h-48 sm:h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center rounded-lg p-4 sm:p-8">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4">
                Share Your Ideas, Inspire Innovation
              </h1>
              <p className="text-sm sm:text-lg text-gray-200 mb-4 sm:mb-6 max-w-2xl">
                Connect with developers and bring your ideas to life. Explore innovative projects and contribute to the future of technology.
              </p>
              <div className="flex w-full max-w-md mx-auto bg-white/10 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-3 sm:px-4 py-2 bg-transparent text-white placeholder-gray-200 focus:outline-none text-sm sm:text-base"
                />
                <button className="px-4 sm:px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-sm sm:text-base">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">Get Started</h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Join our community and start sharing your ideas or exploring projects today.</p>
          <button 
            onClick={() => navigate('/explore')}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold mb-6 sm:mb-8 hover:bg-blue-700 text-sm sm:text-base"
          >
            Explore Ideas
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-[#232b36] rounded-lg p-4 sm:p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Share Your Idea</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Have a groundbreaking idea? Share it with our community and find developers to bring it to life.</p>
            </div>
            <div className="bg-[#232b36] rounded-lg p-4 sm:p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24"><path d="M8 17l4-4 4 4M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Find a Project</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Browse through a wide range of innovative projects and find one that sparks your interest.</p>
            </div>
            <div className="bg-[#232b36] rounded-lg p-4 sm:p-6 flex flex-col items-start">
              <div className="mb-3 text-blue-400">
                <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6M9 20H4a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1">Collaborate</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Connect with other users, collaborate on projects, and build the future of technology together.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 