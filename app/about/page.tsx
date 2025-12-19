'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

const About = () => {

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  // Company milestones/timeline
  const milestones = [
    { year: 2015, title: 'Company Founded', description: 'Autonex was established with a vision to bridge the gap between industrial operations and cutting-edge technology.' },
    { year: 2016, title: 'First Major Client', description: 'Successfully implemented our first large-scale IIoT solution for a manufacturing client, reducing their operational costs by 23%.' },
    { year: 2018, title: 'Team Expansion', description: 'Expanded our team of experts to include specialists in data science, cybersecurity, and industrial automation.' },
    { year: 2020, title: 'International Projects', description: 'Began working with international clients, expanding our reach and expertise to global manufacturing settings.' },
    { year: 2023, title: 'Innovation Lab Launch', description: 'Opened our Industry 4.0 Innovation Lab, creating a space for R&D, client demonstrations, and proof-of-concept development.' },
  ];

  return (
    <>
      <Head>
        <title>About Autonex | Industrial Automation & Industry 4.0 Experts</title>
        <meta name="description" content="Autonex provides expert solutions in industrial automation, IIoT, and Industry 4.0. Learn about our mission, vision, core values, and company journey." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">About Autonex</h1>
          <p className="text-xl text-brand-gray-600">
            We're a team of industrial technology experts helping businesses navigate digital transformation and Industry 4.0.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <article>
            <h2 className="mb-6 text-3xl font-semibold">Our Mission</h2>
            <p className="text-lg text-brand-gray-600 mb-6">
              Our mission is to empower industrial businesses with the technology and insights they need to thrive in an increasingly connected world.
            </p>
            <p className="text-lg text-brand-gray-600">
              We're committed to delivering practical, scalable solutions that address real business challenges and create measurable value for our clients.
            </p>
          </article>
          <article>
            <h2 className="mb-6 text-3xl font-semibold">Our Vision</h2>
            <p className="text-lg text-brand-gray-600 mb-6">
              We envision a future where industrial operations are seamlessly connected, highly efficient, and continuously improving through the intelligent application of technology.
            </p>
            <p className="text-lg text-brand-gray-600">
              Our goal is to be the leading partner for businesses navigating their Industry 4.0 journey, consistently delivering innovative solutions that drive meaningful results.
            </p>
          </article>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            These principles guide everything we do, from designing solutions to interacting with clients.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Innovation', description: 'We constantly seek new ways to solve problems and create value through technology.' },
            { title: 'Expertise', description: 'We maintain deep knowledge in our specialties and continuously develop our skills.' },
            { title: 'Partnership', description: 'We view our client relationships as long-term partnerships built on trust and mutual success.' },
            { title: 'Integrity', description: 'We operate with honesty and transparency in all our business dealings.' },
            { title: 'Results-Driven', description: 'We measure our success by the tangible outcomes and value we create for our clients.' },
            { title: 'Adaptability', description: 'We embrace change and help our clients navigate evolving technological landscapes.' },
          ].map((value, index) => (
            <article key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline/Journey Section */}
      <section className="py-16 bg-brand-gray-100">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto">
            From our founding to the present day, we've focused on delivering innovative industrial technology solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-[50%] w-0.5 h-full bg-brand-blue/30 transform -translate-x-1/2 hidden md:block" />
          
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative md:flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className="absolute top-0 left-[50%] w-6 h-6 rounded-full bg-brand-blue transform -translate-x-1/2 mt-4 hidden md:block" />
              <article className={`md:w-[45%] bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <time className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full font-semibold mb-3">{milestone.year}</time>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-brand-gray-500">{milestone.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange/90 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Work With Us?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Whether you're starting your digital transformation journey or enhancing existing systems, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-brand-orange hover:bg-white/90 font-medium py-3 px-6 rounded-md transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-brand-blue text-white hover:bg-brand-blue/90 font-medium py-3 px-6 rounded-md transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;
