import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-[#151c26] border-b border-[#232b36]">
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to="/" className="font-bold text-white text-lg sm:text-xl flex items-center gap-2">
          <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#2563eb"/><path d="M7 17V7h2v3.5l2-2V7h2v3.5l2-2V7h2v10h-2v-3.5l-2 2V17h-2v-3.5l-2 2V17H7Z" fill="#fff"/></svg>
          <span className="hidden sm:inline">DevBridge</span>
          <span className="sm:hidden">DB</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/" 
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/explore' ? 'text-blue-400' : 'text-white hover:text-blue-400'
            }`}
          >
            Explore
          </Link>
          <Link 
            to="/about" 
            className={`px-3 py-1 transition-colors ${
              location.pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'
            }`}
          >
            About
          </Link>
        </div>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded bg-[#232b36] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M11.742 10.344h-.793l-.28-.27a6.471 6.471 0 0 0 1.48-4.07A6.5 6.5 0 1 0 5.5 11.5c1.61 0 3.09-.59 4.07-1.48l.27.28v.793l4.25 4.24 1.27-1.27-4.24-4.25zm-6.242 0A4.5 4.5 0 1 1 10 5.5a4.5 4.5 0 0 1-4.5 4.5z" fill="currentColor"/></svg>
          </span>
        </div>
        <button onClick={() => navigate('/post-idea')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium text-sm">Post Idea</button>
        <img src="" alt="Profile" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-blue-600 object-cover" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={() => navigate('/post-idea')} className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs">Post</button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-1"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#151c26] border-b border-[#232b36] md:hidden z-50">
          <div className="px-4 py-4 space-y-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded bg-[#232b36] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M11.742 10.344h-.793l-.28-.27a6.471 6.471 0 0 0 1.48-4.07A6.5 6.5 0 1 0 5.5 11.5c1.61 0 3.09-.59 4.07-1.48l.27.28v.793l4.25 4.24 1.27-1.27-4.24-4.25zm-6.242 0A4.5 4.5 0 1 1 10 5.5a4.5 4.5 0 0 1-4.5 4.5z" fill="currentColor"/></svg>
              </span>
            </div>
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors ${
                location.pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors ${
                location.pathname === '/explore' ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              Explore
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors ${
                location.pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <div className="flex items-center gap-2 pt-2">
              <img src="" alt="Profile" className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" />
              <span className="text-white text-sm">Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 