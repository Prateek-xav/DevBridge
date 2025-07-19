import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIdeas } from './IdeasContext';

const Explore = () => {
  const { ideas, toggleLike, likedIdeas } = useIdeas();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Mobile App', 'Web Platform', 'Website', 'AI/ML', 'IoT', 'VR/AR', 'Blockchain', 'Other'];

  // Filter ideas based on search term and category
  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Explore Ideas</h1>
          <p className="text-gray-300 text-base sm:text-lg">Discover innovative projects and connect with creators</p>
        </div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#232b36] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
          <div className="sm:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#232b36] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 text-sm sm:text-base">
            Showing {filteredIdeas.length} of {ideas.length} ideas
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredIdeas.map(idea => {
            const isLiked = likedIdeas.has(idea.id);
            return (
              <div key={idea.id} className="bg-[#232b36] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={idea.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"} 
                  alt={idea.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {idea.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(idea.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">{idea.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">{idea.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-400">by {idea.author}</span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toggleLike(idea.id)}
                        className={`flex items-center gap-1 transition-colors ${
                          isLiked ? 'text-red-400 hover:text-red-300' : 'text-gray-400 hover:text-blue-400'
                        }`}
                      >
                        <svg width="14" height="14" className="sm:w-4 sm:h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="text-xs sm:text-sm">{idea.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results message */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-400 text-base sm:text-lg">No ideas found matching your criteria.</p>
            <p className="text-gray-500 text-sm sm:text-base mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Explore; 