import { Menu, X, Phone, Mail, MapPin, Search, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import Auth from './Auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const location = useLocation();

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ZH', name: '中文' },
    { code: 'ES', name: 'Español' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    const baseClass = "text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group";
    const activeClass = "text-pak-gold";
    const inactiveClass = scrolled ? "text-pak-blue hover:text-pak-red" : "text-white hover:text-pak-gold";
    
    const current = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
    
    return `${baseClass} ${current ? activeClass : inactiveClass}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      {/* Top Bar - Only visible when not scrolled or on mobile */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-mono tracking-widest text-white/60">
            <div className="flex space-x-4 xl:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone size={12} className="text-pak-gold" />
                <span className="hidden xl:inline">+234 803 333 8495 / +234 802 037 6918</span>
                <span className="xl:hidden">+234 803 333 8495</span>
              </div>
              <div className="hidden xl:flex items-center space-x-2">
                <Mail size={12} className="text-pak-gold" />
                <span>PAKENGINEERINGLTD@GMAIL.COM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 xl:space-x-6">
              <div className="hidden md:flex items-center space-x-2 uppercase">
                <MapPin size={12} className="text-pak-gold" />
                <span>Naval Dockyard 28, VI, Lagos</span>
              </div>
              
              <Auth />

              {/* Language Switcher Desktop */}
              <div className="relative">
                <button 
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center space-x-2 hover:text-pak-gold transition-colors"
                >
                  <Globe size={12} className="text-pak-gold" />
                  <span>{currentLang}</span>
                  <ChevronDown size={10} className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-32 bg-pak-dark border border-white/10 shadow-xl z-[110]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLang(lang.code);
                            setLangOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-[10px] hover:bg-white/5 hover:text-pak-gold transition-colors"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className={`transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <div className="relative">
                <div className="w-12 h-12 bg-white p-1.5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 rounded-lg shadow-xl">
                  <img src="/logo.svg" alt="PAK Engineering" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -inset-1 border border-pak-gold/20 rounded-lg group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl xl:text-2xl tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-pak-blue' : 'text-white'}`}>
                PAK ENGINEERING
              </span>
              <span className="text-pak-gold text-[8px] xl:text-[9px] font-mono font-bold tracking-[0.3em] xl:tracking-[0.4em] uppercase">Maritime Excellence</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {['Home', 'About', 'Services', 'Projects', 'Design-Lab', 'Contact'].map((item) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              return (
                <Link key={item} to={path} className={isActive(path)}>
                  {item.replace('-', ' ')}
                  <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-pak-gold transition-all duration-300 group-hover:w-full ${location.pathname === path ? 'w-full' : ''}`}></span>
                </Link>
              );
            })}
            
            <div className="h-4 w-[1px] bg-gray-300/30 mx-1 xl:mx-2"></div>
            
            <button className={`${scrolled ? 'text-pak-blue' : 'text-white'} hover:text-pak-gold transition-colors`}>
              <Search size={18} />
            </button>
 
            <Link to="/contact" className="relative overflow-hidden px-5 xl:px-8 py-3 bg-pak-red text-white text-xs font-bold tracking-widest uppercase group">
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-pak-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language Switcher Mobile */}
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center space-x-1 text-xs font-bold tracking-widest ${scrolled ? 'text-pak-blue' : 'text-white'}`}
            >
              <Globe size={16} className="text-pak-gold" />
              <span>{currentLang}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${scrolled ? 'text-pak-blue' : 'text-white'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-pak-dark lg:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/5">
              <span className="text-white font-serif font-bold text-xl">PAK ENGINEERING</span>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center space-y-8 p-10">
              {['Home', 'About', 'Services', 'Projects', 'Design-Lab', 'Contact'].map((item, idx) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link 
                      to={path} 
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif font-bold text-white hover:text-pak-gold transition-colors"
                    >
                      {item.replace('-', ' ')}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <div className="p-10 border-t border-white/5 space-y-6">
              <div className="flex flex-col space-y-4 text-gray-400">
                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-pak-gold" />
                  <span>+234 803 333 8495</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-pak-gold" />
                  <span>+234 802 037 6918</span>
                </div>
              </div>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full py-5 bg-pak-red text-white text-center font-bold tracking-widest uppercase">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
