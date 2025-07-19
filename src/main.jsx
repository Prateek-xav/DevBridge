import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IdeasProvider } from './IdeasContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdeasProvider>
      <App />
    </IdeasProvider>
  </React.StrictMode>
);
