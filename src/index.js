import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import Search from './components/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <main>
        <Header />
        <Search />
      </main>
    </>
  </React.StrictMode>
);