import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiPlayFill } from "react-icons/ri";

// Placeholder image
const HEADPHONE_IMAGE = "https://pngimg.com/d/headphones_PNG101984.png"; 

// Animation Variants for Staggered Text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for smooth feel
  }
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-dark flex flex-col justify-center items-center overflow-hidden pt-20">
      
      {/* 1. ADVANCED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        
        {/* Ambient Spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* 2. MASSIVE BACKGROUND TEXT (Parallax Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] leading-none font-display font-black text-transparent stroke-text tracking-tighter opacity-10"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
        >
          AURA
        </motion.h1>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
        
        {/* LEFT SIDE: TEXT (Span 7 columns) */}
        <motion.div 
          className="md:col-span-7 text-center md:text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glass Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">New Generation</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight">
            Redefine <br />
            {/* Animated Gradient Text */}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-gray-400 to-gray-600 animate-shimmer bg-[length:200%_auto]">
              Silence.
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg mx-auto md:mx-0 font-body leading-relaxed">
            Experience sound in its purest form with adaptive active noise cancellation and spatial audio fidelity.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Link 
              to="/product/aura-one"
              className="group relative px-8 py-4 bg-white text-dark font-bold text-lg rounded-full overflow-hidden flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,243,255,0.6)] transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-dark transition-colors">Shop Now</span>
              <RiArrowRightLine className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group flex items-center justify-center gap-3 px-8 py-4 text-white rounded-full font-medium hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <RiPlayFill className="ml-1" />
              </span>
              <span>Watch Film</span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE (Span 5 columns) */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center relative">
          
          {/* SOUND WAVE PULSE EFFECT */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             {[...Array(3)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/30"
                 initial={{ width: "300px", height: "300px", opacity: 0.8 }}
                 animate={{ 
                   width: ["300px", "600px"], 
                   height: ["300px", "600px"], 
                   opacity: [0.5, 0] 
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   delay: i * 1, // Staggered pulses
                   ease: "easeOut"
                 }}
               />
             ))}
          </div>

          <motion.img
            src={HEADPHONE_IMAGE}
            alt="Aura One Headphones"
            className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 relative"
            
            // Floating Animation
            initial={{ y: 30, opacity: 0, rotate: -10 }}
            animate={{ 
              y: [-15, 15, -15], 
              rotate: 0,
              opacity: 1
            }} 
            transition={{
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              opacity: { duration: 1 },
              rotate: { duration: 1 }
            }}
          />
        </div>

      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Scroll to Explore</span>
        <motion.div 
          className="w-[1px] h-16 bg-linear-to-b from-transparent via-neon to-transparent"
          animate={{ scaleY: [0.5, 1.5, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;