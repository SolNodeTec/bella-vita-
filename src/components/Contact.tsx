import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Check, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Reservas');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate sending
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  const copyAddress = () => {
    const addr = "Alameda Lorena, 1420 - Jardins, São Paulo - SP, 01424-001";
    navigator.clipboard.writeText(addr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contato" className="relative py-32 bg-gradient-to-b from-[#050505] to-[#0c0305] overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-wine-950/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold">
            Canais de Atendimento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4">
            Fale Conosco
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-4">
            Estamos sempre prontos para atender a solicitações de eventos particulares, imprensas, parcerias ou dúvidas sobre nosso menu.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Contact details & Op Hours */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Quick Contacts */}
            <div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 space-y-6 text-left">
              <h3 className="font-serif text-xl text-white tracking-wider">Contatos Diretos</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-wine-950/40 text-gold-400 border border-wine-900/20 group-hover:text-gold-300 group-hover:bg-wine-900/40 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-neutral-500 tracking-widest">WhatsApp & Telefone</p>
                    <p className="text-sm font-semibold text-white mt-0.5 hover:text-gold-300 transition-colors cursor-pointer">+55 11 3062-1234</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-wine-950/40 text-gold-400 border border-wine-900/20 group-hover:text-gold-300 group-hover:bg-wine-900/40 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-neutral-500 tracking-widest">E-mail Corporativo</p>
                    <p className="text-sm font-semibold text-white mt-0.5 hover:text-gold-300 transition-colors cursor-pointer">reservas@bellavitaristorante.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer" onClick={copyAddress}>
                  <div className="p-3 rounded-xl bg-wine-950/40 text-gold-400 border border-wine-900/20 group-hover:text-gold-300 group-hover:bg-wine-900/40 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase text-neutral-500 tracking-widest">Nossa Localização</p>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Alameda Lorena, 1420 - Jardins, São Paulo
                    </p>
                    <p className="text-[10px] text-gold-400 font-mono tracking-wider">
                      {copiedAddress ? "Endereço copiado!" : "Clique para copiar o endereço"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operational Hours */}
            <div className="p-8 rounded-3xl bg-neutral-900/20 border border-white/5 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                <h3 className="font-serif text-xl text-white tracking-wider">Horários de Funcionamento</h3>
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Terça a Quinta:</span>
                  <div className="text-right text-white">
                    <p>12:00 - 15:30</p>
                    <p className="text-[10px] text-wine-400">19:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-neutral-400">Sexta e Sábado:</span>
                  <div className="text-right text-white font-semibold">
                    <p>12:00 - 16:00</p>
                    <p className="text-[10px] text-gold-400">19:00 - 00:00</p>
                  </div>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-neutral-400">Domingo:</span>
                  <div className="text-right text-white">
                    <p>12:00 - 17:00</p>
                    <p className="text-[9px] text-neutral-500 italic">Jantar Fechado</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MIDDLE/RIGHT: Styled form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-900/30 border border-white/5 backdrop-blur-md shadow-2xl relative">
              <h3 className="font-serif text-2xl text-white tracking-wider text-left mb-6">Mensagem Exclusiva</h3>
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Seu Nome</label>
                        <input
                          id="contact-name-input"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Filippo"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Seu E-mail</label>
                        <input
                          id="contact-email-input"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ex: filippo@villa.com"
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Assunto</label>
                      <select
                        id="contact-subject-select"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                      >
                        <option value="Reservas" className="bg-neutral-950">Reservas de Grandes Grupos</option>
                        <option value="Eventos" className="bg-neutral-950">Eventos Corporativos / Casamentos</option>
                        <option value="Imprensa" className="bg-neutral-950">Imprensa & Parcerias</option>
                        <option value="Outros" className="bg-neutral-950">Outros Assuntos</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Mensagem</label>
                      <textarea
                        id="contact-message-input"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Como podemos tornar sua experiência inesquecível?"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-wine-900 to-wine-800 text-gold-100 border border-gold-500/20 hover:border-gold-400 hover:shadow-xl transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer focus:outline-none flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-gold-400" />
                      Enviar Mensagem Privada
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-wine-950/50 border border-gold-500/30 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-gold-400" />
                    </div>
                    <h4 className="font-serif text-xl text-white">Mensagem Recebida</h4>
                    <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                      Nossa equipe de relações públicas fará o retorno em até 4 horas úteis por meio dos contatos fornecidos. Grazie!
                    </p>
                    <button
                      id="contact-reset-btn"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-gold-400 underline hover:text-gold-300 mt-4 cursor-pointer focus:outline-none"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Abstract Architectural Stylized Map Panel */}
        <div className="mt-16 p-1 rounded-3xl bg-gradient-to-r from-wine-900/35 via-gold-500/10 to-wine-900/35 border border-white/5 shadow-2xl relative overflow-hidden h-[300px] flex items-center justify-center">
          {/* Stylized background lines mimicking a blueprint/topography map of Jardins district */}
          <div className="absolute inset-0 bg-[#070707] opacity-90" />
          
          {/* Topographic grid */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 pointer-events-none">
            {[...Array(72)].map((_, i) => (
              <div key={i} className="border-r border-b border-white" />
            ))}
          </div>

          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#050505]/60 to-[#050505]" />

          {/* Visual abstract avenues */}
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-wine-900/30 to-transparent left-1/3" />
          <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent top-1/2" />
          <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent left-2/3" />

          {/* Bella Vita Pulsing GPS Pin on Map */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="relative">
              {/* Outer pulsing ring */}
              <div className="absolute -inset-4 rounded-full bg-gold-400/25 animate-ping duration-1000" />
              <div className="absolute -inset-1 rounded-full bg-wine-900/60 animate-pulse" />
              
              <div className="relative w-12 h-12 rounded-full bg-black border border-gold-400 flex items-center justify-center shadow-lg shadow-black/80">
                <MapPin className="w-5 h-5 text-gold-400 animate-bounce" />
              </div>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-black/80 border border-white/5 backdrop-blur-md max-w-xs shadow-xl">
              <p className="text-[9px] uppercase font-mono text-gold-400 tracking-widest">BELLA VITA SÃO PAULO</p>
              <h4 className="font-serif text-sm text-white mt-0.5">Alameda Lorena, 1420</h4>
              <p className="text-[10px] text-neutral-400 mt-1 font-sans">Jardins, São Paulo - Estacionamento com Valet cortesia para clientes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
