import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" 
                  alt="Marine Engineering Excellence" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-pak-blue/10 mix-blend-overlay"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-10 -right-10 bg-pak-red p-8 text-white shadow-2xl hidden md:block"
              >
                <div className="text-5xl font-serif font-bold mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Years of Mastery</div>
              </motion.div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-pak-blue/5 rounded-full blur-3xl -z-0"></div>
            <div className="absolute top-1/2 -right-20 w-40 h-40 border border-pak-gold/20 rounded-full -z-0 animate-float"></div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-[1px] w-12 bg-pak-red"></div>
                <span className="text-pak-red text-xs font-bold tracking-[0.4em] uppercase">The Legacy of PAK</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-pak-blue mb-10 leading-[1.1]">
                Engineering the <br />
                <span className="italic font-light">Future of Maritime.</span>
              </h2>
              
              <div className="space-y-8 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  Founded on the principles of technical precision and unwavering integrity, PAK Engineering NIG LTD has emerged as a cornerstone of the West African maritime sector.
                </p>
                <p>
                  Operating from our strategic base at the Nigerian Naval Dockyard in Victoria Island, we bridge the gap between complex engineering challenges and seamless operational continuity. Our team of elite engineers brings decades of collective experience to every hull, engine, and electronic system we touch.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="group">
                  <h4 className="text-pak-blue font-bold text-lg mb-3 flex items-center">
                    <span className="w-2 h-2 bg-pak-gold rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    Strategic Location
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Direct access to premier docking facilities at the Naval Dockyard, Lagos.</p>
                </div>
                <div className="group">
                  <h4 className="text-pak-blue font-bold text-lg mb-3 flex items-center">
                    <span className="w-2 h-2 bg-pak-gold rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    Elite Expertise
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">A multidisciplinary team certified by major global classification societies.</p>
                </div>
              </div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="mt-16"
              >
                <Link to="/about" className="inline-flex items-center text-pak-blue font-bold text-sm tracking-widest uppercase group">
                  Discover Our Story
                  <span className="ml-4 h-[1px] w-12 bg-pak-blue group-hover:w-20 transition-all"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
