import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartImage from './SmartImage';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Warum wir', href: '#warum-wir', highlight: true },
    { name: 'Training', href: '#training' },
    { name: 'Preise', href: '#preise' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-2 group">
             <span className="text-2xl font-black italic tracking-tighter text-white">TEAM</span>
             <div className="relative w-10 h-10 md:w-12 md:h-12">
               <SmartImage 
                 data={IMAGES.logo} 
                 className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                 style={{ filter: 'drop-shadow(0 0 8px rgba(220,38,38,0.3))' }}
               />
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                  link.highlight 
                    ? 'px-6 py-2 border border-brand-red text-brand-red rounded hover:bg-brand-red hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]' 
                    : 'text-gray-200 hover:text-brand-red'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontakt" 
              className="flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 rounded text-sm font-bold uppercase hover:bg-red-700 transition-all transform hover:-translate-y-0.5"
            >
              Starten <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={toggleMenu} 
              className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors"
            >
              <X size={40} />
            </button>
            
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className={`text-3xl font-black italic uppercase transition-colors ${link.highlight ? 'text-brand-red' : 'text-white hover:text-brand-red'}`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;