import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiShieldCheckLine, RiDropLine, RiBattery2ChargeLine, RiHammerLine, RiErrorWarningLine, RiFileList3Line } from "react-icons/ri";

const Warranty = () => {
  const coverage = [
    {
      icon: RiShieldCheckLine,
      title: "Manufacturing Defects",
      desc: "If it fails due to our error, we replace it. No questions asked."
    },
    {
      icon: RiBattery2ChargeLine,
      title: "Battery Health",
      desc: "Coverage for batteries that hold less than 80% capacity within 2 years."
    },
    {
      icon: RiHammerLine,
      title: "Workmanship",
      desc: "Protection against loose parts, stitching issues, or assembly faults."
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* HERO */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-neon/10 rounded-full text-neon mb-6 border border-neon/20 shadow-[0_0_20px_rgba(0,243,255,0.2)]"
          >
            <RiShieldCheckLine size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            The AURA <span className="text-neon">Promise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Every product we craft is backed by our industry-leading 2-Year Limited Warranty. We build for longevity, but we protect against the unexpected.
          </motion.p>
        </div>

        {/* COVERAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {coverage.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-neon/30 transition-all group"
            >
              <item.icon className="text-gray-400 group-hover:text-neon transition-colors mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EXCLUSIONS & CLAIM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: What's Not Covered */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <RiErrorWarningLine className="text-red-400 mr-3" /> Exclusions
            </h3>
            <p className="text-gray-400 mb-6">
              Our warranty is extensive, but it does not cover damages resulting from misuse or normal wear and tear.
            </p>
            <ul className="space-y-4">
              {[
                "Water damage (unless product is IP-rated)",
                "Theft or loss of the product",
                "Cosmetic damage (scratches, dents) over time",
                "Unauthorized repairs or modifications"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 mr-3 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: How to Claim */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neon/10 to-transparent border border-neon/20 rounded-3xl p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
            <RiFileList3Line className="text-neon text-4xl mb-6 mx-auto md:mx-0" />
            <h3 className="text-2xl font-bold text-white mb-4">File a Claim</h3>
            <p className="text-gray-300 mb-8">
              Need to use your warranty? Our support team will guide you through the process. Please have your serial number ready.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-dark font-bold py-4 px-8 rounded-full hover:bg-neon transition-colors inline-block"
            >
              Contact Support
            </Link>
          </div>

        </div>

        {/* REGISTRATION CTA */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
            <p className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-4">New Gear?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Register your product to activate warranty</h2>
            <div className="flex justify-center gap-4 max-w-md mx-auto">
                <input 
                    type="text" 
                    placeholder="Enter Serial Number" 
                    className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none w-full"
                />
                <button className="bg-neon/20 text-neon border border-neon/50 px-6 py-3 rounded-lg font-bold hover:bg-neon hover:text-dark transition-all">
                    Activate
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Warranty;