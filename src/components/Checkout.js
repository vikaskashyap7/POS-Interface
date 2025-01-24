import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../context/ApiContext';

function Checkout() {
  const { cart, clearCart, setReceipt } = useContext(ApiContext);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const receipt = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0),
      customerDetails,
    };
    setReceipt(receipt); // Store receipt in context
    clearCart(); // Clear cart after purchase
    navigate('/receipt'); // Redirect to receipt page
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div >
            <label className="block text-gray-700 font-semibold" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={customerDetails.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={customerDetails.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={customerDetails.phone}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Complete Purchase
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
