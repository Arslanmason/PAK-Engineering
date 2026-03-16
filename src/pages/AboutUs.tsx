import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Users, History, CheckCircle2, ShieldCheck, Zap, Anchor } from 'lucide-react';
import About from '../components/About';
import MissionValues from '../components/MissionValues';
import CTA from '../components/CTA';

const team = [
  {
    name: 'Engr. Patrick K. Akpobolokemi',
    role: 'Managing Director / CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'With over 30 years of experience in marine engineering, Engr. Patrick leads PAK Engineering with a vision for technical excellence and integrity.'
  },
  {
    name: 'Engr. Samuel O. Adebayo',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'A specialist in ship propulsion systems and structural repairs, overseeing all major technical operations at the Naval Dockyard.'
  },
  {
    name: 'Capt. David Mensah',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    bio: 'Ensuring seamless coordination between vessel owners and our engineering teams for rapid response and project delivery.'
  }
];

const achievements = [
  {
    year: '1995',
    title: 'Company Founded',
    description: 'PAK Engineering was established with a focus on providing specialized marine services in Lagos.'
  },
  {
    year: '2005',
    title: 'Naval Dockyard Partnership',
    description: 'Secured a strategic partnership to operate within the Nigerian Naval Dockyard, Victoria Island.'
  },
  {
    year: '2012',
    title: 'ISO Certification',
    description: 'Achieved international quality management certifications, setting new standards for local engineering.'
  },
  {
    year: '2020',
    title: 'Fleet Expansion',
    description: 'Expanded our service capabilities to include advanced electronic navigation systems and underwater repairs.'
  }
];

export default function AboutUs() {
  return (
    <main className="flex-grow pt-20">
      <Helmet>
        <title>About Us | PAK Engineering</title>
        <meta name="description" content="Learn about PAK Engineering's history, mission, and the values that drive our excellence in marine engineering and ship repair." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80" 
            alt="Marine Engineering Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-pak-blue/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pak-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">About Us</h1>
            <div className="h-1 w-24 bg-pak-red mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <About />

      {/* History Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <History className="text-pak-red" size={20} />
                <span className="text-pak-red text-xs font-bold tracking-[0.4em] uppercase">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-pak-blue mb-8">Decades of <span className="italic font-light">Naval Excellence.</span></h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  PAK Engineering NIG LTD began as a small team of dedicated marine engineers with a singular vision: to provide the Nigerian maritime industry with technical services that match global standards.
                </p>
                <p>
                  Over the years, we have grown from a local service provider to a strategic partner for international shipping lines and the Nigerian Navy. Our history is defined by the complex challenges we've overcome and the long-standing relationships we've built with vessel owners across the globe.
                </p>
                <p>
                  Today, we stand as a symbol of reliability at the heart of Victoria Island, combining traditional engineering craftsmanship with modern technological innovations.
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80" alt="History 1" className="rounded-sm shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1581092921461-eab62e92c859?auto=format&fit=crop&w=600&q=80" alt="History 2" className="rounded-sm shadow-lg" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" alt="History 3" className="rounded-sm shadow-lg" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80" alt="History 4" className="rounded-sm shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pak-gold/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <MissionValues />

      {/* Achievements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-pak-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block">Milestones</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-pak-blue">Our Achievements</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2"></div>

            <div className="space-y-16">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="lg:w-1/2 px-8 text-center lg:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}>
                      <span className="text-3xl font-serif font-bold text-pak-gold mb-2">{achievement.year}</span>
                      <h3 className="text-xl font-bold text-pak-blue mb-4">{achievement.title}</h3>
                      <p className="text-gray-500 max-w-md">{achievement.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center my-8 lg:my-0">
                    <div className="w-12 h-12 bg-pak-blue rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                  </div>

                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-pak-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Users className="text-pak-gold" size={20} />
                <span className="text-pak-gold text-xs font-bold tracking-[0.4em] uppercase">Our Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">The Minds Behind <br /><span className="italic font-light text-gray-400">The Engineering.</span></h2>
            </div>
            <p className="text-gray-400 max-w-sm">
              Our leadership team combines decades of field experience with strategic vision to deliver unparalleled maritime solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-8">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-pak-blue/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-pak-gold text-xs font-bold tracking-widest uppercase mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
