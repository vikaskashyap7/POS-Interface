import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { ApiProvider } from './context/ApiContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>
    <ToastContainer />
      <App />
      
    </ApiProvider>
  </React.StrictMode>
);
