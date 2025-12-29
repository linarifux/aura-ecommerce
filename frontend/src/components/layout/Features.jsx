import { motion } from "framer-motion";
import { RiBluetoothConnectLine, RiBattery2ChargeLine, RiSoundModuleLine, RiLeafLine, RiSpeedLine } from "react-icons/ri";

// Reusable "Bento Card" with Advanced Glassmorphism & Hover Spotlight
const BentoCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={`group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,243,255,0.15)] ${className}`}
    >
      {/* Dynamic Hover Gradient Blob */}
      <div className="absolute -inset-px bg-gradient-to-r from-neon/0 via-neon/10 to-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
      
      {/* Content Wrapper */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-32 px-6 bg-dark relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-gray-300 uppercase">Technical Breakdown</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Perfection.
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Every component is meticulously designed to deliver an audio experience that transcends the ordinary.
          </p>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[650px]">
          
          {/* CARD 1: ADAPTIVE ANC (Wide Span) */}
          <BentoCard className="md:col-span-2 flex flex-col justify-between overflow-visible">
            <div className="flex justify-between items-start">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/20 to-transparent border border-white/5 flex items-center justify-center mb-6 text-neon shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                  <RiSoundModuleLine size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Adaptive ANC</h3>
                <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                  Real-time algorithmic noise suppression that adapts 48,000 times per second to your environment.
                </p>
              </div>
              
              {/* Animated Switch Visual */}
              <div className="hidden md:flex flex-col gap-2">
                 <div className="px-4 py-2 rounded-lg bg-neon/10 border border-neon/20 text-neon text-xs font-mono uppercase tracking-widest">
                    Mode: Isolation
                 </div>
              </div>
            </div>
            
            {/* Advanced Sound Wave Visualization */}
            <div className="absolute right-0 bottom-0 top-1/3 w-2/3 md:w-1/2 opacity-30 group-hover:opacity-60 transition-opacity flex items-end justify-end gap-1.5 px-8 pb-8 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 md:w-4 bg-gradient-to-t from-neon to-transparent rounded-t-full"
                  animate={{ height: ["20%", "90%", "20%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                  style={{ height: "40%" }}
                />
              ))}
            </div>
          </BentoCard>

          {/* CARD 2: BATTERY LIFE (Tall Span) */}
          <BentoCard className="md:row-span-2 flex flex-col items-center justify-center text-center relative" delay={0.2}>
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative w-28 h-72 bg-gray-900/80 rounded-3xl border-2 border-white/10 overflow-hidden mb-8 shadow-2xl backdrop-blur-sm z-10">
              {/* Grid lines inside battery */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_20px]" />
              
              {/* Filling Liquid Effect */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neon to-cyan-400 shadow-[0_0_40px_rgba(0,243,255,0.6)]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2.5, ease: "circOut", delay: 0.5 }}
              >
                {/* Bubbles */}
                <div className="absolute top-0 left-0 w-full h-2 bg-white/50 blur-[2px]" />
              </motion.div>
              
              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 mix-blend-overlay">
                 <RiBattery2ChargeLine size={48} className="text-white opacity-50" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">30h</h3>
              <p className="text-gray-400 font-medium">Continuous Playback</p>
              <div className="mt-4 inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neon font-mono">
                +1hr in 5mins
              </div>
            </div>
          </BentoCard>

          {/* CARD 3: LATENCY (Standard) */}
          <BentoCard delay={0.3}>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <RiBluetoothConnectLine size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Bluetooth 5.3</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Industry-leading connectivity with <span className="text-white">sub-20ms latency</span> for seamless gaming and video.
            </p>
          </BentoCard>

          {/* CARD 4: COMFORT (Standard) */}
          <BentoCard delay={0.4}>
             <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300">
              <RiLeafLine size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Cloud Comfort</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aerospace-grade aluminum frame wrapped in breathable <span className="text-white">protein leather</span>.
            </p>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default Features;