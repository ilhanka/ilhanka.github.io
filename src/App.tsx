import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import About from './components/About';
import Timeline from './components/Timeline';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Specialties />
      <About />
      <Timeline />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;