import { motion } from 'motion/react';
import { Award, Wine, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  const chefImgSrc = "/src/assets/images/chef_executive_1784471204662.jpg";

  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      title: "Tradição Reinventada",
      desc: "Pratos icônicos da Itália clássica preparados com técnicas culinárias de vanguarda e apresentação escultural."
    },
    {
      icon: <Wine className="w-5 h-5 text-gold-400" />,
      title: "Adega de Prestígio",
      desc: "Uma seleção com mais de 450 rótulos exclusivos das mais refinadas vinícolas da Toscana, Piemonte e Veneto."
    },
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: "Ingredientes Primorosos",
      desc: "Trigo grano duro importado, trufas frescas de Alba e azeites com denominação de origem protegida."
    }
  ];

  return (
    <section id="sobre" className="relative py-32 bg-gradient-to-b from-[#050505] to-[#0c0305] overflow-hidden">
      {/* Decorative side typography backplate */}
      <div className="absolute right-0 top-1/4 translate-x-1/3 opacity-[0.02] text-white font-serif text-[18vw] leading-none select-none pointer-events-none">
        TRADIZIONE
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold"
          >
            Nossa Jornada Gastronômica
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4"
          >
            A Poesia do Paladar em Cada Detalhe
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6"
          />
        </div>

        {/* Dual Layout: Story & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-gold-300">
                Uma homenagem à Bella Vita italiana
              </h3>
              <p className="text-neutral-300 leading-relaxed font-sans text-sm md:text-base">
                Fundado sob a premissa de que uma refeição deve ser uma celebração sublime, o Bella Vita traz a essência das grandes vilas italianas para o coração contemporâneo. Nossas massas são moldadas à mão diariamente e nossos molhos apuram por longas horas, respeitando o tempo sagrado dos ingredientes.
              </p>
              <p className="text-neutral-400 leading-relaxed font-sans text-sm">
                Convidamos você a deixar de lado a pressa do mundo exterior e imergir em um banquete teatral onde os sabores orquestram memórias inesquecíveis. Do estalar de uma crosta de focaccia recém-assada à suavidade de um Brunello de safra histórica, sua mesa é nossa tela.
              </p>
            </motion.div>

            {/* Core Pillars */}
            <div className="space-y-6 border-t border-white/5 pt-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  id={`pillar-${idx}`}
                  key={pillar.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="p-3 rounded-xl bg-wine-950/40 border border-wine-800/20 group-hover:bg-wine-900/40 group-hover:border-gold-500/30 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm md:text-base font-semibold text-white tracking-wider group-hover:text-gold-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Executive Chef Portrait & Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative max-w-md w-full"
            >
              {/* Outer decorative gold/wine frames */}
              <div className="absolute -inset-4 rounded-3xl border border-gold-500/10 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl border border-wine-900/30 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black border border-white/5 aspect-[4/3]">
                <img
                  src={chefImgSrc}
                  alt="Chef Executivo Marco Rossini"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Glass Chef Info Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/85 to-transparent">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md">
                    <p className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">Chef Executivo</p>
                    <h4 className="font-serif text-lg text-white mt-1">Marco Rossini</h4>
                    <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                      "A culinária é a tradução física do amor. Minha missão é fazer com que cada prato ressoe na alma de quem o saboreia."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
