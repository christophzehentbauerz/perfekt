import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Quote, Loader2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotivationGenerator: React.FC = () => {
  const [quote, setQuote] = useState("Klick für einen neuen Impuls");
  const [loading, setLoading] = useState(false);

  const getMotivation = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Generiere einen inspirierenden, bodenständigen Motivationsspruch für Sport und Alltag auf Deutsch. Nicht aggressiv oder übertrieben, sondern authentisch, weise und bestärkend. Maximal 12 Wörter. Jedes Mal ein neues Zitat.",
        config: {
          temperature: 0.8,
        }
      });
      setQuote(response.text.replace(/"/g, '').trim());
    } catch (e) {
      setQuote("Konsequenz schlägt Intensität. Bleib dran.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-[2.5rem] bg-black/40 border border-white/20 text-right backdrop-blur-2xl max-w-sm ml-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-end gap-3 mb-6">
        <span className="text-[13px] font-black uppercase tracking-[0.2em] text-white">Mindset</span>
        <Quote size={20} className="text-brand-red fill-brand-red/10" />
      </div>
      
      {/* Container ohne overflow-hidden, damit Schlagschatten und kursive Buchstaben nicht abgeschnitten werden */}
      <div className="relative min-h-[7rem] flex items-center justify-end">
        <AnimatePresence mode="wait">
          <motion.p 
            key={quote}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            /* pr-2 hinzugefügt, damit das kursive 'lean' nach rechts nicht am Rand klebt */
            className="text-2xl md:text-3xl font-black italic uppercase tracking-tight text-white leading-[1.2] drop-shadow-md pr-2"
          >
            {loading ? (
              <span className="flex items-center gap-3 justify-end opacity-40">
                <Loader2 className="animate-spin" size={28} />
              </span>
            ) : (
              quote
            )}
          </motion.p>
        </AnimatePresence>
      </div>

      <button 
        onClick={getMotivation} 
        disabled={loading} 
        className="group mt-10 flex items-center gap-3 ml-auto text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 bg-white text-black rounded-2xl hover:bg-brand-red hover:text-white transition-all duration-500 cursor-pointer shadow-xl active:scale-95"
      >
        <RefreshCw size={16} className={loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-700'} />
        {loading ? 'Moment...' : 'Nächster Impuls'}
      </button>
    </div>
  );
};

export default MotivationGenerator;