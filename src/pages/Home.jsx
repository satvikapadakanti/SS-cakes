import React from 'react';
import cakeData from '../data/cakes.json';
import CakeCard from '../components/CakeCard';

const Home = () => {
  return (
    <div className="p-6 bg-rose-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Explore Flavours 🍰
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cakeData.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default Home;
