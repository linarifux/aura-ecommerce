import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiInstagramLine, RiTwitterXLine, RiYoutubeFill, RiMailSendLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Headphones", path: "/category/headphones" },
        { name: "Earbuds", path: "/category/earbuds" },
        { name: "Speakers", path: "/category/speakers" },
        { name: "Accessories", path: "/category/accessories" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Shipping & Returns", path: "/shipping" },
        { name: "Warranty", path: "/warranty" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About AURA", path: "/about" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
      ],
    },
  ];

  return (
    <footer className="bg-surface border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-neon/50 to-transparent blur-sm" />

      <div className="container mx-auto px-6">
        {/* GRID UPDATE:
            - Mobile: grid-cols-2 (Allows us to split links side-by-side)
            - Desktop: grid-cols-12 (Keeps original complex layout)
        */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 gap-x-8 md:gap-12 mb-16 justify-items-center md:justify-items-start text-center md:text-left">
          
          {/* BRAND COLUMN 
              - Mobile: col-span-2 (Full width)
              - Desktop: col-span-4 
          */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-center md:items-start w-full">
            <Link to="/" className="text-3xl font-display font-bold tracking-wider text-white mb-6">
              AURA<span className="text-neon">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm text-center md:text-left">
              Defining the future of personal audio. Experience sound with uncompromising clarity and immersive depth.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[RiInstagramLine, RiTwitterXLine, RiYoutubeFill].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#00f3ff" }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 hover:border-neon/30 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS 
              - Mobile: col-span-1 (Takes up half width, creating 2 columns)
              - Desktop: col-span-2 
              - Content: Centered container, text left aligned
          */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1 md:col-span-2 w-full flex flex-col items-center md:items-start">
              <div className="text-left"> {/* Wrapper to ensure text stays left-aligned */}
                <h4 className="text-white font-bold mb-6 font-display tracking-wide">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="text-gray-400 text-sm hover:text-neon transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* NEWSLETTER COLUMN 
              - Mobile: col-span-2 (Full width)
              - Desktop: col-span-2
          */}
          <div className="col-span-2 md:col-span-2 w-full">
            <h4 className="text-white font-bold mb-6 font-display tracking-wide text-center md:text-left">Stay in the Loop</h4>
            <form className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
              <div className="relative group text-left">
                <RiMailSendLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neon transition-colors" />
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="w-full bg-dark border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-neon/50 transition-colors placeholder:text-gray-600"
                />
              </div>
              <button className="bg-white text-dark font-bold py-3 rounded-lg hover:bg-neon transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-xs">
            &copy; {currentYear} Aura Audio Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-600 text-xs hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 text-xs hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;