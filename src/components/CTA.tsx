import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-pak-dark">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1541888062835-26a1170b020c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Shipyard at night"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pak-dark via-pak-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-pak-gold"></span>
            <span className="text-pak-gold font-bold uppercase tracking-[0.4em] text-[10px]">Strategic Partnership</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]"
          >
            Ready to Ensure Your Vessel's <br />
            <span className="text-pak-gold italic">Peak Performance?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Partner with PAK Engineering NIG LTD for reliable, efficient, and cost-effective marine engineering solutions. Our experts are ready to assist you 24/7.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8"
          >
            <Link to="/contact" className="group relative px-10 py-5 bg-pak-red text-white font-bold overflow-hidden">
              <span className="relative z-10 flex items-center">
                Request a Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 origin-bottom mix-blend-overlay"></div>
            </Link>
            
            <a href="tel:+2348033338495" className="flex items-center space-x-4 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pak-gold group-hover:border-pak-gold transition-all duration-500">
                <Phone size={20} className="text-pak-gold group-hover:text-pak-dark transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Emergency Support</span>
                <span className="text-white font-bold text-lg">+234 803 333 8495</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
