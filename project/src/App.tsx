import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CV from './components/CV';
import Publications from './components/Publications';
import InternationalExperience from './components/InternationalExperience';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import ContactModal from './components/ContactModal';

function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navigation onAppointmentClick={openAppointmentModal} />
      <Hero onAppointmentClick={openAppointmentModal} onContactClick={openContactModal} />
      <About />
      <CV />
      <Publications />
      <InternationalExperience />
      <Specialties onAppointmentClick={openAppointmentModal} />
      <Testimonials />
      <Contact />
      <Footer />
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={closeAppointmentModal}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
      />
    </div>
  );
}

export default App;