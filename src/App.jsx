//npm packages
import React from 'react';
import axios from 'axios';
//project files
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
const baseURL = "https://api.foursquare.com/v2/venues/explore/";


export default function App() {
  

  return (
    <div className="App">
      <Header/>
      <Hero />
      <Footer/>
    </div>
  );
}
