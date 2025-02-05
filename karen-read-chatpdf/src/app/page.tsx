'use client';

import React from 'react';

// import Dashboard from "./components/Dashboard/Dashboard";
import DocumentReader from "./components/TTS/DocumentReader";

const HomePage: React.FC = () => {
  return (
    <div className='pt-8'> 
      <DocumentReader />
    </div>
  );
};

export default HomePage;
