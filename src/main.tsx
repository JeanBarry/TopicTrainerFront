import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Listing from "./components/pages/Listing.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className={'relative'}>
      <Listing/>
    </div>
  </React.StrictMode>,
)
