import React from 'react';
import { Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { LegalDocType } from '../types';
import MotivationGenerator from './MotivationGenerator';

interface FooterProps {
  openLegal: (type: LegalDocType) => void;
}

const ContactLink = ({ icon: Icon, title, sub, href, iconBg, hoverClass, shadowClass }: any) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-4 p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 transition-all duration-300 group hover:-translate-y-2 ${hoverClass} ${shadowClass}`}
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
      <Icon size={28} />
    </div>
    <div>
      <div className="font-black uppercase text-base tracking-wide text-white mb-0.5">{title}</div>
      <div className="text-sm text-gray-400 group-hover:text-white/90 transition-colors">{sub}</div>
    </div>
    <ArrowRight className="ml-auto text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0" size={20} />
  </a>
);

const Footer: React.FC<FooterProps> = ({ openLegal }) => {
  return (
    <footer id="kontakt" className="bg-brand-red relative overflow-hidden pt-32 pb-12 text-white">
       {/* Subtle Overlay for contrast */}
       <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32">
          
          <div className="lg:max-w-xl">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] mb-10">
              Lass uns <br/><span className="text-black/20">anfangen.</span>
            </h2>
            <p className="text-2xl font-medium opacity-90 mb-12 max-w-md leading-relaxed">
              Keine Ausreden mehr. Wir bringen dich an dein Ziel. Schreib uns jetzt.
            </p>
            
            <div className="grid gap-5">
              <ContactLink 
                icon={Phone} 
                title="WhatsApp" 
                sub="Schreib uns direkt" 
                href={`${SOCIAL_LINKS.whatsapp}&text=Hallo+Christoph.`}
                iconBg="bg-[#25D366]"
                hoverClass="hover:bg-white/10"
                shadowClass="hover:shadow-[0_20px_60px_rgba(37,211,102,0.3)]"
              />
              <ContactLink 
                icon={Mail} 
                title="Email" 
                sub="ChristophZehentbauer@gmail.com" 
                href={SOCIAL_LINKS.email}
                iconBg="bg-blue-600"
                hoverClass="hover:bg-white/10"
                shadowClass="hover:shadow-[0_20px_60px_rgba(37,99,235,0.3)]"
              />
              <ContactLink 
                icon={Instagram} 
                title="Instagram" 
                sub="@gebruderzroutine" 
                href={SOCIAL_LINKS.instagram}
                iconBg="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
                hoverClass="hover:bg-white/10"
                shadowClass="hover:shadow-[0_20px_60px_rgba(214,41,118,0.3)]"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-end items-end gap-16">
            <MotivationGenerator />
            <div className="w-full text-right mt-4">
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic text-black/20 select-none leading-none uppercase tracking-tighter whitespace-nowrap">
                TEAM ZEHENTBAUER
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-black uppercase tracking-[0.2em] opacity-60">
          <p>&copy; 2026 Team Zehentbauer • Horn, AT</p>
          <div className="flex gap-8">
            <button onClick={() => openLegal('impressum')} className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer uppercase font-black text-[11px] tracking-[0.2em] text-white">Impressum</button>
            <button onClick={() => openLegal('datenschutz')} className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer uppercase font-black text-[11px] tracking-[0.2em] text-white">Datenschutz</button>
            <button onClick={() => openLegal('agb')} className="hover:text-black transition-colors bg-transparent border-none p-0 cursor-pointer uppercase font-black text-[11px] tracking-[0.2em] text-white">AGB</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;