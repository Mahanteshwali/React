import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cartitem from './wrapper.js';
import './css/wrapper.css';
import About_Section from './navigation/about.js';
import Home_section from './navigation/home.js';
import Contact_Section from './navigation/contact.js';

function Home() {
  return (
    <div className='home'>
      <Home_section />
    </div>
  )
}

function About() {
  return (
    <div>
      <About_Section />
    </div>
  )
}

function Contact() {
  return (
    <div>
      <Contact_Section />
    </div>
  )
}
function Products() {
  return (
    <div className='product_container'>
      <Cartitem />
    </div>
  )
}
function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        
        <Link to="/about">About</Link> |
        
        <Link to="/contact">Contact</Link> |
        
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default Routerex;