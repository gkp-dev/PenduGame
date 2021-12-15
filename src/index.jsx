import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { Toaster } from 'react-hot-toast'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" toastOptions={{duration: 10000,}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

