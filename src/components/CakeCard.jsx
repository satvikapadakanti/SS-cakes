import React from 'react';

const CakeCard = ({ cake }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <img
        src={cake.image}
        alt={cake.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{cake.name}</h2>
        <p className="text-gray-600 mb-3">₹{cake.price}</p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CakeCard;
