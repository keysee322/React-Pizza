import React, { createContext } from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Empty from './pages/Empty';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

console.log(SearchContext);

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
