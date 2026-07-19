import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DiningZone, Reservation } from '../types';
import { Calendar, Users, Clock, Compass, HelpCircle, Check, Copy, Clipboard, CheckCircle, Trash2, ShieldCheck, Sparkles } from 'lucide-react';

export default function Reservations() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState(2);
  const [selectedZone, setSelectedZone] = useState('marmo');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');

  const [bookingConfirmed, setBookingConfirmed] = useState<Reservation | null>(null);
  const [allBookings, setAllBookings] = useState<Reservation[]>([]);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Dining zones configuration
  const zones: DiningZone[] = [
    {
      id: 'marmo',
      name: 'Sala di Marmo',
      description: 'Salão principal sofisticado revestido em mármore nero marquino com iluminação de velas e música clássica suave ao vivo.',
      capacity: 'Mesas de 2 a 8 pessoas',
      ambiance: 'Elegante, Piano ao vivo, Amplo'
    },
    {
      id: 'vetro',
      name: 'Giardino di Vetro',
      description: 'Nosso jardim coberto sob teto de vidro transparente. Jante observando as estrelas entre heras suspensas e lanternas românticas.',
      capacity: 'Mesas de 2 a 4 pessoas',
      ambiance: 'Romântico, Conectado à natureza, Intimista'
    },
    {
      id: 'cantina',
      name: 'La Cantina Privata',
      description: 'Exclusiva adega subterrânea cercada por nossos melhores vinhos históricos. Oferece serviço de sommelier particular dedicado.',
      capacity: 'Mesas exclusivas de 2 a 6 pessoas',
      ambiance: 'Ultra-exclusivo, Baixa luz, Histórico',
      extraCharge: 'Taxa mínima de consumo: R$ 250 por pessoa'
    }
  ];

  // Hours available for booking
  const hours = ['12:00', '13:30', '15:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

  // Load bookings from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('bellavita_bookings');
    if (saved) {
      try {
        setAllBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Erro ao carregar reservas", e);
      }
    }
  }, []);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!date) {
      setErrorMsg('Por favor, selecione uma data.');
      return;
    }
    if (!name || !email || !phone) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const code = 'BV-' + Math.floor(100000 + Math.random() * 900000).toString();
    const newReservation: Reservation = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      date,
      time,
      guests,
      zone: zones.find(z => z.id === selectedZone)?.name || selectedZone,
      specialRequests: requests,
      bookingCode: code,
      createdAt: new Date().toLocaleDateString('pt-BR')
    };

    const updated = [newReservation, ...allBookings];
    setAllBookings(updated);
    localStorage.setItem('bellavita_bookings', JSON.stringify(updated));

    setBookingConfirmed(newReservation);

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setRequests('');
  };

  const copyBookingCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cancelBooking = (id: string) => {
    const updated = allBookings.filter(b => b.id !== id);
    setAllBookings(updated);
    localStorage.setItem('bellavita_bookings', JSON.stringify(updated));
    if (bookingConfirmed?.id === id) {
      setBookingConfirmed(null);
    }
  };

  return (
    <section id="reservas" className="relative py-32 bg-gradient-to-b from-[#0c0305] via-[#050505] to-black overflow-hidden">
      {/* Absolute glow grids */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-wine-950/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold-950/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-400 font-mono font-bold">
            Reserva de Mesas
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4">
            Garanta Seu Momento
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-4 leading-relaxed">
            As vagas são extremamente limitadas para preservar nossa atmosfera íntima e a atenção minuciosa do serviço. Reserve sua mesa com antecedência.
          </p>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Double Column Reservation Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Dynamic interaction panel (Form or Voucher) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!bookingConfirmed ? (
                /* FORM VIEW */
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-10 rounded-3xl bg-neutral-900/30 border border-white/5 backdrop-blur-md shadow-2xl relative"
                >
                  {/* Subtle Gold Frame Glint */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/[0.02] filter blur-xl rounded-full" />

                  <form onSubmit={handleBookingSubmit} className="space-y-8 text-left">
                    
                    {/* Error message */}
                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-wine-950/80 border border-wine-800/40 text-wine-200 text-xs font-mono">
                        {errorMsg}
                      </div>
                    )}

                    {/* Step 1: Date & Time & Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">
                          1. Selecione a Data *
                        </label>
                        <div className="relative">
                          <input
                            id="reserve-date-input"
                            type="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">
                          2. Horário *
                        </label>
                        <select
                          id="reserve-time-select"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                        >
                          {hours.map(h => (
                            <option key={h} value={h} className="bg-neutral-950 text-white">{h}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">
                          3. Pessoas *
                        </label>
                        <div className="flex items-center justify-between border border-white/10 bg-black/50 rounded-xl p-1">
                          <button
                            id="reserve-guests-dec"
                            type="button"
                            onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                            className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg font-bold text-lg focus:outline-none cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-white text-sm font-mono font-semibold flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-gold-400" />
                            {guests} {guests === 1 ? 'Pessoa' : 'Pessoas'}
                          </span>
                          <button
                            id="reserve-guests-inc"
                            type="button"
                            onClick={() => setGuests(prev => Math.min(12, prev + 1))}
                            className="px-3 py-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg font-bold text-lg focus:outline-none cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Visual Dining Zone Selector */}
                    <div className="space-y-3">
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">
                        4. Escolha a Atmosfera / Salão *
                      </label>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {zones.map((z) => (
                          <button
                            id={`reserve-zone-btn-${z.id}`}
                            key={z.id}
                            type="button"
                            onClick={() => setSelectedZone(z.id)}
                            className={`p-5 rounded-2xl border text-left flex flex-col justify-between h-full transition-all duration-300 relative overflow-hidden group cursor-pointer focus:outline-none ${
                              selectedZone === z.id
                                ? 'bg-wine-950/40 border-gold-400 shadow-lg shadow-wine-950/40'
                                : 'bg-black/40 border-white/5 hover:border-white/15'
                            }`}
                          >
                            {selectedZone === z.id && (
                              <div className="absolute top-3 right-3 p-1 rounded-full bg-gold-400 text-black">
                                <Check className="w-3 h-3" />
                              </div>
                            )}
                            <div>
                              <h4 className={`font-serif text-base font-semibold ${selectedZone === z.id ? 'text-white' : 'text-neutral-300'}`}>
                                {z.name}
                              </h4>
                              <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                                {z.description}
                              </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                              <p className="text-[10px] text-neutral-500 font-mono">
                                Ambiance: <span className="text-gold-400">{z.ambiance}</span>
                              </p>
                              {z.extraCharge && (
                                <p className="text-[9px] text-wine-400 font-mono italic">
                                  {z.extraCharge}
                                </p>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Contact Details */}
                    <div className="space-y-4">
                      <label className="block text-xs uppercase tracking-widest text-neutral-400 font-mono font-semibold">
                        5. Suas Informações de Contato
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          id="reserve-name-input"
                          type="text"
                          required
                          placeholder="Seu nome completo *"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                        />
                        <input
                          id="reserve-email-input"
                          type="email"
                          required
                          placeholder="Seu e-mail principal *"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <input
                          id="reserve-phone-input"
                          type="tel"
                          required
                          placeholder="Celular / WhatsApp (com DDD) *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                        />
                        <textarea
                          id="reserve-requests-input"
                          rows={3}
                          placeholder="Restrições alimentares, alergias, comemoração especial ou notas..."
                          value={requests}
                          onChange={(e) => setRequests(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Disclaimer and Submit Button */}
                    <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 font-sans max-w-sm">
                        <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                        <span>Sua reserva será confirmada instantaneamente. Cancelamentos ou alterações podem ser feitos gratuitamente.</span>
                      </div>
                      <button
                        id="reserve-submit-btn"
                        type="submit"
                        className="px-10 py-4 rounded-xl bg-gradient-to-r from-wine-900 to-wine-800 text-gold-100 border border-gold-500/20 hover:border-gold-400 hover:shadow-lg hover:shadow-wine-950/40 transition-all text-xs uppercase tracking-widest font-semibold cursor-pointer focus:outline-none"
                      >
                        Confirmar Reserva Garantida
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                /* LUXURY RESERVATION VOUCHER / RECEIPT */
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12 rounded-3xl bg-[#0c0c0c] border border-gold-500/20 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle ticket perforation side dots */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#050505] rounded-r-full border-r border-gold-500/10 pointer-events-none" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#050505] rounded-l-full border-l border-gold-500/10 pointer-events-none" />

                  {/* Confetti golden light */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gold-500/10 rounded-full filter blur-3xl pointer-events-none" />

                  <div className="text-center space-y-8 text-left">
                    
                    {/* Success icon */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-wine-950/50 border border-gold-500/30 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-gold-400" />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-white">Mesa Confirmada com Sucesso</h3>
                      <p className="text-neutral-400 text-xs md:text-sm font-sans max-w-md">
                        Grazie, {bookingConfirmed.name.split(' ')[0]}! Um convite formal foi enviado ao seu e-mail. Apresente o código abaixo ao hostess na chegada.
                      </p>
                    </div>

                    {/* VOUCHER DETAIL CARD */}
                    <div className="p-6 rounded-2xl bg-black/60 border border-white/5 relative overflow-hidden text-left space-y-6">
                      
                      <div className="flex justify-between items-center pb-4 border-b border-white/5">
                        <div>
                          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">CÓDIGO DE RESERVA</p>
                          <span className="font-mono text-xl text-gold-400 font-bold tracking-widest">{bookingConfirmed.bookingCode}</span>
                        </div>
                        <button
                          id="btn-copy-code"
                          onClick={() => copyBookingCode(bookingConfirmed.bookingCode)}
                          className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-300 hover:text-white transition-colors focus:outline-none flex items-center gap-2 text-xs font-mono cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 text-green-400" />
                              <span>Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-gold-400" />
                              <span>Copiar Código</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Grid attributes */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">MESA PARA</p>
                          <p className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-wine-500" />
                            {bookingConfirmed.guests} {bookingConfirmed.guests === 1 ? 'Pessoa' : 'Pessoas'}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">DATA</p>
                          <p className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-wine-500" />
                            {new Date(bookingConfirmed.date + 'T00:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">HORÁRIO</p>
                          <p className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-wine-500" />
                            {bookingConfirmed.time}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">AMBIENTE</p>
                          <p className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                            <Compass className="w-4 h-4 text-wine-500" />
                            {bookingConfirmed.zone}
                          </p>
                        </div>
                      </div>

                      {/* Special Requests if present */}
                      {bookingConfirmed.specialRequests && (
                        <div className="pt-4 border-t border-white/5">
                          <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">SOLICITAÇÕES ESPECIAIS</p>
                          <p className="text-xs text-neutral-400 italic mt-1 font-serif">
                            "{bookingConfirmed.specialRequests}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons back */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                      <button
                        id="btn-new-booking"
                        onClick={() => setBookingConfirmed(null)}
                        className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-300 hover:text-white transition-colors text-xs uppercase tracking-widest font-mono cursor-pointer focus:outline-none"
                      >
                        Agendar Outra Mesa
                      </button>
                      <button
                        id="btn-add-calendar"
                        onClick={() => {
                          const title = "Almoço/Jantar no Bella Vita Ristorante";
                          const desc = `Reserva confirmada no salão: ${bookingConfirmed.zone}`;
                          const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${bookingConfirmed.date.replace(/-/g, '')}T${bookingConfirmed.time.replace(':', '')}00Z/${bookingConfirmed.date.replace(/-/g, '')}T230000Z&details=${encodeURIComponent(desc)}`;
                          window.open(gcalUrl, '_blank');
                        }}
                        className="px-6 py-3 rounded-xl bg-wine-950/40 hover:bg-wine-900/40 border border-gold-500/20 text-gold-300 transition-colors text-xs uppercase tracking-widest font-mono flex items-center gap-2 cursor-pointer focus:outline-none"
                      >
                        <Sparkles className="w-4 h-4" />
                        Adicionar ao Google Calendar
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Active Bookings list or FAQ Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Active reservations card (LocalStorage viewer) */}
            {allBookings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-neutral-900/30 border border-wine-900/20 text-left space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">Suas Reservas Vigentes</span>
                  <span className="px-2 py-0.5 rounded-full bg-wine-950/50 border border-wine-800/20 text-[9px] font-mono text-wine-200">
                    {allBookings.length} Ativas
                  </span>
                </div>

                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                  {allBookings.map((b) => (
                    <div
                      id={`booking-list-card-${b.id}`}
                      key={b.id}
                      className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors flex justify-between items-start"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-gold-300">{b.bookingCode}</span>
                          <span className="text-[9px] text-neutral-500">{b.createdAt}</span>
                        </div>
                        <p className="text-xs text-white">
                          {b.guests} {b.guests === 1 ? 'pessoa' : 'pessoas'} • {b.time}
                        </p>
                        <p className="text-[10px] text-neutral-400 italic">
                          {b.date} • {b.zone}
                        </p>
                      </div>
                      <button
                        id={`btn-cancel-booking-${b.id}`}
                        onClick={() => cancelBooking(b.id)}
                        className="p-2 rounded-lg bg-wine-950/30 hover:bg-wine-900/50 text-wine-400 hover:text-wine-200 transition-colors cursor-pointer"
                        title="Cancelar Reserva"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick Policy Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/20 border border-white/5 text-left space-y-4">
              <div className="flex items-center gap-2 text-gold-400">
                <HelpCircle className="w-4 h-4" />
                <h4 className="font-serif text-sm font-semibold text-white tracking-wider">Normas da Casa</h4>
              </div>
              <ul className="space-y-2 text-xs text-neutral-400 leading-relaxed list-disc list-inside">
                <li><strong className="text-neutral-300">Tolerância de Atraso:</strong> 15 minutos adicionais.</li>
                <li><strong className="text-neutral-300">Código de Vestimenta:</strong> Esporte Fino / Casual Elegante.</li>
                <li><strong className="text-neutral-300">Grupos Grandes:</strong> Para reservas acima de 8 pessoas, solicitamos contato direto via canal exclusivo do WhatsApp.</li>
                <li><strong className="text-neutral-300">Pet Friendly:</strong> Apenas na área do Giardino di Vetro.</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
