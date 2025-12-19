"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various manufacturing sectors, including automotive, electronics, pharmaceutical, food and beverage, and more. Our solutions are adaptable to different industrial environments."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A small IIoT implementation might take 2-3 months, while a comprehensive Industry 4.0 transformation could span 6-12 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you offer ongoing support after implementation?",
      answer: "Yes, we provide various support and maintenance options to ensure your systems continue running optimally. We can tailor support packages to meet your specific needs and requirements."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. We specialize in integrating modern technologies with legacy systems. Our solutions are designed to work alongside your existing infrastructure, enhancing capabilities without requiring complete replacement."
    },
    {
      question: "What makes you different from other technology consultants?",
      answer: "Our team combines deep industrial process knowledge with cutting-edge technology expertise. We focus specifically on industrial applications, providing solutions that address real operational challenges rather than generic IT services."
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Autonex</title>
        <meta
          name="description"
          content="Get in touch with Autonex for industrial technology solutions, automation projects, and expert consulting. Fill our contact form or reach us via email or phone."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://autonexsystemsltd.com/contact" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-brand-gray-600">
            Have questions or ready to start your project? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <p className="text-lg text-brand-gray-600 mb-8">
              Our team is ready to answer your questions and discuss how we can help with your industrial technology needs.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-brand-gray-600">info@autonexsmart.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-brand-gray-600">+254 (0)20 54054005</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-lg mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-brand-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Replace '#' with your social links */}
                <a href="#" className="bg-brand-gray-100 hover:bg-brand-gray-200 text-brand-gray-600 p-3 rounded-full transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="bg-brand-gray-100 hover:bg-brand-gray-200 text-brand-gray-600 p-3 rounded-full transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                {/* Add LinkedIn, GitHub, etc. */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we work.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <article key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <header className="px-6 py-5 bg-brand-gray-50 rounded-t-lg border-b border-gray-200">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </header>
                <div className="px-6 py-5">
                  <p className="text-brand-gray-600">{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-white mb-6">Need a Detailed Quote for Your Project?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            For more complex inquiries, fill out our detailed project request form to help us understand your needs better.
          </p>
          <Link 
            href="/inquiry" 
            className="bg-brand-orange text-white hover:bg-brand-orange/90 font-medium py-3 px-6 rounded-md transition-all duration-200"
          >
            Request a Detailed Quote
          </Link>
        </div>
      </section>

      
    </>
  );
};

export default Contact;
