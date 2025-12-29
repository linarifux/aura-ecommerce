import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine, RiSubtractLine, RiQuestionLine } from "react-icons/ri";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-white/10 last:border-none"
    >
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-neon" : "text-white group-hover:text-neon"}`}>
          {question}
        </span>
        <span className={`p-2 rounded-full border transition-colors ${isOpen ? "border-neon text-neon bg-neon/10" : "border-white/20 text-gray-400 group-hover:border-white group-hover:text-white"}`}>
          {isOpen ? <RiSubtractLine /> : <RiAddLine />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base pr-4 md:pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      category: "Shipping & Delivery",
      items: [
        {
          q: "How long does shipping take?",
          a: "Domestic orders typically arrive within 2-4 business days via our express courier partners. International shipping ranges from 5-10 business days depending on customs clearance."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes, we ship to over 80 countries worldwide. Shipping costs are calculated at checkout based on your location and the weight of your order."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you will receive a confirmation email containing a tracking link. You can also view real-time updates in your account dashboard."
        }
      ]
    },
    {
      category: "Product & Warranty",
      items: [
        {
          q: "What is the warranty period?",
          a: "All AURA products come with a comprehensive 2-year warranty covering manufacturing defects and hardware malfunctions. Accidental damage is not covered."
        },
        {
          q: "Are the headphones water-resistant?",
          a: "The Aura Buds Pro and Aura Pulse feature IPX4 and IPX7 ratings respectively, making them sweat and rain resistant. The Aura One is designed for studio/home use and should be kept dry."
        },
        {
          q: "Can I connect to multiple devices?",
          a: "Yes, all our Bluetooth 5.3 enabled devices support Multipoint connection, allowing you to pair with your phone and laptop simultaneously."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      items: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day money-back guarantee. If you are not completely satisfied with your audio experience, you can return the product in its original condition for a full refund."
        },
        {
          q: "How do I initiate a return?",
          a: "Simply contact our support team at hello@aura.audio with your order number. We will provide a prepaid shipping label and instructions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/5 rounded-full border border-white/10 text-neon">
            <RiQuestionLine size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="text-neon">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our products, shipping, and warranty.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-surface border border-white/10 rounded-3xl p-8">
              <h2 className="text-neon font-mono text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {section.category}
              </h2>
              
              <div>
                {section.items.map((item, index) => {
                  // Calculate a unique index for the entire list to handle opening logic
                  const uniqueIndex = (sectionIndex * 10) + index;
                  return (
                    <FAQItem 
                      key={index}
                      question={item.q}
                      answer={item.a}
                      isOpen={openIndex === uniqueIndex}
                      onClick={() => setOpenIndex(openIndex === uniqueIndex ? -1 : uniqueIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;