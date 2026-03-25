import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, animate } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Truck, 
  Camera, 
  RefreshCcw, 
  Headphones, 
  ArrowRight,
  ArrowDown,
  TrendingDown,
  Zap,
  Layers,
  Play,
  Target,
  BookOpen,
  Users
} from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    const controls = animate(20, 75, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (value) => setDisplayCount(Math.round(value))
    });
    return controls.stop;
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-brand-green/30">
      {/* 1. HEADLINE E SUBTEXTO */}
      <section className="pt-24 pb-12 px-4 max-w-6xl mx-auto text-center flex flex-col items-center">
        <h1 
          className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-center max-w-4xl"
        >
          Nunca mais <span className="animate-gradient-red">pague o dobro</span> nas suas roupas
        </h1>
        <p 
          className="text-xl md:text-3xl text-black font-normal max-w-3xl mx-auto leading-tight text-center mb-12"
        >
          Tenha acesso ao contato direto de fábricas chinesas e importe seus produtos até <span className="font-black">{displayCount}% mais barato</span>
        </p>
        
        {/* VSL - Video Sales Letter */}
        <div className="w-full max-w-4xl mb-12 relative group">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-4 border-black relative">
            {/* Placeholder para Vídeo (VSL) */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-brand-green rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                <Play className="w-10 h-10 md:w-16 md:h-16 text-black fill-black ml-2" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-white/50 font-mono text-xs uppercase tracking-widest">
                <span>VSL_PREVIEW_MODE</span>
                <span>00:00 / 12:45</span>
              </div>
            </div>
            
            {/* Overlay de carregamento simulado */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-[10px] font-bold uppercase tracking-tighter">LIVE</span>
            </div>
          </div>
          
          {/* Sombra decorativa */}
          <div className="absolute -inset-4 bg-brand-green/10 blur-3xl -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </section>

      {/* 3. CTA DE ENCAMINHAMENTO REMOVIDO (INTEGRADO NA HEADLINE) */}

      {/* 4. CARROSSEL DE RESULTADOS (INFINITO + DRAGGABLE) */}
      <section className="mb-32 overflow-hidden relative">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-center">Alguns dos resultados</h2>
          <div className="w-24 h-2 bg-brand-green rounded-full mx-auto"></div>
        </div>

        <div className="relative flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-4">
          {/* Marquee Animation Container */}
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -2800 }} // Ajustado para 7 itens largos
            className="flex animate-marquee whitespace-nowrap gap-6 py-4 px-4"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={`carousel-1-${i}`} className="w-72 md:w-96 aspect-square bg-gray-100 rounded-2xl flex-shrink-0 relative overflow-hidden shadow-xl border border-gray-100 pointer-events-none">
                <img 
                  src={`https://picsum.photos/seed/shoe-result-${i}/800/800`} 
                  alt={`Resultado ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            {/* Duplicata para Loop Infinito */}
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={`carousel-2-${i}`} className="w-72 md:w-96 aspect-square bg-gray-100 rounded-2xl flex-shrink-0 relative overflow-hidden shadow-xl border border-gray-100 pointer-events-none">
                <img 
                  src={`https://picsum.photos/seed/shoe-result-${i}/800/800`} 
                  alt={`Resultado ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="mt-12 flex justify-center px-4 mb-32">
        <motion.a 
          href="#oferta"
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          variants={{
            initial: { scale: 1 },
            animate: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          viewport={{ margin: "-40% 0px -40% 0px" }}
          className="group relative inline-flex items-center justify-center px-12 py-6 bg-black text-white font-black text-xl md:text-3xl rounded-2xl active:scale-95 transition-all overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
        >
          <motion.span 
            variants={{
              initial: { color: "#fff" },
              animate: { color: "#fff" },
              hover: { color: "#fff" }
            }}
            className="relative z-10 flex items-center gap-3 transition-colors duration-500"
          >
            Desbloquear acesso <ArrowDown className="w-8 h-8 group-hover:translate-y-2 transition-transform" />
          </motion.span>
          
          {/* Radial Expansion triggered by scroll AND hover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              variants={{
                initial: { width: "0%", height: "0%", borderRadius: "100%" },
                animate: { width: "150%", height: "600%", borderRadius: "100%" },
                hover: { width: "150%", height: "600%", borderRadius: "100%" }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-brand-green"
            />
          </div>

          {/* Glow Pulse */}
          <motion.div 
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-brand-green/20 blur-xl pointer-events-none"
          />
        </motion.a>
      </div>

      {/* 6. GRID DE BENEFÍCIOS (REESTILIZADO) */}
      <div className="bg-zinc-950 py-32 mb-32 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-green/15 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

        <section className="px-4 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.85] text-white">
              Por que escolher <br />
              <span className="animate-gradient-green">o Shoe?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative">
            {[
              { icon: <TrendingDown className="w-8 h-8 text-black" />, title: "Preços Imbatíveis", desc: "Custos de importação mais baixos que Cssbuy, Hubbuy e semelhantes." },
              { icon: <Zap className="w-8 h-8 text-black" />, title: "Frete Expresso", desc: "Média de 25 dias para recebimento. Nunca mais espere 2 meses." },
              { icon: <Truck className="w-8 h-8 text-black" />, title: "Envio Inteligente", desc: "Custo de envio otimizado e embutido, garantindo o menor preço final." },
              { icon: <Camera className="w-8 h-8 text-black" />, title: "Busca por Foto", desc: "Tire uma foto e receba o orçamento. Sem garimpar links duvidosos." },
              { icon: <Layers className="w-8 h-8 text-black" />, title: "Qualidade 1:1", desc: "Escolha entre qualidade média, alta ou idêntica ao original (1:1)." },
              { icon: <Headphones className="w-8 h-8 text-black" />, title: "Suporte VIP", desc: "Atendimento especializado em português. Dúvidas resolvidas na hora." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileInView={{ scale: 1.05, y: -5 }}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-10 bg-white/5 backdrop-blur-md text-white rounded-[32px] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col items-center text-center group relative overflow-hidden transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-green/10 transition-colors"></div>
                
                <motion.div 
                  whileInView={{ scale: 1.1, rotate: 3 }}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(34,197,94,0.3)] transition-all duration-500"
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 7. BOX QUALIDADE NEGATIVA (CONCORRÊNCIA REESTILIZADO) */}
      <section className="px-4 max-w-7xl mx-auto mb-16">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.85]">
            Compare <br />
            <span className="animate-gradient-green">você mesmo</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-black rounded-[40px] shadow-2xl relative overflow-hidden border border-red-100 p-8 md:p-16 group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center text-center">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85] text-red-600">
                <span className="text-black">Outros</span> agentes
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Custos extremamente elevados",
                  "Qualidade duvidosa e alto risco",
                  "Prazo de entrega de 60+ dias",
                  "Sem garantia de reembolso",
                  "Um tiro na lua a cada envio"
                ].map((text, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05, backgroundColor: "rgba(220, 38, 38, 0.1)" }}
                    viewport={{ margin: "-45% 0px -45% 0px" }}
                    className="flex flex-col items-center gap-3 bg-red-600/5 p-5 rounded-2xl border border-red-600/10 text-red-900 font-medium text-sm transition-all text-center"
                  >
                    <XCircle className="w-5 h-5 flex-shrink-0 text-red-600" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <motion.div 
                whileInView={{ scale: 1.02 }}
                viewport={{ amount: 0.6 }}
                className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 transition-transform duration-700"
              >
                <img 
                  src="https://picsum.photos/seed/bad-quality-shoe/1080/1080" 
                  alt="Qualidade Ruim"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-80 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </motion.div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-3xl shadow-2xl rotate-[-6deg] hidden md:block">
                <div className="text-xs font-black uppercase tracking-widest mb-1">Prejuízo Médio</div>
                <div className="text-3xl font-black tracking-tighter">R$ 450,00+</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. BOX QUALIDADE SHOE (PREMIUM REESTILIZADO) */}
      <section className="px-4 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white text-black rounded-[40px] shadow-2xl relative overflow-hidden border border-brand-green/20 p-8 md:p-16 group"
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] -ml-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div 
                whileInView={{ scale: 1.02 }}
                viewport={{ amount: 0.6 }}
                className="aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-brand-green/10 transition-transform duration-700"
              >
                <img 
                  src="https://picsum.photos/seed/premium-shoe-detail/1080/1080" 
                  alt="Qualidade Premium"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </motion.div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-brand-green text-black p-6 rounded-3xl shadow-2xl rotate-[6deg] hidden md:block">
                <div className="text-xs font-black uppercase tracking-widest mb-1">Lucro Médio</div>
                <div className="text-3xl font-black tracking-tighter">150% - 300%</div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.85]">
                O padrão <br />
                <span className="animate-gradient-green">do Shoe</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  "Couro legítimo e materiais premium",
                  "Qualidades média, alta e 1:1",
                  "Embalagens originais e acessórios",
                  "Garantia total de satisfação",
                  "10.000+ peças disponíveis"
                ].map((text, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                    viewport={{ margin: "-45% 0px -45% 0px" }}
                    className="flex flex-col items-center gap-3 bg-brand-green/5 p-5 rounded-2xl border border-brand-green/10 text-gray-900 font-medium text-sm transition-all text-center"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 9. SEÇÃO DE BRINDES (BONUS REESTILIZADO) */}
      <section className="px-4 max-w-6xl mx-auto mb-32 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">
            Bônus <span className="animate-gradient-green">exclusivos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Bonus #1 */}
          <motion.div 
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            whileInView={{ y: -8, scale: 1.02 }}
            viewport={{ margin: "-40% 0px -40% 0px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-zinc-900 text-white p-10 rounded-[40px] relative overflow-hidden group shadow-2xl flex flex-col items-center text-center border border-white/10 h-full"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 blur-[80px] -mr-24 -mt-24 group-hover:bg-brand-green/20 transition-colors"></div>
            
            <motion.div 
              whileInView={{ rotate: 6, scale: 1.1 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30_rgba(34,197,94,0.3)] transition-transform"
            >
              <BookOpen className="w-8 h-8 text-black" />
            </motion.div>

            <div className="mb-4 px-3 py-1 bg-brand-green/10 text-brand-green font-black text-[10px] rounded-full tracking-widest uppercase border border-brand-green/20">
              Bônus #1
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tighter">Catálogo VIP <br /> de Fábricas</h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed font-normal">
              Acesso a um catálogo com 40.000+ imagens de produtos e atualizações diárias direto da China.
            </p>

            <div className="mt-auto w-full flex flex-col items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-zinc-900 overflow-hidden shadow-lg group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
                    <img src={`https://picsum.photos/seed/user-bonus-${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-zinc-900 bg-brand-green flex items-center justify-center text-black font-black text-xs">
                  +10k
                </div>
              </div>
              <div className="text-brand-green font-black text-xs tracking-widest uppercase">Atualizado hoje</div>
            </div>
          </motion.div>

          {/* Bonus #2 */}
          <motion.div 
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            whileInView={{ y: -8, scale: 1.02 }}
            viewport={{ margin: "-40% 0px -40% 0px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-zinc-900 text-white p-10 rounded-[40px] relative overflow-hidden group shadow-2xl flex flex-col items-center text-center border border-white/10 h-full"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 blur-[80px] -mr-24 -mt-24 group-hover:bg-brand-green/20 transition-colors"></div>
            
            <motion.div 
              whileInView={{ rotate: 6, scale: 1.1 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30_rgba(34,197,94,0.3)] transition-transform"
            >
              <Users className="w-8 h-8 text-black" />
            </motion.div>

            <div className="mb-4 px-3 py-1 bg-brand-green/10 text-brand-green font-black text-[10px] rounded-full tracking-widest uppercase border border-brand-green/20">
              Bônus #2
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-tighter">Comunidade <br /> de Elite</h3>
            <p className="text-gray-400 mb-10 text-lg font-normal leading-relaxed">
              Grupo exclusivo para compartilhar importações, suporte com admins e dicas de revenda lucrativa.
            </p>

            <div className="mt-auto w-full flex justify-center">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                <div className="relative">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center border border-white/10">
                    <Zap className="w-6 h-6 text-brand-green" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-zinc-900 animate-pulse"></div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Suporte em Tempo Real</div>
                  <div className="text-gray-500 text-xs">Admins online agora</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. TEXTO DE APLICABILIDADE (CENTRALIZADO) */}
      <section className="px-4 max-w-6xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-zinc-900 text-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/10 p-8 md:p-20 group flex flex-col items-center text-center"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[140px] -mr-64 -mt-64 group-hover:bg-brand-green/30 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-4xl w-full">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-green text-black font-black text-[10px] rounded-full mb-8 tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Target className="w-3 h-3" /> Público Alvo
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              Para quem é esse <br />
              <span className="animate-gradient-green">acesso?</span>
            </h2>
            
            <p className="text-xl md:text-3xl text-gray-400 leading-tight font-normal mb-16 italic max-w-2xl mx-auto">
              "O mercado de revenda mudou. Ou você tem a fonte, ou você é o lucro de alguém."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {[
                { title: "Revendedores", desc: "Para quem quer revender com margens mais altas e lucrar mais.", icon: <TrendingDown className="w-5 h-5" /> },
                { title: "Importadores", desc: "Pague apenas o custo real do produto sem margens e burocracia de agentes.", icon: <Layers className="w-5 h-5" /> },
                { title: "Exigentes", desc: "Quem quer a melhor qualidade possível sem precisar pagar +R$1000 por uma peça.", icon: <Star className="w-5 h-5" /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ y: 0, scale: 1 }}
                  whileInView={{ y: -8, scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  viewport={{ margin: "-45% 0px -45% 0px" }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col items-center gap-4 transition-all group/item"
                >
                  <motion.div 
                    whileInView={{ rotate: 6, scale: 1.1 }}
                    viewport={{ margin: "-45% 0px -45% 0px" }}
                    className="w-14 h-14 bg-brand-green rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_10px_30px_rgba(34,197,94,0.3)] transition-transform"
                  >
                    <div className="text-black">{item.icon}</div>
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11. BLOCO DE OFERTA FINAL */}
      <section id="oferta" className="px-4 py-32 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-green/10 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-brand-green text-black font-bold text-sm rounded-full mb-8 tracking-[0.3em] uppercase"
          >
            Acesso vitalício
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">Domine o mercado</h2>
          <p className="text-brand-green font-semibold text-2xl mb-16 tracking-widest italic">Oferta de lançamento por tempo limitado</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
            <div className="bg-zinc-900 p-10 rounded-[40px] border border-white/10 flex flex-col justify-center text-left">
              <p className="text-gray-400 text-lg mb-2">De R$ 197,00 por apenas:</p>
              <div className="text-7xl md:text-8xl font-bold text-white tracking-tighter">
                <span className="text-3xl align-top mr-1">R$</span>30,00
              </div>
              <p className="text-brand-green mt-4 font-semibold text-sm uppercase tracking-widest">Pagamento único</p>
            </div>
            
            <div className="bg-brand-green p-10 rounded-[40px] flex flex-col justify-center text-black">
              <ul className="space-y-4 text-left font-bold text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Acesso Vitalício</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Suporte 24/7</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Atualizações Grátis</li>
              </ul>
            </div>
          </div>

          <motion.a 
            href="https://checkout.exemplo.com" 
            whileInView={{ scale: 1.02 }}
            viewport={{ amount: 0.8 }}
            className="group relative block w-full py-8 bg-brand-green text-black font-black text-2xl md:text-4xl rounded-3xl shadow-[0_20px_60px_rgba(34,197,94,0.3)] active:scale-95 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-4">
              Garantir agora <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.a>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-brand-green" /> Compra 100% Segura
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="w-6 h-6 text-brand-green" /> 7 Dias de Garantia
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ (ACORDEÃO) */}
      <section className="px-4 py-32 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-semibold text-center mb-16 italic tracking-tighter">Dúvidas <span className="text-brand-green">frequentes</span></h2>
        <div className="space-y-6 w-full">
          {[
            { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os links, contatos e o guia passo a passo para começar a importar hoje mesmo." },
            { q: "Preciso saber falar chinês ou inglês?", a: "Não! Nosso suporte e o sistema do Agente Shoe são totalmente em português para facilitar sua experiência e garantir que você não erre nada." },
            { q: "Qual o valor mínimo para importar?", a: "Não existe valor mínimo. Você pode comprar desde um único par de meias para uso próprio até centenas de tênis para sua loja de revenda." },
            { q: "Os produtos são realmente de qualidade?", a: "Sim. Trabalhamos apenas com fábricas que produzem as melhores lines do mercado (PK, LJR, GX), garantindo fidelidade total ao original em materiais e peso." },
            { q: "E se eu não gostar do conteúdo?", a: "Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeito com o conteúdo ou achar que não é para você, devolvemos 100% do seu dinheiro." }
          ].map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ shadow: "none" }}
              whileInView={{ shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
              viewport={{ margin: "-45% 0px -45% 0px" }}
              className="border-2 border-gray-100 rounded-[30px] overflow-hidden bg-white shadow-sm transition-shadow"
            >
              <motion.button 
                onClick={() => toggleFaq(idx)}
                whileInView={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className="w-full p-8 flex items-center justify-between text-center font-semibold text-xl transition-colors"
              >
                <div className="w-10 h-10 flex-shrink-0"></div> {/* Spacer for centering */}
                <span className="flex-1">{faq.q}</span>
                <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-all ${openFaq === idx ? 'bg-brand-green text-white rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </motion.button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-gray-500 text-lg leading-relaxed font-normal text-center">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 tracking-tighter italic">Agente <span className="text-brand-green">Shoe</span></h2>
          <p className="text-gray-500 max-w-md mx-auto mb-12 font-normal">O seu atalho definitivo para o mercado de luxo direto da fonte.</p>
          <div className="flex justify-center gap-8 text-sm font-semibold tracking-widest mb-12">
            <a href="#" className="hover:text-brand-green transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-green transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-green transition-colors">Suporte</a>
          </div>
          <div className="pt-12 border-t border-white/10 text-gray-600 text-xs font-normal tracking-widest">
            © 2026 Agente Shoe. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
