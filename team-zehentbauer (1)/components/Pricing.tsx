import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const PricingCard = ({ title, price, period, features, popular, link }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`relative flex flex-col p-8 rounded-2xl border ${popular ? 'bg-brand-surface border-brand-red shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'bg-black border-white/10'}`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-black uppercase tracking-widest py-1 px-4 rounded-full flex items-center gap-1">
        <Star size={12} fill="white" /> Empfehlung
      </div>
    )}
    
    <h4 className="text-2xl font-black italic uppercase mb-2 text-white">{title}</h4>
    <div className="flex items-baseline gap-1 mb-8">
      <span className={`text-4xl font-black ${popular ? 'text-brand-red' : 'text-white'}`}>{price}</span>
      {period && <span className="text-gray-500 font-medium">{period}</span>}
    </div>

    <ul className="flex-1 space-y-4 mb-8">
      {features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="mt-1 p-0.5 rounded-full bg-brand-red/20 text-brand-red">
            <Check size={14} strokeWidth={3} />
          </div>
          <span className="text-gray-400 text-sm leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-4 text-center text-sm font-bold uppercase tracking-widest rounded transition-colors ${popular ? 'bg-brand-red hover:bg-red-700 text-white' : 'border border-white/20 hover:bg-white hover:text-black text-white'}`}
    >
      Auswählen
    </a>
  </motion.div>
);

const Pricing: React.FC = () => {
  const getLink = (paket: string) => `${SOCIAL_LINKS.whatsapp}&text=${encodeURIComponent(`Hallo Christoph, ich interessiere mich für: ${paket}`)}`;

  return (
    <section id="preise" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-2xl mb-4">Preise</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase text-white">Investiere in <span className="text-brand-red">Dich</span></h3>
          <p className="text-gray-400 mt-4">Transparente Preise. Keine versteckten Kosten.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <PricingCard 
            title="Einzeltraining" 
            price="49 €" 
            period="/ Einheit" 
            features={["60-80 Min Personal Training", "Anamnese & Körperanalyse", "Technik-Schulung", "100% Fokus auf Dich"]} 
            link={getLink("Einzeltraining")}
          />
          <PricingCard 
            title="10er Block" 
            price="400 €" 
            popular={true} 
            features={["12 Monate gültig", "Frei einteilbar", "Ersparnis von fast 100€", "Ideal für Regelmäßigkeit"]} 
            link={getLink("10er Block")}
          />
          <PricingCard 
            title="Monats-Abo" 
            price="39 €" 
            period="/ Monat" 
            features={["1 Training pro Monat inkl.", "WhatsApp Support", "Trainingsplan-Erstellung", "Mindestlaufzeit 1 Jahr"]} 
            link={getLink("Monats-Abo")}
          />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <PricingCard 
            title="Boxen / Laufen" 
            price="49 €" 
            period="/ Einheit" 
            features={["Outdoor oder Gym", "Technik & Ausdauer", "Partner-Training möglich (+15€)", "Equipment vorhanden"]} 
            link={getLink("Boxen / Laufen")}
          />
          <PricingCard 
            title="Ernährung" 
            price="49 €" 
            period="Pauschal" 
            features={["Analyse Ist-Zustand", "PDF Guide & Tipps", "Kein Verzicht - Balance", "Support nach Absprache"]} 
            link={getLink("Ernährung")}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;