import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-pak-dark text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pak-gold rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <div className="w-12 h-12 bg-white p-1.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg shadow-xl">
                <img src="/logo.svg" alt="PAK Engineering" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-2xl tracking-tighter leading-none">PAK ENGINEERING</span>
                <span className="text-pak-gold text-[9px] font-mono font-bold tracking-[0.4em] uppercase">Maritime Excellence</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-sm font-light">
              Pioneering maritime engineering excellence through technical precision, strategic partnerships, and a legacy of uncompromising quality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-pak-red hover:border-pak-red transition-all duration-300 group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-pak-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Design-Lab', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 h-[1px] bg-pak-gold mr-0 group-hover:w-4 group-hover:mr-3 transition-all"></span>
                    {item.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-pak-gold mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Ship Repair', 'Dry Docking', 'Engineering', 'Fabrication', 'Electroplating'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center group">
                    <span className="w-0 h-[1px] bg-pak-gold mr-0 group-hover:w-4 group-hover:mr-3 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-pak-gold mb-8">Global Headquarters</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-pak-red mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Naval Dockyard 28, Ahmadu Bello Way,<br />
                  Victoria Island, Lagos, Nigeria
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-pak-red flex-shrink-0" size={20} />
                  <p className="text-gray-400 text-sm">+234 803 333 8495</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-pak-red flex-shrink-0" size={20} />
                  <p className="text-gray-400 text-sm">+234 802 037 6918</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-pak-red flex-shrink-0" size={20} />
                <p className="text-gray-400 text-sm">pakengineeringltd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} PAK Engineering NIG LTD. <span className="mx-2">|</span> Crafted for Excellence
          </p>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pak-red hover:border-pak-red transition-all duration-500 group"
            >
              <ArrowUp size={20} className="text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
