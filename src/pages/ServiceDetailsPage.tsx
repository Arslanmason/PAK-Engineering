import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import CTA from '../components/CTA';
import ImageCarousel from '../components/ImageCarousel';
import { motion } from 'framer-motion';

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <main className="flex-grow pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold text-pak-blue mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-pak-red font-semibold hover:underline">
          &larr; Back to Services
        </Link>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="flex-grow pt-20">
      <Helmet>
        <title>{service.title} | Marine Engineering Services | PAK Engineering</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={service.images || [service.image]} altText={service.title} />
          <div className="absolute inset-0 bg-pak-blue/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/services" className="inline-flex items-center text-pak-gold hover:text-white transition-colors mb-8 text-xs font-bold tracking-widest uppercase">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
            </Link>
            <div className="flex items-center space-x-6 mb-6">
              <div className="p-4 bg-pak-red rounded-xl text-white shadow-2xl">
                <Icon size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl font-light leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-pak-blue mb-8 border-b border-gray-100 pb-4">Service Overview</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                  {service.detailedDescription.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif font-bold text-pak-blue mb-8 border-b border-gray-100 pb-4">Key Capabilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-pak-gold/30 transition-colors group">
                      <CheckCircle2 className="text-pak-red h-6 w-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar / Case Study */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-pak-dark text-white rounded-3xl p-10 shadow-2xl sticky top-28 border border-white/5"
              >
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                  <span className="text-pak-gold text-[10px] font-bold tracking-[0.3em] uppercase">Success Story</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-8 border-b border-white/10 pb-6">Featured Case Study</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-pak-gold mb-4 leading-tight">{service.caseStudy.title}</h4>
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">The Challenge</h5>
                    <p className="text-gray-400 font-light leading-relaxed mb-6">{service.caseStudy.description}</p>
                    
                    <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">The Result</h5>
                    <div className="p-4 bg-white/5 border-l-2 border-pak-red rounded-r-lg">
                      <p className="text-white font-medium italic leading-relaxed">{service.caseStudy.result}</p>
                    </div>
                  </div>
                  
                  <Link to="/contact" className="flex items-center justify-between w-full p-4 bg-pak-red hover:bg-red-700 text-white rounded-xl transition-all group">
                    <span className="font-bold text-sm tracking-widest uppercase">Request Similar Service</span>
                    <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

