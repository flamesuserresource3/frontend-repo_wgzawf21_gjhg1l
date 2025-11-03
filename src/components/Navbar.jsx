import { useState, useEffect } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-red-500 to-rose-400 text-white grid place-items-center">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">ClearPath</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#clients" className="hover:text-gray-900 transition-colors">Clients</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-300/70 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors">
              Learn more
            </button>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black transition-colors"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
