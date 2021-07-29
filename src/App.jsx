//npm packages
import React from 'react';
import axios from 'axios';
//project files
import Hero from './components/Hero';

const baseURL = "https://api.foursquare.com/v2/venues/explore/";


export default function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Hero/>
    </div>
  );
}
