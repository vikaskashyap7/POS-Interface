import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [receipt, setReceipt] = useState(null);

  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const clearCart = () => setCart([]);

  return (
    <ApiContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, receipt, setReceipt }}>
      {children}
    </ApiContext.Provider>
  );
};
