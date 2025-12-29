import { useState } from "react";
import { motion } from "framer-motion";
import { RiMailSendLine, RiMapPinLine, RiPhoneLine, RiSendPlaneFill, RiArrowRightLine } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: RiMailSendLine,
      title: "Email",
      value: "hello@aura.audio",
      desc: "For general inquiries and support."
    },
    {
      icon: RiPhoneLine,
      title: "Phone",
      value: "+1 (555) 000-AURA",
      desc: "Mon-Fri, 9am - 6pm EST."
    },
    {
      icon: RiMapPinLine,
      title: "Headquarters",
      value: "Tokyo, Japan",
      desc: "Shibuya District, Tech Plaza 4F."
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-neon font-mono tracking-widest uppercase text-sm mb-4 block"
          >
            Support
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have a question about our gear? Need technical support? Or just want to talk audio? We are listening.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* LEFT: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-neon/30 transition-colors group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-neon font-mono mb-2">{item.value}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Visual Decor */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-neon/20 to-transparent border border-white/10 relative overflow-hidden hidden lg:block"
            >
                <h4 className="text-white font-display font-bold text-2xl mb-2 relative z-10">Join the Community</h4>
                <p className="text-gray-300 relative z-10 mb-6">Follow our journey on social media.</p>
                <div className="flex gap-4 relative z-10">
                    <span className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full text-white">@AuraAudio</span>
                    <span className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full text-white">#CyberSound</span>
                </div>
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider font-mono">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider font-mono">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-mono">Subject</label>
                   <input 
                      type="text" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Product Inquiry..."
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon transition-colors"
                    />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-mono">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon text-dark font-bold text-lg py-4 rounded-xl hover:bg-white transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                     <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                  ) : isSent ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <RiSendPlaneFill className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;