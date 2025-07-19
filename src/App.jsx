import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Explore from './Explore';
import About from './About';
import PostIdea from './PostIdea';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? (
              <Login onLogin={() => setIsAuthenticated(true)} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/" 
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/explore" 
          element={
            isAuthenticated ? (
              <Explore />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/about" 
          element={
            isAuthenticated ? (
              <About />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/post-idea" 
          element={
            isAuthenticated ? (
              <PostIdea />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
