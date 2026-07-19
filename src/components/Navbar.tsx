import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, Wine } from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['inicio', 'sobre', 'menu', 'galeria', 'reservas', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'O Restaurante', id: 'sobre' },
    { label: 'O Menu', id: 'menu' },
    { label: 'Galeria', id: 'galeria' },
    { label: 'Reservas', id: 'reservas' },
    { label: 'Críticas', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <Wine className="w-6 h-6 text-gold-400 group-hover:rotate-12 transition-transform duration-500" />
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl tracking-[0.25em] font-medium text-white group-hover:text-gold-300 transition-colors">
                BELLA VITA
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-gold-500 font-mono">
                Ristorante Premium
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                id={`nav-item-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 focus:outline-none cursor-pointer ${
                  activeSection === item.id
                    ? 'text-gold-300'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center">
            <button
              id="btn-nav-reserve"
              onClick={onReserveClick}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-gold-500/30 bg-wine-950/40 text-xs uppercase tracking-widest text-gold-300 font-medium hover:border-gold-400 transition-all duration-500 shadow-lg shadow-wine-950/20 cursor-pointer focus:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-gold-400 group-hover:scale-110 transition-transform" />
                Reservar Mesa
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-8"
          >
            <div className="flex flex-col gap-6 mt-8">
              {menuItems.map((item, index) => (
                <motion.button
                  id={`mobile-nav-item-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-3xl tracking-wide py-2 focus:outline-none cursor-pointer ${
                    activeSection === item.id ? 'text-gold-400' : 'text-neutral-400'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6 border-t border-white/5 pt-8"
            >
              <button
                id="mobile-drawer-reserve"
                onClick={() => {
                  setIsOpen(false);
                  onReserveClick();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-wine-900 to-wine-800 text-center text-sm font-medium uppercase tracking-widest text-gold-200 border border-gold-500/20 shadow-xl cursor-pointer"
              >
                Reservar Mesa Online
              </button>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                  Bella Vita Ristorante — Milano
                </p>
                <p className="text-xs text-neutral-400 mt-1 font-sans">+39 02 1234 5678</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
