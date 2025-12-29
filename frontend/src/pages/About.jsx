import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-dark pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-neon font-mono tracking-widest uppercase text-sm mb-4 block"
            >
                The Story
            </motion.span>
            <motion.h1 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight"
            >
                We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Silence</span> <br />
                to Amplify Sound.
            </motion.h1>
            <motion.p 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 leading-relaxed"
            >
                AURA was born from a simple obsession: the space between notes. We believe that true audio fidelity isn't just about loudness—it's about the precision of silence and the texture of sound.
            </motion.p>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
                { title: "Precision Engineering", desc: "Every driver is calibrated to within 0.1dB tolerance for studio-perfect matching." },
                { title: "Sustainable Future", desc: "Constructed from 100% recycled aluminum and ocean-bound plastics." },
                { title: "Human Centric", desc: "Designed using scans of 10,000 ears to create the perfect universal fit." }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-neon/30 transition-colors"
                >
                    <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* IMAGE BREAK */}
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="rounded-3xl overflow-hidden relative h-[400px] md:h-[600px] mb-24 border border-white/10"
        >
            <img 
                src="https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=2000&auto=format&fit=crop" 
                alt="Studio Sound" 
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 md:left-20">
                <h2 className="text-4xl font-display font-bold text-white mb-2">Designed in Tokyo</h2>
                <p className="text-neon font-mono">Est. 2024</p>
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;