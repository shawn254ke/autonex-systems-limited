'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ChevronRight } from 'lucide-react';

const Catalog = () => {
  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const homeAutomationProducts = [
    {
      id: 'gate-motor',
      name: 'Centurion D5 Evo Smart Gate Motor',
      description: 'Heavy-duty, reliable, and secure sliding gate motor ideal for residential and industrial use. Smart technology enables app control and status updates.',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Gate+Motor',
      price: 'R8,499',
    },
    {
      id: 'remote-control',
      name: '4-Channel Remote Control',
      description: 'Sleek and compact remote control with four programmable buttons for controlling gates, lights, and automation devices.',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Remote+Control',
      price: 'R399',
    },
    {
      id: 'swing-gate',
      name: 'Swing Gate Automation System',
      description: 'Durable and quiet swing gate motors designed for double-leaf or single-leaf gates. Includes obstacle detection and battery backup.',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Swing+Gate+System',
      price: 'R11,999',
    },
    {
      id: 'security-lock',
      name: 'GLX 900 Security Lock',
      description: 'High-security digital smart lock with fingerprint, code, and app access options. Perfect for residential and commercial properties.',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Security+Lock',
      price: 'R2,499',
    },
  ];

  return (
    <>
      <Head>
        <title>Home Automation Catalog | Autonex</title>
        <meta
          name="description"
          content="Explore Autonex home automation products, including gate motors, remote controls, swing gate systems, and security locks. Enhance your home or business automation today."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/catalog" />
      </Head>

      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Automation Catalog</h1>
          <p className="text-lg text-brand-gray-600">
            Explore our selection of premium home automation products designed to enhance security, convenience, and modern living.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeAutomationProducts.map((product) => (
            <article key={product.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-lg font-medium text-brand-orange">{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button className="border border-gray-300 text-gray-700 hover:bg-gray-50">Learn More</Button>
                  <Button className="bg-brand-orange hover:bg-brand-orange/90">
                    Buy Now <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Need Help Choosing the Right Product?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Our team of experts is ready to help you select and install the perfect automation solution for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-blue hover:bg-white/90 font-medium py-3 px-6 rounded-md transition-all duration-200"
            >
              Contact Our Specialists
            </Link>
            <Link
              href="/inquiry"
              className="bg-brand-orange text-white hover:bg-brand-orange/90 font-medium py-3 px-6 rounded-md transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Catalog;
