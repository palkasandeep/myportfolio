import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <PortFolio />
      </div>
      <div id="experience">
        <Experiance />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
