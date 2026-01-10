import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Zap, CheckCircle2 } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    viewport={{ once: true }}
    transition={{ 
      opacity: { duration: 0.5, delay },
      y: { duration: 0.5, delay },
      scale: { duration: 0.3, delay: 0, ease: "easeOut" }
    }}
    className="bg-brand-surface p-10 rounded-2xl border border-white/5 hover:border-brand-red/50 hover:bg-white/[0.02] transition-colors group flex flex-col items-center text-center justify-center min-h-[280px]"
  >
    <div className="p-5 bg-brand-red/10 rounded-full text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors mb-6">
      <Icon size={32} />
    </div>
    <h4 className="text-2xl font-black uppercase italic mb-4">{title}</h4>
    <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
  </motion.div>
);

const Philosophy: React.FC = () => {
  return (
    <section id="warum-wir" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content - Fixed: Sticky only on LG screens to prevent mobile overlap */}
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-2xl mb-6">Unsere DNA</h2>
              <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-[0.9] mb-8">
                Mehr als nur <br/><span className="text-white">Gewichte heben.</span>
              </h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Wir sind Christoph & Mario. Zwei Brüder, ein Ziel: Ehrliches Training ohne Schnickschnack. 
                Bei uns gibt es keine leeren Versprechungen, sondern fundiertes Wissen aus über 10 Jahren Erfahrung.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Wir glauben an die Kombination aus <span className="text-white font-bold">Kraft</span>, <span className="text-white font-bold">Ausdauer</span> und dem richtigen <span className="text-white font-bold">Mindset</span>. 
                Egal ob du Anfänger bist oder Profi – wir holen dich dort ab, wo du stehst.
              </p>
            </motion.div>
          </div>

          {/* Grid of Features */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <FeatureItem 
              icon={Dumbbell} 
              title="Ehrlich" 
              desc="Kein Bullshit. Wir sagen dir, was Sache ist und wie du deine Ziele erreichst."
              delay={0.1}
            />
            <FeatureItem 
              icon={Activity} 
              title="Ausgewogen" 
              desc="Kraft ist gut, aber Ausdauer und Gesundheit gehören für uns dazu."
              delay={0.2}
            />
            <FeatureItem 
              icon={Zap} 
              title="Leidenschaft" 
              desc="Wir brennen für das, was wir tun. Und das wirst du im Training spüren."
              delay={0.3}
            />
            <FeatureItem 
              icon={CheckCircle2} 
              title="Individuell" 
              desc="Kein Plan von der Stange. Dein Training passt zu deinem Leben."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;