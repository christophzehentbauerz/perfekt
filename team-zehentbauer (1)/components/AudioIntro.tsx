import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Volume2, Loader2, StopCircle, Play } from 'lucide-react';
import { decode, decodeAudioData } from '../utils/audio';

const AudioIntro: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const stopAudio = () => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop();
      } catch (e) {
        // Ignore error if already stopped
      }
      sourceRef.current = null;
    }
    setPlaying(false);
  };

  const playAudio = async () => {
    if (playing) {
      stopAudio();
      return;
    }

    setLoading(true);
    try {
      // 1. Initialize Gemini
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // 2. Generate Speech
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ 
            parts: [{ 
                text: 'Willkommen beim Team Zehentbauer. Wir machen keine halben Sachen. Hier kriegst du ehrliches Krafttraining, Laufen und Boxen. Wir bauen dich auf – körperlich und mental. Dein Ziel ist unser Projekt. Lass uns anfangen.' 
            }] 
        }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Deep, motivational voice
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) throw new Error("Keine Audiodaten empfangen");

      // 3. Prepare Audio Context
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
      }
      const audioCtx = audioContextRef.current;
      
      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }

      // 4. Decode Raw PCM Data
      const pcmBytes = decode(base64Audio);
      const audioBuffer = await decodeAudioData(pcmBytes, audioCtx);

      // 5. Play
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.onended = () => setPlaying(false);
      sourceRef.current = source;
      
      source.start();
      setPlaying(true);

    } catch (error) {
      console.error("Audio generation failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
        stopAudio();
        if(audioContextRef.current) {
            audioContextRef.current.close();
        }
    }
  }, []);

  return (
    <button 
        onClick={playAudio}
        disabled={loading}
        className="group relative flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm mt-8 mx-auto"
    >
        <div className={`p-2 rounded-full ${playing ? 'bg-brand-red text-white' : 'bg-white/10 text-brand-red group-hover:bg-brand-red group-hover:text-white'} transition-colors`}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : playing ? <StopCircle size={20} /> : <Volume2 size={20} />}
        </div>
        <div className="text-left">
            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Audio Intro</div>
            <div className="text-sm font-bold text-white group-hover:text-brand-red transition-colors">
                {loading ? "Generiere..." : playing ? "Hören..." : "Hör dir unsere Vision an"}
            </div>
        </div>
        
        {/* Visualizer bars simulation */}
        {playing && (
            <div className="flex items-end gap-1 h-4 ml-2">
                <div className="w-1 bg-brand-red animate-[pulse_0.5s_ease-in-out_infinite]" style={{height: '100%'}}></div>
                <div className="w-1 bg-brand-red animate-[pulse_0.7s_ease-in-out_infinite]" style={{height: '60%'}}></div>
                <div className="w-1 bg-brand-red animate-[pulse_0.4s_ease-in-out_infinite]" style={{height: '80%'}}></div>
            </div>
        )}
    </button>
  );
};

export default AudioIntro;