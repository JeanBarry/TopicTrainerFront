import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import Listing from "./components/pages/Listing";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Listing/>
  </React.StrictMode>
);

reportWebVitals();
