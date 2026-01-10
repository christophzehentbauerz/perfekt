import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { LEGAL_TEXTS } from './constants';
import { LegalDocType } from './types';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openLegal = (type: LegalDocType) => {
    setModalContent(LEGAL_TEXTS[type]);
  };

  return (
    <div className="bg-brand-black min-h-screen text-gray-100 selection:bg-brand-red selection:text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <Pricing />
      <Footer openLegal={openLegal} />
      <Modal content={modalContent} onClose={() => setModalContent(null)} />
      <Analytics />
    </div>
  );
}

export default App;