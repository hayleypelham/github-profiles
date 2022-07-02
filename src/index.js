import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Search from './components/Search';
import Result from './components/Result';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <main>
        <Header />
        <Search />
        <Result />
      </main>
    </>
  </React.StrictMode>
);