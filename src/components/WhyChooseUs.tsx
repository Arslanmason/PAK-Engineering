import { ShieldCheck, Clock, Wrench, Award, Anchor, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock availability for urgent marine repairs and critical maintenance to minimize vessel downtime.'
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Our team consists of highly trained, certified engineers and technicians with decades of maritime experience.'
  },
  {
    icon: Wrench,
    title: 'Advanced Facilities',
    description: 'Equipped with state-of-the-art tools and dry docking capabilities to handle vessels of various sizes.'
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Safety',
    description: 'Strict adherence to international maritime safety standards and environmental compliance in all our operations.'
  },
  {
    icon: Zap,
    title: 'Efficient & Cost-Effective',
    description: 'Streamlined processes that deliver high-quality results on time and within budget, maximizing your ROI.'
  },
  {
    icon: Anchor,
    title: 'Indigenous Expertise',
    description: 'Deep understanding of the West African maritime landscape, providing localized solutions with global standards.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-gray-50/50 pointer-events-none select-none z-0">
        EXCELLENCE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-pak-red/20 rounded-full mb-6"
          >
            <span className="text-pak-red font-bold uppercase tracking-[0.3em] text-[10px]">Why Choose Us</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-pak-blue mb-8 tracking-tight"
          >
            The PAK Engineering Advantage
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed font-light"
          >
            We stand out in the maritime industry through our unwavering commitment to quality, safety, and client satisfaction, delivering excellence across every project.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-10 rounded-3xl border border-gray-100 bg-white hover:border-pak-gold/30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 relative overflow-hidden"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-pak-dark text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pak-red transition-all duration-500 transform group-hover:-translate-y-2"
                >
                  <Icon size={24} className="group-hover:text-pak-gold transition-colors duration-500" />
                </motion.div>
                
                <h4 className="text-2xl font-serif font-bold text-pak-blue mb-4 group-hover:text-pak-red transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
                
                {/* Subtle index number */}
                <span className="absolute top-8 right-8 text-4xl font-serif font-bold text-gray-50 group-hover:text-pak-gold/10 transition-colors duration-500">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
