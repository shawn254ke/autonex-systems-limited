'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesGrid from '../components/ServicesGrid';
import ImageSlider from '../components/ImageSlider';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'industry40', label: 'Industry 4.0' },
    { id: 'iiot', label: 'IIoT Solutions' },
    { id: 'it', label: 'IT Services' },
    { id: 'homeauto', label: 'Home Automation' }
  ];

  // Handle scroll to section on page load or hash change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-brand-gray-600">
              Comprehensive Industry 4.0, IIoT, IT, and Home Automation solutions tailored to transform your operations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <ServicesGrid category={activeCategory as any} useContactUs={true} />
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section id="industry40" className="py-16 bg-brand-gray-100">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-medium mb-4">
              Industry 4.0
            </span>
            <h2 className="mb-4">Transform Your Manufacturing with Industry 4.0</h2>
            <p className="text-lg text-brand-gray-600">
              Our Industry 4.0 solutions bridge the gap between physical manufacturing and digital technologies, creating smarter, more efficient operations.
            </p>
            <div className="space-y-6 mt-6">
              {[
                'Smart Factory Implementation: Connected environment with end-to-end visibility.',
                'Automation Solutions: Streamline operations and reduce manual interventions.',
                'Predictive Maintenance: Minimize downtime with early failure detection.',
                'Digital Twins: Simulate and optimize system performance virtually.'
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-brand-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Smart factory"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* IIoT Section */}
      <section id="iiot" className="py-16 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Industrial IoT"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-medium mb-4">
              IIoT Solutions
            </span>
            <h2 className="mb-4">Connect Your Industrial Operations</h2>
            <p className="text-lg text-brand-gray-600">
              Our IIoT solutions collect real-time data, providing actionable insights for smarter decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section id="it" className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full font-medium mb-4">
            Custom IT Solutions
          </span>
          <h2 className="text-white mb-4">Tailored IT Services for Industry</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            Custom software, cybersecurity, cloud integration, and data analytics for industrial digital transformation.
          </p>
        </div>
      </section>

      {/* Home Automation Section */}
      <section id="homeauto" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-medium mb-4">
                  Home Automation
                </span>
                <h2 className="mb-4">Smart Home & Gate Automation Solutions</h2>
                <p className="text-lg text-brand-gray-600">
                  Our home automation services focus on making your property smarter, more secure, and convenient with state-of-the-art gate automation systems.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Centurion Gate Systems',
                    description: 'Professional installation and servicing of Centurion D5 Smart and EVO D5 for sliding and swing gates.'
                  },
                  {
                    title: 'Remote Controls',
                    description: 'Supply of 4-channel and 1-channel remotes with programming and synchronization services.'
                  },
                  {
                    title: 'Security Solutions',
                    description: 'GLX 900 Lockers and integrated security systems for complete property protection.'
                  },
                  {
                    title: 'Maintenance Services',
                    description: 'Regular maintenance and emergency repair services to keep your systems running smoothly.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-brand-gray-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">{item.title}</h3>
                    <p className="text-brand-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageSlider
                images={[
                  {
                    src: '/images/Centurion Gate.png',
                    alt: 'Automated gate system'
                  },
                  {
                    src: '/images/alarm.png',
                    alt: 'Alarm system control'
                  },
                  {
                    src: '/images/Home automation.png',
                    alt: 'home automation'
                  }
                ]}
                autoPlay={true}
                intervalMs={5000}
                showControls={true}
              />
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="bg-brand-orange text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-80">Support & Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-brand-blue to-brand-blue/80 text-white text-center">
        <h2 className="text-white mb-6">Ready to Start Your Digital Transformation?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Contact us today to discuss your project or request a detailed quote tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn-accent">Contact Us</Link>
          <Link href="/inquiry" className="bg-white text-brand-blue hover:bg-white/90 font-medium py-3 px-6 rounded-md transition-all duration-200">
            Request a Quote
          </Link>
        </div>
      </section>

      
    </>
  );
};

export default Services;
