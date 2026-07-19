import { useState, FormEvent } from 'react';
import { Wine, Instagram, Facebook, Compass, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const handleLinkClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-20 border-t border-white/5 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-wine-950/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Brand signature block */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-2">
            <Wine className="w-5 h-5 text-gold-400" />
            <div className="flex flex-col text-left">
              <span className="font-serif text-lg tracking-[0.25em] font-medium text-white">
                BELLA VITA
              </span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-gold-500 font-mono">
                Ristorante Premium
              </span>
            </div>
          </div>
          
          <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-sm">
            Membro da prestigiosa Sociedade de Alta Gastronomia de São Paulo. Onde as receitas tradicionais italianas encontram a modernidade escultural.
          </p>

          <p className="font-serif text-xs md:text-sm italic text-gold-500/80 mt-4 leading-relaxed">
            "La vita é uma combinazione di magia e pasta." <br />
            <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-500 font-semibold mt-1 block">— Federico Fellini</span>
          </p>
        </div>

        {/* Links Column 1: Explore */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">Navegação</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleLinkClick('inicio')} className="hover:text-gold-400 transition-colors cursor-pointer text-neutral-400">
                Início
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('sobre')} className="hover:text-gold-400 transition-colors cursor-pointer text-neutral-400">
                O Restaurante
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('menu')} className="hover:text-gold-400 transition-colors cursor-pointer text-neutral-400">
                O Menu
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('galeria')} className="hover:text-gold-400 transition-colors cursor-pointer text-neutral-400">
                Galeria Visual
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick('reservas')} className="hover:text-gold-400 transition-colors cursor-pointer text-neutral-400">
                Reservar Mesa
              </button>
            </li>
          </ul>
        </div>

        {/* Links Column 2: Legal/Extra */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">Iniciativas</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Eventos Privados</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Imprensa & Mídia</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Carreiras / Junte-se</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Termos de Privacidade</a></li>
          </ul>
        </div>

        {/* Newsletter & Club Column */}
        <div className="md:col-span-4 space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-white font-bold">Club del Vino & Gastronomia</h4>
          
          <p className="text-xs text-neutral-500 leading-relaxed">
            Receba convites prioritários para nossas noites de degustação de trufas, jantares harmonizados e novas safras de Barolo.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2 relative">
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Seu e-mail de prestígio"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed}
              className="w-full px-4 py-3 rounded-xl bg-[#090909] border border-white/5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
            />
            <button
              id="btn-newsletter-submit"
              type="submit"
              disabled={subscribed}
              className="px-4 py-3 rounded-xl bg-wine-950/60 border border-gold-500/20 text-gold-400 hover:text-white hover:bg-wine-900/60 hover:border-gold-400 transition-all flex items-center justify-center shrink-0 cursor-pointer disabled:opacity-50"
            >
              {subscribed ? <Check className="w-4 h-4 text-green-400" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
          
          {subscribed && (
            <p className="text-[10px] font-mono text-green-400 mt-1">✓ Obrigado. Seu convite exclusivo está a caminho.</p>
          )}

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-gold-500/25 text-neutral-400 hover:text-gold-400 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-gold-500/25 text-neutral-400 hover:text-gold-400 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-gold-500/25 text-neutral-400 hover:text-gold-400 transition-all">
              <Compass className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Underline bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
          © 2026 BELLA VITA RISTORANTE. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className="text-[10px] text-neutral-600 font-sans flex items-center gap-1">
          <span>Desenvolvido sob rigorosa curadoria estética.</span>
        </p>
      </div>

    </footer>
  );
}
