import { motion } from 'framer-motion';

const partners = [
  { name: 'Nigerian Navy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ensign_of_the_Nigerian_Navy.svg/1200px-Ensign_of_the_Nigerian_Navy.svg.png', url: 'https://navy.mil.ng/' },
  { name: 'NIMASA', logo: 'https://nimasa.gov.ng/wp-content/uploads/2020/06/nimasa-logo.png', url: 'https://nimasa.gov.ng/' },
  { name: 'Shell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png', url: 'https://www.shell.com.ng/' },
  { name: 'Chevron', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png', url: 'https://www.chevron.com/' },
  { name: 'TotalEnergies', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/TotalEnergies_logo.svg/1200px-TotalEnergies_logo.svg.png', url: 'https://totalenergies.ng/' },
  { name: 'ExxonMobil', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Exxon_Mobil_Logo.svg/1200px-Exxon_Mobil_Logo.svg.png', url: 'https://corporate.exxonmobil.com/locations/nigeria' },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-pak-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Trusted By Industry Leaders</span>
          <h2 className="text-3xl font-serif font-bold text-pak-blue">Strategic Partnerships</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex justify-center"
            >
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-16 w-full max-w-[140px] flex items-center justify-center group cursor-pointer"
                title={`Visit ${partner.name} official website`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500 transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
