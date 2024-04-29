import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
root.render(app);

