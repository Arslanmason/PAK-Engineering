import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <main className="flex-grow pt-20">
      <Helmet>
        <title>Marine Engineering Services | Ship Repair & Dry Docking | PAK Engineering</title>
        <meta name="description" content="Professional marine engineering services in Lagos, Nigeria. Specializing in ship repair, dry docking, steel fabrication, and electroplating for the maritime industry." />
        <meta name="keywords" content="marine engineering, ship repair Lagos, dry docking Nigeria, vessel maintenance, steel fabrication maritime, electroplating services" />
      </Helmet>
      <div className="bg-pak-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">Comprehensive marine engineering and ship repair solutions tailored to your needs.</p>
      </div>
      <Services />
    </main>
  );
}
