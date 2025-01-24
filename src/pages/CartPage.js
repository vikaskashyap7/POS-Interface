import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { toast } from 'react-toastify';  // Importing toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Checkout from '../components/Checkout';

function CartPage() {
  const { cart, removeFromCart } = useContext(ApiContext);

  // Function to handle removing items from the cart and showing the toast
  const handleRemoveFromCart = (index, item) => {
    removeFromCart(index); // Remove the item from the cart
    toast.info(`${item.name} has been removed from the cart.`);
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      
      {cart.length === 0 ? (
        <p className='flex justify-center items-center w-full h-screen font-bold font-serif text-3xl leading-6 '>Your cart is empty!</p>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-gray-800 text-center pt-7">Your Cart</h2>
          <ul className="space-y-4 mt-6">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-300 pb-4"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                  </div>
                </div>

                <div className="text-right">
                  <h4 className="text-lg font-bold text-gray-800">${item.price.toFixed(2)}</h4>
                  <button
                    type="button"
                    className="mt-2 font-semibold text-red-500 text-xs"
                    onClick={() => handleRemoveFromCart(index, item)} // Use the new function here
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xl font-semibold text-gray-800">
            <strong>Total:</strong> $ 
            {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>

          <Checkout/>
        </>
      )}
    </div>
  );
}

export default CartPage;
