import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enrollment, setEnrollment] = useState('');

  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'Prateek' && password === 'Youtuber@1') {
      setError('');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
      <div className="w-full max-w-xs">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enrollment Number"
          className="mb-4 w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={enrollment}
          onChange={e => setEnrollment(e.target.value)}
        />
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}
        <button
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={onLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;