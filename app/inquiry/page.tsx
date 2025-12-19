import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InquiryForm from '../components/InquiryForm';

const Inquiry = () => {
  // Scroll to top on page load
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We'll review your request and schedule a call to discuss your needs in detail."
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Our team will develop a tailored proposal with pricing and timeline estimates."
    },
    {
      step: 3,
      title: "Project Planning",
      description: "Once approved, we'll create a detailed project plan and begin implementation."
    }
  ];

  const faqs = [
    {
      question: "How detailed should I be in my project description?",
      answer: "The more details you provide, the more accurate our initial estimate will be. Our team can help define requirements during the consultation phase."
    },
    {
      question: "How long does it take to receive a quote?",
      answer: "For standard requests, we typically respond within 2-3 business days. More complex projects may take up to a week."
    },
    {
      question: "Is there any commitment when requesting a quote?",
      answer: "No, requesting a quote doesn't obligate you to work with us. It's an opportunity to explore solutions."
    },
    {
      question: "Do you offer phased implementation options?",
      answer: "Yes, projects can be broken down into phases to distribute costs, minimize disruption, and validate results at each stage."
    }
  ];

  const testimonials = [
    {
      quote: "The proposal process was thorough and transparent. Autonex took the time to understand our needs before recommending solutions.",
      author: "Robert Chen",
      position: "Operations Manager, TechManufacturing Inc."
    },
    {
      quote: "What impressed us most was how Autonex tailored their solution specifically to our challenges rather than offering a generic package.",
      author: "Lisa Patel",
      position: "IT Director, Precision Industries"
    }
  ];

  return (
    <>
      <Head>
        <title>Request a Quote | Autonex Smart Solutions</title>
        <meta name="description" content="Submit your project details to Autonex Smart Solutions and receive a customized proposal for home automation, IIoT, and smart technology solutions." />
        <meta name="keywords" content="request quote, home automation, IIoT solutions, smart technology, industrial automation" />
        <meta name="author" content="Autonex Smart Solutions" />
        <meta property="og:title" content="Request a Quote | Autonex Smart Solutions" />
        <meta property="og:description" content="Submit your project details and get a tailored proposal from our team of experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/inquiry" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="mb-6">Request a Quote</h1>
          <p className="text-xl text-brand-gray-600">
            Tell us about your project, and we'll provide a detailed proposal tailored to your needs.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-brand-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Happens Next?</h2>
            <p className="text-lg text-brand-gray-500 max-w-3xl mx-auto">
              After submitting your request, here's what you can expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-3">{step.title}</h3>
                <p className="text-brand-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Common Questions</h2>
            <p className="text-lg text-brand-gray-500">
              Answers to frequently asked questions about our quote process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <div className="px-6 py-5 bg-brand-gray-50 rounded-t-lg border-b border-gray-200">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-brand-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-linear-to-r from-brand-blue to-brand-blue/80 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-white mb-12">Client Experiences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <p className="text-white/90 text-lg mb-6">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-white/70 text-sm">{testimonial.position}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Inquiry;
