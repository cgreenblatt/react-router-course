import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="yellow-border" />
    <App />
  </React.StrictMode>
);
