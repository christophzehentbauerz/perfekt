import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Zap } from 'lucide-react';
import SmartImage from './SmartImage';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-brand-surface border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-2xl mb-4">Disziplinen</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase text-white">Wähle deinen Weg</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-black border border-white/10"
          >
            <SmartImage data={IMAGES.kraft} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <div className="flex items-center gap-4 mb-3 text-brand-red">
                <Dumbbell size={40} />
                <h4 className="text-4xl font-black italic uppercase text-white">Krafttraining</h4>
              </div>
              <p className="text-gray-300 max-w-md text-lg">Individuelle Pläne, Technik-Check und messbare Fortschritte. Wir bauen das Fundament für deinen Körper.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative md:row-span-2 overflow-hidden rounded-3xl bg-black border border-white/10"
          >
             <SmartImage data={IMAGES.laufen} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <div className="flex items-center gap-4 mb-3 text-brand-red">
                <Activity size={40} />
                <h4 className="text-4xl font-black italic uppercase text-white">Laufen</h4>
              </div>
              <p className="text-gray-300 text-lg">Regelmäßige Laufeinheiten für ein starkes Herz und endlose Ausdauer.</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="group relative overflow-hidden rounded-3xl bg-black border border-white/10"
          >
             <SmartImage data={IMAGES.boxen} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <div className="flex items-center gap-4 mb-3 text-brand-red">
                <Zap size={40} />
                <h4 className="text-3xl font-black italic uppercase text-white">Boxen</h4>
              </div>
              <p className="text-gray-300">Klassisches Boxen, MMA-Elemente und Sparring.</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-brand-red rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <span className="text-7xl md:text-9xl font-black leading-none mb-4">10+</span>
             <span className="text-base font-black uppercase tracking-[0.2em] mb-6 border-b-2 border-white/30 pb-4">Jahre Erfahrung</span>
             <p className="text-2xl font-black italic leading-tight uppercase">"Harte Workouts,<br/>echte Ergebnisse."</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;