import { motion } from 'motion/react';
import { Calendar, Award, Compass, Star } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onReserveClick, onExploreClick }: HeroProps) {
  // Path of the generated hero pasta dish
  const heroImgSrc = "/src/assets/images/hero_pasta_dish_1784471177745.jpg";

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Image Container with Ken Burns effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.65 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroImgSrc}
            alt="Bella Vita Fine Italian Dining"
            className="w-full h-full object-cover object-center filter brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Subtle radial and linear dark overlays for extreme luxury contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050505]/30 to-[#050505]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Breathtaking typography */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Award Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <Award className="w-4 h-4 text-gold-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-gold-300 font-medium">
              Eleito Melhor Restaurante Italiano de 2026
            </span>
          </motion.div>

          {/* Main Titles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
              A Essência do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-white to-gold-400">
                Saber Viver
              </span>
            </h1>
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.4em] text-wine-400 font-semibold">
              Ristorante & Enoteca • Tradizione d'Avanguardia
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-neutral-300 max-w-lg leading-relaxed font-sans"
          >
            A alta gastronomia italiana encontra seu refúgio em São Paulo. Descubra pratos que combinam tradição artesanal milenar, técnicas contemporâneas e uma cuidadosa seleção de ingredientes importados.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              id="hero-reserve-btn"
              onClick={onReserveClick}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-wine-900 to-wine-800 text-gold-100 font-medium text-xs uppercase tracking-widest border border-gold-500/20 hover:border-gold-400 transition-all duration-300 shadow-xl shadow-wine-950/40 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              Reservar Experiência
            </button>
            <button
              id="hero-menu-btn"
              onClick={onExploreClick}
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-widest border border-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              Conhecer o Menu
            </button>
          </motion.div>
        </div>

        {/* Right Column: Floating Luxury Stats & Glint Box */}
        <div className="lg:col-span-4 flex flex-col justify-end lg:h-[450px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.0 }}
            className="p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-white/5 relative overflow-hidden group shadow-2xl space-y-6"
          >
            {/* Ambient gold glow backplate */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full filter blur-3xl group-hover:bg-gold-500/10 transition-all duration-700" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-wine-500/5 rounded-full filter blur-2xl" />

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>

            <p className="font-serif text-lg italic text-neutral-300 leading-relaxed">
              "Uma obra de arte sensorial onde cada detalhe, do aroma da trufa ao veludo das cadeiras, é desenhado para o deleite."
            </p>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-serif tracking-wider text-white">Guia Michelin 2026</p>
                <p className="text-[10px] font-mono tracking-widest text-gold-500 uppercase mt-0.5">Estrela de Ouro</p>
              </div>
              <Compass className="w-5 h-5 text-gold-400 opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">Role para Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1 h-3 rounded-full bg-gold-400/80"
        />
      </motion.div>
    </section>
  );
}
