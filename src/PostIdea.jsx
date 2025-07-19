import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useIdeas } from './IdeasContext';

const categories = [
  'Mobile App',
  'Web Platform',
  'Website',
  'AI/ML',
  'IoT',
  'VR/AR',
  'Blockchain',
  'Other'
];

const PostIdea = () => {
  const { addIdea } = useIdeas();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: categories[0],
    attachment: null
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'attachment') {
      setForm(f => ({ ...f, attachment: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      setError('Title and description are required.');
      return;
    }
    addIdea({
      title: form.title,
      description: form.description,
      category: form.category,
      author: 'Prateek Kumar',
      image: form.attachment ? URL.createObjectURL(form.attachment) : undefined
    });
    navigate('/explore');
  };

  return (
    <div className="bg-[#101827] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-[#232b36] rounded-xl shadow-lg p-6 sm:p-8 w-full flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Post a New Idea</h1>
          {error && <div className="text-red-400 text-sm mb-2">{error}</div>}
          
          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-[#101827] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-[#101827] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Category/Tag</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-[#101827] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-1 text-sm sm:text-base">Attachment (optional)</label>
            <input
              type="file"
              name="attachment"
              accept="image/*,application/pdf,.doc,.docx,.ppt,.pptx,.txt"
              onChange={handleChange}
              className="w-full text-white text-sm sm:text-base"
            />
            {form.attachment && (
              <div className="text-gray-400 text-xs mt-1">Selected: {form.attachment.name}</div>
            )}
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold hover:bg-blue-700 transition-colors mt-2 text-sm sm:text-base"
          >
            Post Idea
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PostIdea; 