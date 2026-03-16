import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
import { servicesData } from '../data/services';
import ImageCarousel from './ImageCarousel';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-pak-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pak-blue rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pak-red rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <span className="text-pak-gold text-[10px] font-bold tracking-[0.5em] uppercase">Our Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
          >
            Precision <span className="italic font-light">Engineering.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            From emergency repairs to complex structural fabrication, we provide a full spectrum of maritime engineering services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={`/services/${service.id}`} className="block h-full">
                  <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-pak-gold/30">
                    <div className="relative h-64 overflow-hidden">
                      <ImageCarousel images={service.images || [service.image]} altText={service.title} />
                      <div className="absolute inset-0 bg-pak-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <div className="absolute bottom-0 left-0 bg-pak-red text-white p-4 z-20">
                        <Icon size={24} />
                      </div>
                    </div>

                    <div className="p-10 relative z-10">
                      <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-pak-gold transition-colors duration-500">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-8 line-clamp-3 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-pak-gold text-xs font-bold tracking-widest uppercase">
                        View Details
                        <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-pak-gold transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link to="/services" className="inline-flex items-center space-x-4 text-white group">
            <span className="text-sm font-bold tracking-[0.3em] uppercase">View All Services</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-pak-blue transition-all duration-500">
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
