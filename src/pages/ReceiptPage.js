import React, { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

function ReceiptPage() {
  const { receipt } = useContext(ApiContext);

  if (!receipt) {
    return <p className="text-center text-red-600 font-semibold">No receipt available. Please complete a purchase first.</p>;
  }

  return (
    <div className='min-w-full r'>
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Receipt</h2>
      <p className="text-sm text-gray-600">Transaction ID: <span className="font-semibold text-gray-800">{receipt.id}</span></p>

      <h3 className="text-lg font-semibold text-gray-700 mt-6">Items Purchased:</h3>
      <ul className="space-y-2 mt-2">
        {receipt.items.map((item, index) => (
          <li key={index} className="flex justify-between text-gray-700">
            <span>{item.name}</span>
            <span className="font-semibold">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <p className="text-lg font-bold text-gray-800 mt-4">
        <strong>Total:</strong> ${receipt.total.toFixed(2)}
      </p>

      <h3 className="text-lg font-semibold text-gray-700 mt-6">Customer Details:</h3>
      <div className="space-y-2 mt-2">
        <p><strong>Name:</strong> {receipt.customerDetails.name}</p>
        <p><strong>Email:</strong> {receipt.customerDetails.email}</p>
        <p><strong>Phone:</strong> {receipt.customerDetails.phone}</p>
      </div>
    </div>
    </div>
  );
}

export default ReceiptPage;
