import React, { createContext, useContext, useState } from 'react';

const IdeasContext = createContext();

export const IdeasProvider = ({ children }) => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "Revolutionary App for Sustainable Living",
      description: "An app designed to promote sustainable practices in everyday life, from energy conservation to waste reduction.",
      category: "Mobile App",
      author: "Sarah Chen",
      likes: 42,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Next-Gen Platform for Creative Collaboration",
      description: "A platform that connects artists, designers, and developers to collaborate on innovative projects.",
      category: "Web Platform",
      author: "Mike Rodriguez",
      likes: 38,
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "AI-Powered Tool for Personalized Education",
      description: "An AI-driven tool that adapts to individual learning styles, providing a customized educational experience.",
      category: "AI/ML",
      author: "Alex Johnson",
      likes: 56,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-13"
    },
    {
      id: 4,
      title: "Smart Home Energy Management System",
      description: "IoT-based system that optimizes energy consumption in homes using machine learning algorithms.",
      category: "IoT",
      author: "Emma Wilson",
      likes: 29,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-12"
    },
    {
      id: 5,
      title: "Virtual Reality Fitness Platform",
      description: "VR-based fitness platform that makes workouts more engaging and interactive.",
      category: "VR/AR",
      author: "David Kim",
      likes: 33,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-11"
    },
    {
      id: 6,
      title: "Blockchain-Based Supply Chain Tracker",
      description: "Transparent supply chain tracking system using blockchain technology for better traceability.",
      category: "Blockchain",
      author: "Lisa Park",
      likes: 47,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=80",
      date: "2024-01-10"
    }
  ]);

  const [likedIdeas, setLikedIdeas] = useState(new Set());

  const addIdea = (idea) => {
    setIdeas(prev => [
      { ...idea, id: Date.now(), date: new Date().toISOString(), likes: 0 },
      ...prev
    ]);
  };

  const toggleLike = (ideaId) => {
    setIdeas(prev => prev.map(idea => {
      if (idea.id === ideaId) {
        const isLiked = likedIdeas.has(ideaId);
        return {
          ...idea,
          likes: isLiked ? idea.likes - 1 : idea.likes + 1
        };
      }
      return idea;
    }));

    setLikedIdeas(prev => {
      const newLikedIdeas = new Set(prev);
      if (newLikedIdeas.has(ideaId)) {
        newLikedIdeas.delete(ideaId);
      } else {
        newLikedIdeas.add(ideaId);
      }
      return newLikedIdeas;
    });
  };

  return (
    <IdeasContext.Provider value={{ ideas, addIdea, toggleLike, likedIdeas }}>
      {children}
    </IdeasContext.Provider>
  );
};

export const useIdeas = () => useContext(IdeasContext); 