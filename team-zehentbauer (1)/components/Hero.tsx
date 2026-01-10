import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SmartImage from './SmartImage';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SmartImage 
          data={IMAGES.hero} 
          className="w-full h-full object-cover opacity-50 grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-brand-red/50 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
            Horn • Österreich
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white">
            Deine <span className="text-brand-red">Stärke.</span><br />
            Unser Ziel.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Individuelles Krafttraining, Laufen und Boxen. Wir machen dich stärker, gesünder und selbstbewusster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href={`${SOCIAL_LINKS.whatsapp}&text=Hallo+Christoph+ich+will+starten.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-brand-red text-white font-black uppercase tracking-wider rounded-xl hover:bg-brand-darkRed transition-all flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(220,38,38,0.3)]"
            >
              Probetraining <ArrowRight size={20} />
            </a>
            <a 
              href="#training" 
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/10 text-white font-black uppercase tracking-wider rounded-xl hover:bg-white hover:text-black transition-all"
            >
              Angebote ansehen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;