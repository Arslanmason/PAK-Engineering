import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowRight, Search, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Vessel Dry Docking & Overhaul',
      category: 'Ship Repair',
      image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Complete dry docking, hull cleaning, and engine overhaul for a commercial cargo vessel.',
    },
    {
      id: 2,
      title: 'Offshore Platform Fabrication',
      category: 'Fabrication',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Custom fabrication of structural steel components for an offshore oil rig.',
    },
    {
      id: 3,
      title: 'Marine Engine Rebuild',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Complete teardown and rebuild of a main propulsion diesel engine.',
    },
    {
      id: 4,
      title: 'Hull Plating Replacement',
      category: 'Ship Repair',
      image: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Extensive steel renewal and hull plating replacement on a tanker vessel.',
    },
    {
      id: 5,
      title: 'Propeller Polishing & Repair',
      category: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Underwater propeller polishing and minor cavitation repair.',
    },
    {
      id: 6,
      title: 'Piping System Upgrade',
      category: 'Engineering',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80',
      description: 'Design and installation of a new ballast water treatment piping system.',
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <main className="flex-grow pt-20">
      <Helmet>
        <title>Marine Engineering Projects | Ship Repair Portfolio | PAK Engineering</title>
        <meta name="description" content="View our portfolio of successful marine engineering and ship repair projects. From engine overhauls to offshore platform fabrication in Nigeria." />
        <meta name="keywords" content="marine projects, ship repair portfolio, vessel overhaul, offshore fabrication, maritime engineering Lagos, ship maintenance case studies" />
      </Helmet>
      
      <div className="bg-pak-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Projects</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">Explore our portfolio of successful marine engineering, ship repair, and fabrication projects.</p>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-pak-red focus:border-pak-red outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pak-red transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-pak-red text-white shadow-md'
                    : 'bg-white text-pak-blue hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-pak-blue/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-pak-gold text-pak-blue font-bold text-xs uppercase tracking-wider py-1 px-3 rounded-full z-20">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-pak-blue mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link to="/contact" className="inline-flex items-center text-pak-red font-semibold hover:text-red-800 transition-colors">
                      Discuss a similar project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No projects found matching your criteria.</p>
              <button 
                onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                className="mt-4 text-pak-red font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
