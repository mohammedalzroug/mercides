import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Carsol from './Carsol';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Section from './Section';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Navbar />
    <Carsol />
    <Section />
    <Footer />
  </React.StrictMode>
);

