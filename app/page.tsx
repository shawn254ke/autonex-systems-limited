'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Analytics } from "@vercel/analytics/next"
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import PartnerLogo from './components/PartnerLogo';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeAutomationCarousel from './components/HomeAutomationCarousel';
import { Database, Network, TrendingUp, Home as HomeIcon } from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const coreServices = [
    {
      title: 'Access Control & Parking Management',
      description: 'From attendance tracking to parking management and secure room access, our custom access control solutions bring everything together in one place..',
      icon: <Database size={24} />,
      link: '/services#access-control',
      color: 'blue' as const,
    },
    {
      title: 'Industrial IoT Solutions',
      description: 'Connect your industrial equipment with advanced sensors and real-time monitoring systems for improved efficiency.',
      icon: <Network size={24} />,
      link: '/services#iiot',
      color: 'orange' as const,
    },
    {
      title: 'Home Automation',
      description: 'Upgrade your home with smart gates, security systems, and automated solutions for modern living.',
      icon: <HomeIcon size={24} />,
      link: '/services#homeauto',
      color: 'gradient' as const,
    },
    {
      title: 'Industry 4.0 Transformation',
      description: 'Transform your production facilities with smart manufacturing technologies, automation, and digital integration.',
      icon: <TrendingUp size={24} />,
      link: '/services#industry40',
      color: 'blue' as const,
    }
    ,
  ];

  const testimonials = [
    {
      quote: 'The IIoT implementation led by Autonex reduced our downtime by 37% and improved overall equipment efficiency significantly. Their expertise was invaluable.',
      author: 'Sarah Mburu',
      position: 'Operations Director',
      company: 'Global Manufacturing Inc.',
    },
    {
      quote: 'We were struggling with data integration until Autonex stepped in. Their custom solution has transformed how we make decisions and improved productivity.',
      author: 'Michael Chen',
      position: 'CTO',
      company: 'Precision Industries',
    },
    {
      quote: 'The Industry 4.0 roadmap they created for us was comprehensive and realistic. We\'re now well on our way to becoming a truly connected smart factory.',
      author: 'Rishan Gemba',
      position: 'Plant Manager',
      company: 'Spies World',
    },
  ];

  const partners = [
    { name: 'Tech Innovators', logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Tech+Innovators' },
    { name: 'Global Systems', logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Global+Systems' },
    { name: 'Future Manufacturing', logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Future+Manufacturing' },
    { name: 'Smart Solutions', logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Smart+Solutions' },
    { name: 'Industrial Edge', logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Industrial+Edge' },
  ];

  return (
    <>
      <Header />
       <Analytics />
      {/* Hero Section */}
      <Hero
        title="Where Smart Systems Begin"
        subtitle="We specialize in Access Control, Parking Management, Industrial automation, industrial IoT solutions, and smart technology integration that help transform how you live and work."
        primaryAction={{ text: 'Explore Parking Management', href: '/services#access-control' }}
        secondaryAction={{ text: 'Request a Quote', href: '/inquiry' }}
        tertiaryAction={{ text: 'Explore Our Services', href: '/services' }}
        backgroundImages={["https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&w=2000&q=80",
           "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&w=2000&q=80"]}  
        backgroundSlides={[
    { type: 'image', src: '/images/boom.jpg' },
    { type: 'video', src: '/videos/accesscontrol1.mp4' },
    { type: 'image', src: '/images/centurion boom.jpeg' },
    { type: 'video', src: '/videos/industrial automation.mp4' },
    { type: 'image', src: '/images/parking management.jpg'}
  ]}
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto">
              We provide comprehensive solutions to help your business and home navigate the complexities of modern technology and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                color={service.color}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/catalog" className="btn-accent">
              Home Automation Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Home Automation Carousel */}
      <section className="py-12 bg-brand-gray-100">
        <HomeAutomationCarousel />
      </section>

      {/* About / CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-white mb-4">Your Partner in Industrial Digital Evolution</h2>
            <p className="text-white/80 mb-6">
              With years of experience in industrial settings and cutting-edge technology expertise, we help companies navigate the complexities of modern digital transformation, turning challenges into growth opportunities.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Proven track record with industry leaders',
                'Customized solutions for your specific challenges',
                'End-to-end service from planning to implementation',
                'Ongoing support and optimization',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-brand-orange mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-accent">
              Learn More About Us
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Industrial technology" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-gray-100">
        <div className="container mx-auto text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto mb-12">
            We've helped numerous companies achieve their digital transformation goals. Here's what they have to say about working with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Trusted By */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="mb-4">Trusted By Industry Leaders</h2>
          <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto mb-12">
            We're proud to work with forward-thinking companies across multiple industrial sectors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <PartnerLogo key={index} name={partner.name} logo={partner.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-linear-to-r from-brand-blue to-brand-blue/80 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Home or Business?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project or request a custom quote tailored to your specific needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-accent">
              Contact Us
            </Link>
            <Link href="/inquiry" className="bg-white text-brand-blue hover:bg-white/90 font-medium py-3 px-6 rounded-md transition-all duration-200">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Index;
