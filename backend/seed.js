require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db"); 
const Product = require("./models/Product");

const products = [
  // --- ORIGINAL 3 ---
  {
    id: "aura-one",
    name: "Aura One",
    price: 299,
    category: "Over-Ear",
    image: "https://pngimg.com/d/headphones_PNG101984.png",
    rating: 4.9,
    description: "The flagship experience. Aura One combines studio-grade fidelity with industry-leading active noise cancellation. Immerse yourself in the sound of silence.",
    specs: ["40mm Beryllium Drivers", "30h Battery Life", "Hybrid ANC", "Bluetooth 5.3"],
    colors: ["#0a0a0a", "#e5e5e5", "#00f3ff"],
  },
  {
    id: "aura-buds",
    name: "Aura Buds Pro",
    price: 149,
    category: "In-Ear",
    image: "https://parspng.com/wp-content/uploads/2022/10/headphonespng.parspng.com-6.png",
    rating: 4.8,
    description: "Small size, massive sound. The Aura Buds Pro feature adaptive transparency mode and a fit so comfortable you'll forget you're wearing them.",
    specs: ["11mm Dynamic Drivers", "24h Battery (with Case)", "IPX4 Water Resistant", "Transparency Mode"],
    colors: ["#ffffff", "#0a0a0a"],
  },
  {
    id: "aura-pulse",
    name: "Aura Pulse",
    price: 199,
    category: "Sport",
    image: "https://pngimg.com/d/headphones_PNG7645.png",
    rating: 4.7,
    description: "Built for movement. Secure-fit earhooks and sweat resistance make the Aura Pulse your perfect workout companion.",
    specs: ["Bone Conduction Tech", "12h Battery", "IPX7 Waterproof", "Shockproof"],
    colors: ["#00f3ff", "#ff0055"],
  },

  // --- 10 NEW PRODUCTS ---
  {
    id: "aura-gamer-x",
    name: "Aura Gamer X",
    price: 249,
    category: "Gaming",
    image: "https://pngimg.com/d/headphones_PNG101929.png", 
    rating: 4.6,
    description: "Dominate the leaderboard with 3D Spatial Audio and a broadcast-quality boom mic. The Gamer X highlights every footstep and reload sound.",
    specs: ["7.1 Surround Sound", "RGB Lighting", "Retractable Mic", "Low Latency Dongle"],
    colors: ["#00f3ff", "#ff0000", "#0a0a0a"],
  },
  {
    id: "aura-studio-max",
    name: "Aura Studio Max",
    price: 499,
    category: "Studio",
    image: "https://pngimg.com/d/headphones_PNG101956.png",
    rating: 5.0,
    description: "For the audiophile who demands perfection. Open-back architecture provides a soundstage so wide you will feel like you are in the room with the artist.",
    specs: ["50mm Planar Magnetic", "Open-Back Design", "Gold-Plated Jack", "Velour Earcups"],
    colors: ["#333333", "#5c4033"],
  },
  {
    id: "aura-boom",
    name: "Aura Boom",
    price: 129,
    category: "Speakers",
    image: "https://pngimg.com/d/wireless_speaker_PNG27.png",
    rating: 4.5,
    description: "360-degree sound in a package that fits in your hand. The Aura Boom is waterproof, dustproof, and ready for any adventure.",
    specs: ["360° Audio", "IP67 Waterproof", "15h Playtime", "PartyBoost Pair"],
    colors: ["#0a0a0a", "#0000ff", "#ff0000"],
  },
  {
    id: "aura-silent-pro",
    name: "Silent Pro",
    price: 349,
    category: "Travel",
    image: "https://pngimg.com/d/headphones_PNG101966.png",
    rating: 4.8,
    description: "Designed for the frequent flyer. Our best-in-class noise cancellation blocks out jet engines and office chatter effectively.",
    specs: ["Adaptive ANC 2.0", "40h Battery", "Foldable Design", "Flight Adapter"],
    colors: ["#1a1a1a", "#cccccc"],
  },
  {
    id: "aura-pods-lite",
    name: "Aura Pods Lite",
    price: 79,
    category: "In-Ear",
    image: "https://pngimg.com/d/headphones_PNG101991.png",
    rating: 4.4,
    description: "Essential sound, stripped of the unnecessary. The Pods Lite offer punchy bass and crystal clear vocals in our smallest form factor yet.",
    specs: ["Touch Controls", "18h Battery", "USB-C Charging", "Voice Assistant"],
    colors: ["#ffffff", "#ffc0cb", "#0a0a0a"],
  },
  {
    id: "aura-bass-cannon",
    name: "Bass Cannon",
    price: 229,
    category: "Over-Ear",
    image: "https://pngimg.com/d/headphones_PNG101931.png",
    rating: 4.6,
    description: "Feel the drop. With haptic bass technology, these headphones physically vibrate with the low frequencies for a club-like experience.",
    specs: ["Haptic Bass Drivers", "Custom EQ App", "50h Battery", "Memory Foam"],
    colors: ["#0a0a0a", "#2a2a40"],
  },
  {
    id: "aura-soundbar",
    name: "Aura Cinema",
    price: 599,
    category: "Home Audio",
    image: "https://pngimg.com/d/audio_speakers_PNG11145.png",
    rating: 4.9,
    description: "Transform your living room into a theater. This sleek soundbar delivers Dolby Atmos height effects without needing ceiling speakers.",
    specs: ["Dolby Atmos", "Wireless Subwoofer", "HDMI eARC", "AirPlay 2"],
    colors: ["#0a0a0a"],
  },
  {
    id: "aura-neckband",
    name: "Aura Flex",
    price: 99,
    category: "Sport",
    image: "https://pngimg.com/d/headphones_PNG101988.png",
    rating: 4.3,
    description: "Never lose an earbud again. The magnetic neckband keeps your music secure during the most intense HIIT workouts.",
    specs: ["Magnetic Earbuds", "12h Battery", "IPX5 Sweatproof", "Fast Charge"],
    colors: ["#00f3ff", "#0a0a0a"],
  },
  {
    id: "aura-retro",
    name: "Aura Classic",
    price: 199,
    category: "Style",
    image: "https://pngimg.com/d/headphones_PNG101924.png",
    rating: 4.7,
    description: "Vintage aesthetics meet modern tech. Genuine leather, brushed aluminum, and rich analog-tuned sound.",
    specs: ["Leather Headband", "40mm Drivers", "Wired/Wireless", "aptX HD"],
    colors: ["#8b4513", "#0a0a0a"],
  },
  {
    id: "aura-tower",
    name: "Aura Party Tower",
    price: 399,
    category: "Speakers",
    image: "https://pngimg.com/d/audio_speakers_PNG11108.png",
    rating: 4.5,
    description: "Bring the festival home. Massive sound pressure, synchronized LED light shows, and a mic input for karaoke night.",
    specs: ["1000W Peak Power", "LED Light Show", "Mic/Guitar Input", "Wheels"],
    colors: ["#0a0a0a"],
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    
    await Product.deleteMany({});
    console.log("Old data cleared.");

    await Product.insertMany(products);
    console.log(`Successfully imported ${products.length} products!`);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();