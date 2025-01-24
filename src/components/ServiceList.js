import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { toast } from 'react-toastify';  // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const services = [
  { id: 1, name: 'Fitness Class', price: 20 },
  { id: 2, name: 'Therapy Session', price: 50 },
  { id: 3, name: 'Workshop', price: 30 },
  { id: 4, name: 'Yoga Class', price: 25 },
  { id: 5, name: 'Meditation Session', price: 15 },
  { id: 6, name: 'Personal Training', price: 60 },
  { id: 7, name: 'Group Workout', price: 40 },
  { id: 8, name: 'Nutrition Counseling', price: 55 },
  { id: 9, name: 'Massage Therapy', price: 80 },
  { id: 10, name: 'Pilates Class', price: 35 },
];

function ServiceList() {
  const { addToCart } = useContext(ApiContext);

  // Function to handle adding items to the cart and showing the toast
  const handleAddToCart = (service) => {
    addToCart(service); // Add the item to the cart
    toast.success(`${service.name} added to cart!`);
  };

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Available Services</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex justify-between items-center border-b border-gray-300 pb-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-base font-semibold text-gray-800">{service.name}</h3>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-lg font-semibold text-gray-800">${service.price.toFixed(2)}</h4>
              <button
                type="button"
                onClick={() => handleAddToCart(service)} // Use the new function here
                className="mt-2 font-semibold text-blue-600 hover:underline text-xs"
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
