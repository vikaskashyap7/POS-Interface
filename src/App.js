import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/ServiceList';
import CartPage from './pages/CartPage';

import ReceiptPage from './pages/ReceiptPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
