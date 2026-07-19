import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, Expand, ArrowRight, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'details'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Paths of our generated assets
  const pastaImg = "/src/assets/images/hero_pasta_dish_1784471177745.jpg";
  const interiorImg = "/src/assets/images/restaurant_interior_1784471191278.jpg";
  const chefImg = "/src/assets/images/chef_executive_1784471204662.jpg";
  const tiramisuImg = "/src/assets/images/tiramisu_deluxe_1784471218489.jpg";

  // Public curated premium Italian aesthetic images
  const items: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Taglioni d’Oro e Tartufo',
      category: 'food',
      image: pastaImg
    },
    {
      id: 'g2',
      title: 'Salone Principale di Marmo',
      category: 'interior',
      image: interiorImg
    },
    {
      id: 'g3',
      title: 'Chef Marco Rossini Cucinando',
      category: 'details',
      image: chefImg
    },
    {
      id: 'g4',
      title: 'Tiramisù Scomposto d’Autore',
      category: 'food',
      image: tiramisuImg
    },
    {
      id: 'g5',
      title: 'A Coleção Exclusiva de Barolos',
      category: 'details',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'g6',
      title: 'A Mesa Redonda dos Fundadores',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'Tudo' },
    { id: 'food', label: 'Alta Gastronomia' },
    { id: 'interior', label: 'Ambientes' },
    { id: 'details', label: 'Os Detalhes' }
  ];

  return (
    <section id="galeria" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Aesthetic lines in background */}
      <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5 px-12">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Camera className="w-4 h-4 text-gold-400" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold">
              Galeria Visual
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            Atmosfera Bella Vita
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-4">
            Uma imersão estética em nossos salões intimistas, na precisão da nossa cozinha e na elegância escultural dos nossos pratos.
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat.id}`}
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none border ${
                filter === cat.id
                  ? 'bg-wine-950/40 text-gold-300 border-gold-500/30'
                  : 'bg-transparent text-neutral-400 border-transparent hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento-like grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
          {filteredItems.map((item, index) => {
            // Determine sizes based on index to create beautiful irregular Bento Grid
            let gridSpan = "lg:col-span-4";
            if (index === 0) gridSpan = "lg:col-span-8"; // Main large item
            if (index === 1) gridSpan = "lg:col-span-4";
            if (index === 2) gridSpan = "lg:col-span-4";
            if (index === 3) gridSpan = "lg:col-span-4";
            if (index === 4) gridSpan = "lg:col-span-4";
            if (index === 5) gridSpan = "lg:col-span-8"; // Another large item

            return (
              <motion.div
                id={`gallery-card-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`${gridSpan} relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-lg shadow-black/40`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Dark rich overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-mono">
                    {item.category === 'food' ? 'Gastronomia' : item.category === 'interior' ? 'Salão' : 'Detalhes'}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-white mt-1 group-hover:text-gold-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Action Link Icon */}
                  <div className="mt-3 flex items-center gap-1 text-[10px] uppercase tracking-widest text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span>Ampliar Detalhes</span>
                    <Eye className="w-3 h-3 text-gold-400" />
                  </div>
                </div>

                {/* Corner Expand Glint */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Expand className="w-3.5 h-3.5 text-gold-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            {/* Close button zone */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveItem(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full bg-neutral-900/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12"
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-white hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Pane */}
              <div className="md:col-span-8 aspect-video md:aspect-auto md:h-[550px] relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Pane */}
              <div className="md:col-span-4 p-8 flex flex-col justify-between text-left space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded bg-wine-950/80 border border-wine-800/20 text-[9px] font-mono tracking-widest text-gold-300 uppercase">
                    {activeItem.category === 'food' ? 'Gastronomia' : activeItem.category === 'interior' ? 'Ambientes' : 'Detalhes'}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white tracking-wide">
                    {activeItem.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-gold-400" />
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                    Nossa fotografia original retrata a fidelidade estética e o compromisso do Bella Vita. Cada ângulo celebra a paixão italiana e o esmero gastronômico que cultivamos.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Bella Vita Ristorante</p>
                  <button
                    id="lightbox-reserve-shortcut"
                    onClick={() => {
                      setActiveItem(null);
                      const reserveSection = document.getElementById('reservas');
                      if (reserveSection) reserveSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors group cursor-pointer focus:outline-none"
                  >
                    <span>Reserve uma Mesa para Viver Isso</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
