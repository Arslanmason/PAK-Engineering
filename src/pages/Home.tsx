import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import MissionValues from '../components/MissionValues';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>PAK Engineering | Premier Ship Repair & Marine Solutions</title>
        <meta name="description" content="PAK Engineering NIG LTD delivers world-class marine engineering, ship repair, and fabrication services across Nigeria and West Africa." />
      </Helmet>
      <Hero />
      <Stats />
      <About />
      <MissionValues />
      <Services />
      <Partners />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
