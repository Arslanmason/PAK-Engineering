import { Anchor, Wrench, ShieldCheck, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { id: 1, name: 'Ships Serviced Annually', value: 30, suffix: '+', icon: Anchor },
  { id: 2, name: 'Active Marine Projects', value: 5, suffix: '+', icon: Wrench },
  { id: 3, name: 'Years of Excellence', value: 30, suffix: '+', icon: ShieldCheck },
  { id: 4, name: 'Expert Engineers', value: 20, suffix: '+', icon: Users },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-pak-blue/5 rounded-full flex items-center justify-center group-hover:bg-pak-blue transition-colors duration-500">
                      <Icon size={28} className="text-pak-blue group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="absolute -inset-2 border border-pak-gold/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  </div>
                  
                  <div className="text-5xl font-serif font-bold text-pak-blue mb-2 flex items-baseline">
                    <Counter value={stat.value} />
                    <span className="text-pak-gold ml-1">{stat.suffix}</span>
                  </div>
                  
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-pak-red transition-colors duration-300">
                    {stat.name}
                  </p>
                </div>
                
                {/* Decorative Line */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gray-100"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
