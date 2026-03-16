import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, Compass, Anchor, Award } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Precision',
    description: 'We believe in the power of the millimeter. Every weld, every circuit, and every engine tune is executed with absolute accuracy.',
    color: 'text-pak-gold'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'Our reputation is built on transparency. We provide honest assessments and deliver on our promises without compromise.',
    color: 'text-pak-red'
  },
  {
    icon: Anchor,
    title: 'Safety',
    description: 'In the maritime world, safety is the foundation of every operation. We adhere to the highest global safety standards.',
    color: 'text-pak-blue'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring that our engineering solutions exceed industry benchmarks.',
    color: 'text-pak-gold'
  }
];

export default function MissionValues() {
  return (
    <section className="py-32 bg-pak-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Mission Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <Target className="text-pak-gold" size={20} />
              <span className="text-pak-gold text-xs font-bold tracking-[0.4em] uppercase">Our Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
              Empowering the <br />
              <span className="italic font-light text-gray-400">Maritime Industry.</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
              To deliver world-class marine engineering solutions through technical excellence, safety, and unwavering integrity, empowering the maritime industry in West Africa and beyond.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-2">01.</div>
                <h4 className="text-pak-gold font-bold text-sm uppercase tracking-widest mb-4">Vision</h4>
                <p className="text-gray-500 text-sm leading-relaxed">To be the most trusted engineering partner for global vessel owners operating in African waters.</p>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-white mb-2">02.</div>
                <h4 className="text-pak-gold font-bold text-sm uppercase tracking-widest mb-4">Commitment</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Uninterrupted operational continuity for our clients through rapid response and precision repair.</p>
              </div>
            </div>
          </motion.div>

          {/* Values Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 bg-white/[0.03] border border-white/10 rounded-sm hover:bg-white/[0.05] hover:border-white/20 transition-all group"
              >
                <value.icon className={`${value.color} mb-6 group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-xl font-serif font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
