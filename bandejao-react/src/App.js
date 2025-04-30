// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Order />
      <Footer />
    </div>
  );
}

export default App;