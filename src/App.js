import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/Landing';
import ContentPage from './components/Content'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ContentPage />
    </div>
  );
}

export default App;
