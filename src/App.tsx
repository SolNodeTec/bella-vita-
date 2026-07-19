/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] overflow-x-hidden selection:bg-wine-900 selection:text-gold-200">
      {/* Floating glassmorphic navigation header */}
      <Navbar onReserveClick={() => scrollToSection('reservas')} />

      {/* Main Sections */}
      <main>
        {/* Immersive Welcome Hero */}
        <Hero 
          onReserveClick={() => scrollToSection('reservas')} 
          onExploreClick={() => scrollToSection('menu')} 
        />

        {/* Narrative Heritage & Chef Section */}
        <About />

        {/* Interactive Gastronomic Menu */}
        <Menu />

        {/* Immersive Bento Gallery & Lightbox */}
        <Gallery />

        {/* Breathtaking Online Reservation Panel */}
        <Reservations />

        {/* Press/Critics Testimonials */}
        <Testimonials />

        {/* Contact details, opening hours, and visual map */}
        <Contact />
      </main>

      {/* Elegant designer footer */}
      <Footer />
    </div>
  );
}

