import { Ship, Wrench, PenTool as Tool, Zap, Shield, Droplets } from 'lucide-react';

export const servicesData = [
  {
    id: 'ship-repair',
    title: 'Ship Repair & Maintenance',
    description: 'Comprehensive repair services for all types of vessels, including hull repairs, machinery overhauls, and electrical systems.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "Our Ship Repair & Maintenance division is the cornerstone of PAK Engineering. We provide end-to-end repair solutions for commercial, naval, and offshore vessels.",
      "With a dedicated team of certified marine engineers and technicians, we handle everything from routine maintenance to complex emergency repairs, ensuring your vessel returns to service with minimal downtime."
    ],
    keyFeatures: [
      "Main and auxiliary engine overhauls",
      "Propulsion system repairs and alignment",
      "Pump and valve maintenance",
      "Hydraulic and pneumatic system troubleshooting"
    ],
    caseStudy: {
      title: "Emergency Engine Overhaul for MV Ocean Voyager",
      description: "The vessel experienced a critical main engine failure while in transit. Our emergency response team was deployed within 4 hours.",
      result: "Complete engine overhaul completed in 12 days, saving the client an estimated $200,000 in potential off-hire costs."
    }
  },
  {
    id: 'dry-docking',
    title: 'Dry Docking',
    description: 'We partner with the Nigerian Naval Dockyard, Victoria Island, Lagos, and other premier dockyards worldwide to provide extensive underwater repairs and inspections.',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "While we do not own a dry dock, PAK Engineering maintains a strategic partnership with the Nigerian Naval Dockyard in Victoria Island, Lagos, where our office is conveniently located. This partnership allows us to offer our clients priority access to state-of-the-art docking facilities.",
      "Our reach extends beyond Lagos; we collaborate with a network of premier dockyards across Nigeria, West Africa, and globally. This enables us to manage the entire dry docking lifecycle for our clients, regardless of their vessel's location, ensuring a seamless experience from planning to execution and undocking."
    ],
    keyFeatures: [
      "Strategic partnership with Nigerian Naval Dockyard, Lagos",
      "Global network of partner dockyards across West Africa and worldwide",
      "Hull cleaning and high-pressure washing",
      "Thickness measurement and steel renewal",
      "Propeller and tail shaft inspections",
      "Sea valve overhauls"
    ],
    caseStudy: {
      title: "Special Survey Dry Docking for MT Sea Guardian",
      description: "A 15-year special survey requiring extensive steel renewal and full hull blasting, executed at our partner facility in Lagos.",
      result: "Successfully renewed 45 tons of steel and completed full silicone coating application ahead of the 21-day schedule."
    }
  },
  {
    id: 'fabrication-engineering',
    title: 'Fabrication & Engineering',
    description: 'Custom steel fabrication, piping systems, and heavy engineering solutions tailored to maritime and industrial requirements.',
    icon: Tool,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "Our fabrication division is equipped to handle complex structural and piping projects for both marine and offshore sectors.",
      "We utilize advanced CAD/CAM technologies and employ certified welders to deliver high-precision components that meet strict classification society standards."
    ],
    keyFeatures: [
      "Custom steel and aluminum fabrication",
      "Pipe spooling and installation (carbon steel, stainless, CuNi)",
      "Offshore skid manufacturing",
      "Structural modifications and upgrades"
    ],
    caseStudy: {
      title: "Helideck Structural Upgrade",
      description: "Client required a structural upgrade of an existing offshore helideck to accommodate heavier helicopters.",
      result: "Fabricated and installed 12 tons of reinforced structural supports with zero safety incidents, fully certified by ABS."
    }
  },
  {
    id: 'electroplating-galvanizing',
    title: 'Electroplating & Galvanizing',
    description: 'Advanced surface protection treatments to prevent corrosion and extend the lifespan of marine components and structures.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535813548-668517f39e63?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "Corrosion is the biggest enemy of marine assets. Our electroplating and galvanizing services provide robust surface protection to significantly extend component lifespans.",
      "We offer a range of protective coatings tailored to the specific environmental conditions your equipment will face, ensuring maximum durability."
    ],
    keyFeatures: [
      "Hot-dip galvanizing for structural members",
      "Hard chrome plating for hydraulic cylinders",
      "Zinc and nickel electroplating",
      "Anodizing for aluminum components"
    ],
    caseStudy: {
      title: "Winch Drum Refurbishment",
      description: "Severely corroded mooring winch drums required restoration to prevent premature wire rope wear.",
      result: "Applied specialized hard chrome plating, restoring the drums to original OEM specifications and extending their life by an estimated 10 years."
    }
  },
  {
    id: 'marine-electronics',
    title: 'Marine Electronics',
    description: 'Installation, repair, and calibration of navigation, communication, and automation systems on board.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "Modern vessels rely heavily on sophisticated electronic systems. Our marine electronics team ensures your navigation, communication, and automation systems are always operating flawlessly.",
      "From retrofitting legacy systems to troubleshooting complex automation faults, our certified technicians provide reliable solutions."
    ],
    keyFeatures: [
      "Radar, ECDIS, and Gyrocompass servicing",
      "GMDSS radio surveys and repairs",
      "Engine alarm and monitoring systems",
      "Vessel automation troubleshooting"
    ],
    caseStudy: {
      title: "Complete Bridge Retrofit",
      description: "An aging offshore supply vessel required a complete upgrade of its navigation and communication suite to meet new regulations.",
      result: "Successfully installed and integrated a modern integrated bridge system (IBS) during a 14-day port stay, passing all class inspections."
    }
  },
  {
    id: 'hull-cleaning-painting',
    title: 'Hull Cleaning & Painting',
    description: 'Professional hydro-blasting, sandblasting, and marine coating applications to optimize vessel performance.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80'
    ],
    detailedDescription: [
      "A clean and well-protected hull is essential for fuel efficiency and structural integrity. We provide comprehensive surface preparation and coating services.",
      "Using environmentally compliant methods, we remove marine growth and old coatings, applying advanced anti-fouling systems to keep your vessel running efficiently."
    ],
    keyFeatures: [
      "Ultra-high-pressure (UHP) hydro-blasting",
      "Abrasive grit blasting (SA 2.5 standard)",
      "Application of advanced anti-fouling coatings",
      "Tank coating and preservation"
    ],
    caseStudy: {
      title: "Fuel Efficiency Optimization via Hull Coating",
      description: "A container ship was experiencing a 15% increase in fuel consumption due to severe hull fouling.",
      result: "Performed full UHP blasting and applied a premium silicone-based foul release coating, resulting in a 12% improvement in fuel efficiency."
    }
  }
];
