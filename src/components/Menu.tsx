import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import { Wine, Sparkles, Flame, Percent, Star, ChevronRight } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'antipasti' | 'primi' | 'secondi' | 'dolci'>('primi');

  // Generated Tiramisu photo path
  const tiramisuImgSrc = "/src/assets/images/tiramisu_deluxe_1784471218489.jpg";

  const menuItems: MenuItem[] = [
    // Antipasti
    {
      id: 'a1',
      name: 'Burrata Al Tartufo',
      description: 'Burrata cremosa, infusão de azeite de trufas brancas, figos frescos grelhados com mel silvestre, presunto di Parma crocante e rúcula baby.',
      price: 88,
      category: 'antipasti',
      tags: ['Assinatura'],
      pairing: 'Franciacorta Brut DOCG'
    },
    {
      id: 'a2',
      name: 'Carpaccio Classico della Villa',
      description: 'Lâminas finíssimas de filé mignon marinado, alcaparras baby, emulsão de mostarda Dijon, lascas de Parmigiano Reggiano DOP 24 meses e brotos orgânicos.',
      price: 72,
      category: 'antipasti',
      tags: [],
      pairing: 'Pinot Grigio Alto Adige'
    },
    {
      id: 'a3',
      name: 'Polpo con Patate',
      description: 'Tentáculos de polvo grelhados no carvão, batatas fondant rústicas ao murro, azeite de ervas da Toscana e aioli defumado de limão siciliano.',
      price: 98,
      category: 'antipasti',
      tags: ['Destaque'],
      pairing: 'Vermentino di Sardegna'
    },
    
    // Primi
    {
      id: 'p1',
      name: 'Taglioni Con Tartufo E Oro',
      description: 'Massa fresca artesanal ao molho cremoso de manteiga de trufas brancas de Alba, queijo Pecorino de fossa e finalizado com delicadas folhas de ouro comestíveis.',
      price: 155,
      category: 'primi',
      tags: ['Assinatura', 'Exclusivo'],
      pairing: 'Barolo Classico DOCG'
    },
    {
      id: 'p2',
      name: 'Gnocchi Zucca E Gorgonzola Dolce',
      description: 'Gnocchi de abóbora cabotiá assada na brasa, fonduta de queijo Gorgonzola Dolce, nozes chilenas caramelizadas e folhas crocantes de sálvia.',
      price: 108,
      category: 'primi',
      tags: ['Vegetariano'],
      pairing: 'Chardonnay Langhe DOC'
    },
    {
      id: 'p3',
      name: 'Risotto All’Aragosta e Zafferano',
      description: 'Risoto de arroz Carnaroli com calda de lagosta grelhada na manteiga de ervas, infusão de açafrão italiano em estigmas e raspas de laranja sanguínea.',
      price: 185,
      category: 'primi',
      tags: ['Assinatura'],
      pairing: 'Greco di Tufo Campano'
    },
    {
      id: 'p4',
      name: 'Ravioli di Costola con Funghi',
      description: 'Ravioli recheado com costela bovina angus cozida lentamente ao vinho tinto, emulsionado em redução do próprio molho e cogumelos Porcini frescos.',
      price: 125,
      category: 'primi',
      tags: [],
      pairing: 'Chianti Classico Riserva'
    },

    // Secondi
    {
      id: 's1',
      name: 'Filetto al Brunello',
      description: 'Medalhão de filé mignon grelhado ao molho denso de vinho Brunello di Montalcino, acompanhado de purê rústico de batata baroa trufada e aspargos salteados.',
      price: 148,
      category: 'secondi',
      tags: ['Destaque'],
      pairing: 'Brunello di Montalcino DOCG'
    },
    {
      id: 's2',
      name: 'Branzino in Crosta d’Erbe',
      description: 'Filé de robalo grelhado sob crosta de ervas finas e amêndoas, servido com emulsão de limão siciliano, tomates sweet grape confitados e alcachofras.',
      price: 135,
      category: 'secondi',
      tags: [],
      pairing: 'Fiano di Avellino'
    },
    {
      id: 's3',
      name: 'Anatra con Riduzione di Fichi',
      description: 'Peito de pato grelhado ao ponto do chef com redução de figos frescos e vinho do porto, servido com risoto cremoso de queijo Taleggio.',
      price: 152,
      category: 'secondi',
      tags: ['Exclusivo'],
      pairing: 'Amarone della Valpolicella'
    },

    // Dolci
    {
      id: 'd1',
      name: 'Tiramisù Scomposto',
      description: 'Versão deconstruída e sofisticada do clássico tiramisu: creme aerado de mascarpone italiano, savoiardi artesanal umedecido em café expresso de alta altitude e Amaretto, esferas de chocolate belga e poeira de ouro.',
      price: 52,
      category: 'dolci',
      tags: ['Assinatura'],
      pairing: 'Vin Santo del Chianti'
    },
    {
      id: 'd2',
      name: 'Panna Cotta Al Limoncello',
      description: 'Creme aveludado de fava de baunilha fresca de Madagascar, geleia artesanal de frutas vermelhas silvestres e redução brilhante de limoncello da casa.',
      price: 45,
      category: 'dolci',
      tags: [],
      pairing: 'Moscato d’Asti DOCG'
    },
    {
      id: 'd3',
      name: 'Sfera di Cioccolato e Nocciola',
      description: 'Cúpula de chocolate belga recheada com gelato artesanal de avelã piemontesa, derretida na mesa com calda de chocolate amargo quente.',
      price: 58,
      category: 'dolci',
      tags: ['Destaque'],
      pairing: 'Recioto della Valpolicella'
    }
  ];

  const categories = [
    { id: 'antipasti', label: 'Antipasti', desc: 'Entradas Refinadas' },
    { id: 'primi', label: 'Primi Piatti', desc: 'Massas e Risotos Artesanais' },
    { id: 'secondi', label: 'Secondi Piatti', desc: 'Carnes Nobres e Peixes' },
    { id: 'dolci', label: 'Dolci', desc: 'Sobremesas Autorais' }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-32 bg-gradient-to-b from-[#0c0305] via-[#050505] to-[#0c0305] overflow-hidden">
      {/* Decorative Golden Ambient Light */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-wine-900/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold">
              Experiência Sensorial
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4">
              O Menu Bella Vita
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-4">
              Cada criação é uma partitura de sabores orquestrada para despertar sentimentos. Explore nossa seleção dividida entre os momentos tradicionais de uma verdadeira ceia italiana.
            </p>
          </div>

          {/* Sommelier Quote */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 max-w-sm backdrop-blur-md text-left">
            <div className="flex items-center gap-2 mb-2">
              <Wine className="w-4 h-4 text-gold-400" />
              <span className="text-[10px] uppercase tracking-widest font-mono text-gold-300 font-medium">Recomendação do Sommelier</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-serif italic">
              "Para cada prato, desenhamos uma harmonização com vinhos DOCG selecionados diretamente nas colinas italianas."
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4 border-b border-white/5 pb-8 mb-16 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              id={`tab-${cat.id}`}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`relative px-6 py-4 rounded-xl text-left transition-all duration-300 min-w-[140px] md:min-w-[180px] cursor-pointer focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-wine-950/50 border border-gold-500/30'
                  : 'bg-transparent hover:bg-white/5 border border-transparent'
              }`}
            >
              <p className={`text-xs font-mono tracking-widest uppercase ${activeCategory === cat.id ? 'text-gold-400' : 'text-neutral-500'}`}>
                {cat.desc}
              </p>
              <h4 className={`font-serif text-lg md:text-xl mt-1 font-medium ${activeCategory === cat.id ? 'text-white' : 'text-neutral-400'}`}>
                {cat.label}
              </h4>
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="menuTabUnderline"
                  className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gradient-to-r from-gold-500 to-wine-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main List Column */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredItems.map((item) => (
                  <div
                    id={`menu-item-card-${item.id}`}
                    key={item.id}
                    className="p-6 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-gold-500/20 hover:bg-neutral-900/50 transition-all duration-500 group relative flex flex-col justify-between"
                  >
                    {/* Glowing Accent */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-wine-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Name, Tags and Price */}
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div className="space-y-1 text-left">
                          <h4 className="font-serif text-lg md:text-xl text-white group-hover:text-gold-300 transition-colors duration-300">
                            {item.name}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-gold-950/80 border border-gold-500/30 text-gold-300"
                              >
                                <Sparkles className="w-2 h-2" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="font-mono text-sm md:text-base text-gold-400 font-semibold bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                          R$ {item.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-xs md:text-sm leading-relaxed text-left">
                        {item.description}
                      </p>
                    </div>

                    {/* Wine Pairing */}
                    {item.pairing && (
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] md:text-xs text-neutral-400 font-sans">
                        <Wine className="w-3.5 h-3.5 text-wine-500" />
                        <span className="font-semibold text-neutral-300 font-mono tracking-wide">Harmonização:</span>
                        <span className="italic text-gold-400/90">{item.pairing}</span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured Visual Spotlight Box (Chef Recommendation Tiramisu) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-wine-950/20 to-black/40 border border-gold-500/10 shadow-2xl relative overflow-hidden group text-left"
            >
              {/* Gold border glint */}
              <div className="absolute -inset-px bg-gradient-to-b from-gold-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">
                    Destaque da Confeitaria
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/5 shadow-lg shadow-black">
                  <img
                    src={tiramisuImgSrc}
                    alt="Tiramisù deconstruído"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl text-white">Tiramisù Scomposto</h3>
                    <span className="font-mono text-gold-400 text-lg">R$ 52</span>
                  </div>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
                    Nossa sobremesa mais aclamada. O mascarpone aerado derrete delicadamente na boca, intercalado com crocantes biscoitos de licor Amaretto e flocos de ouro.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Wine className="w-3.5 h-3.5 text-wine-500" />
                    <span className="italic font-serif">Acompanha Vin Santo DOP</span>
                  </div>
                  <span className="text-gold-400 font-mono font-medium tracking-widest text-[10px] uppercase">
                    Obra-Prima
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
