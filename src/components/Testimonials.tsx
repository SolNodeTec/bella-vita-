import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      id: 'r1',
      name: 'Crítico Michelin S.P.',
      role: 'Guia Michelin 2026',
      text: 'O Bella Vita não serve apenas pratos, ele convida a uma reverência artística. O Taglioni com Trufas Brancas e Ouro é uma simbiose de sabor e requinte estético que assombra a mente pela excelência.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 'r2',
      name: 'Alessandra Moretti',
      role: 'Repórter Especial da GQ Brasil',
      text: 'O salão Sala di Marmo transporta o visitante diretamente para Milão. Uma acústica brilhante, atendimento impecável digno de reis, e uma carta de vinhos que é um autêntico monumento à Itália.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 'r3',
      name: 'Gault & Millau Review',
      role: 'Revista Especializada em Alta Gastronomia',
      text: 'O Tiramisù Desconstruído é de longe a melhor sobremesa que provamos no hemisfério sul nos últimos anos. Chef Marco Rossini demonstra domínio cirúrgico de texturas e equilíbrio de doçura.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop'
    }
  ];

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const active = reviews[index];

  return (
    <section id="depoimentos" className="relative py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      {/* Absolute decorative backplate */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] select-none pointer-events-none text-white font-serif text-[28vw] leading-none">
        CRITICA
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold">
            Reconhecimento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            Críticas de Prestígio
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              id={`testimonial-slide-${active.id}`}
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-8"
            >
              {/* Quote Mark */}
              <div className="flex justify-center">
                <Quote className="w-10 h-10 text-wine-900/40 rotate-180" />
              </div>

              {/* Text */}
              <p className="font-serif text-lg md:text-2xl lg:text-3xl tracking-wide text-neutral-200 leading-relaxed italic">
                "{active.text}"
              </p>

              {/* Rating stars */}
              <div className="flex justify-center items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Biographic Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-serif text-sm font-semibold text-white tracking-wider">
                    {active.name}
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gold-500 mt-0.5">
                    {active.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-6 pt-4">
          <button
            id="testimonial-prev-btn"
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/5 hover:border-gold-500/30 bg-white/[0.02] hover:bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                id={`testimonial-dot-${i}`}
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                  index === i ? 'w-6 bg-gold-400' : 'bg-neutral-600 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-btn"
            onClick={handleNext}
            className="p-3 rounded-full border border-white/5 hover:border-gold-500/30 bg-white/[0.02] hover:bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
