import { MapPin, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState, Suspense, lazy } from 'react';

// Lazy load the map to avoid potential issues with Leaflet and SSR/initial load
const Map = lazy(() => import('../components/Map'));

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const officePosition: [number, number] = [6.4275, 3.4050];
  const officeAddress = "Naval Dockyard 28, Ahmadu Bello Way, Victoria Island, Lagos, Nigeria";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Simulated submission since Formspree setup is skipped
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="flex-grow pt-20">
      <Helmet>
        <title>Contact Us | Marine Engineering Support | PAK Engineering</title>
        <meta name="description" content="Get in touch with PAK Engineering for expert marine engineering inquiries, quotes, or emergency ship repair support in Victoria Island, Lagos." />
        <meta name="keywords" content="contact marine engineers, ship repair quote, maritime support Lagos, PAK Engineering contact, marine engineering inquiries Nigeria" />
      </Helmet>
      <div className="bg-pak-blue text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">Get in touch with our team for inquiries, quotes, or emergency support.</p>
      </div>
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-serif font-bold text-pak-blue mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you need routine maintenance, emergency repairs, or a comprehensive fabrication project, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-pak-red mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">Head Office</h3>
                    <p className="text-gray-600">{officeAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-pak-red mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+234 803 333 8495<br />+234 802 037 6918</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-pak-red mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">pakengineeringltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-pak-blue mb-6">Send a Message</h3>
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md border border-green-200">
                  Thank you for your message! We will get back to you shortly.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md border border-red-200">
                  {submitError}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pak-red focus:border-pak-red" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pak-red focus:border-pak-red" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pak-red focus:border-pak-red" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" required value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pak-red focus:border-pak-red" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-pak-red text-white font-bold py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full">
            <h2 className="text-3xl font-serif font-bold text-pak-blue mb-8 text-center">Find Us</h2>
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <Suspense fallback={<div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center text-gray-400">Loading interactive map...</div>}>
                <Map position={officePosition} address={officeAddress} />
              </Suspense>
            </div>
            <div className="mt-6 text-center">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pak-red hover:text-pak-blue font-bold transition-colors inline-flex items-center"
              >
                Open in Google Maps
                <MapPin size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

