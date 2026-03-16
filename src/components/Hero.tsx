import { ArrowRight, Anchor, Shield, Zap } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-pak-dark">
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Shipyard"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pak-dark/40 via-pak-dark/60 to-pak-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pak-dark via-pak-dark/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/10"
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-pak-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pak-gold"></span>
            </span>
            <span className="text-white/90 text-xs font-mono tracking-[0.2em] uppercase">Precision Engineering Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter"
          >
            MARITIME <br />
            <span className="gold-gradient">MASTERY.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light"
          >
            PAK Engineering delivers world-class marine solutions where technical precision meets uncompromising quality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/services" className="group relative inline-flex items-center justify-center px-10 py-5 bg-pak-red text-white font-bold rounded-sm overflow-hidden transition-all duration-300 hover:bg-red-700 shadow-2xl">
              <span className="relative z-10 flex items-center">
                EXPLORE CAPABILITIES
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            <Link to="/contact" className="group inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-pak-blue transition-all duration-300">
              REQUEST CONSULTATION
            </Link>
          </motion.div>

          {/* Feature Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Anchor className="text-pak-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Naval Dockyard</h4>
                <p className="text-gray-500 text-xs">Strategic VI Location</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="text-pak-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Class Certified</h4>
                <p className="text-gray-500 text-xs">Global Standards</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Zap className="text-pak-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">24/7 Support</h4>
                <p className="text-gray-500 text-xs">Emergency Response</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-pak-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
