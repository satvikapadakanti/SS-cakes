import React from 'react';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <div className="bg-red-500 text-white p-8 text-center text-2xl m-4 rounded-lg">
        🎂 TAILWIND TEST - Should be RED background with WHITE text
      </div>
      <Header />
      <Home />
    </div>
  );
}

export default App;