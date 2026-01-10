import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SmartImage from './SmartImage';
import { IMAGES } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="erfolge" className="py-24 bg-black relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Erfolgsgeschichten</h2>
          <h3 className="text-4xl font-black italic uppercase text-white">Das sagen unsere Athleten</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-surface p-8 rounded-2xl border border-white/5 relative"
          >
            <Quote className="text-brand-red absolute top-8 right-8 opacity-20" size={60} />
            <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
              "Seit ich bei Team Z trainiere, habe ich nicht nur 10kg abgenommen, sondern fühle mich im Alltag viel belastbarer. Die Kombination aus Kraft und Boxen ist der Hammer!"
            </p>
            <div className="flex items-center gap-4">
              <SmartImage data={IMAGES.testimonial1} className="w-12 h-12 rounded-full object-cover border-2 border-brand-red" />
              <div>
                <h5 className="font-bold text-white uppercase">Markus S.</h5>
                <span className="text-xs text-brand-red font-bold uppercase tracking-wider">Krafttraining & Boxen</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface p-8 rounded-2xl border border-white/5 relative"
          >
            <Quote className="text-brand-red absolute top-8 right-8 opacity-20" size={60} />
            <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
              "Christoph hat mir geholfen, meine Lauftechnik komplett umzustellen. Keine Knieschmerzen mehr und meine Pace hat sich deutlich verbessert. Danke!"
            </p>
            <div className="flex items-center gap-4">
              <SmartImage data={IMAGES.testimonial2} className="w-12 h-12 rounded-full object-cover border-2 border-brand-red" />
              <div>
                <h5 className="font-bold text-white uppercase">Julia K.</h5>
                <span className="text-xs text-brand-red font-bold uppercase tracking-wider">Laufcoaching</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;