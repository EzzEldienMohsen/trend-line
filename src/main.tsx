import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const rootElement =document.getElementById('root') 
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <ToastContainer position="top-center" autoClose={2000} />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
