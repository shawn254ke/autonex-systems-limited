'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesGrid from '../components/ServicesGrid';
import ImageSlider from '../components/ImageSlider';

export default function ServicesContent() {
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

      {/* Hero Section with SEO-Optimized Content */}
      <section className="pt-32 pb-16 bg-brand-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              Industry 4.0, IIoT & Smart Automation Solutions in Kenya
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray-600 mb-8">
              Leading provider of Industry 4.0 manufacturing solutions, Industrial IoT (IIoT), access control systems, parking management, and home automation services across Kenya and East Africa. Transform your operations with cutting-edge smart technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="px-4 py-2 bg-white rounded-full text-brand-gray-700">OEE Monitoring</span>
              <span className="px-4 py-2 bg-white rounded-full text-brand-gray-700">Smart Manufacturing</span>
              <span className="px-4 py-2 bg-white rounded-full text-brand-gray-700">Access Control Kenya</span>
              <span className="px-4 py-2 bg-white rounded-full text-brand-gray-700">Gate Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Filter Section */}
      <section className="py-16 bg-white" aria-label="Services filter and catalog">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Service categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${activeCategory === category.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200'
                  }`}
                aria-pressed={activeCategory === category.id}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </nav>
          <ServicesGrid category={activeCategory as any} useContactUs={true} />
        </div>
      </section>

      {/* Access Control & Parking Management */}
      <article id="access-control" className="py-16 bg-brand-gray-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-medium mb-4">
              Access Control & Parking Management
            </span>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">
              Smart Access Control & Parking Management Systems in Kenya
            </h2>
            <p className="text-lg text-brand-gray-600 mb-6">
              AutoNex provides comprehensive access control and parking management solutions including boom barriers, bollards, RFID systems, biometric access control, and number plate recognition (LPR) across Kenya and East Africa.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Boom Barriers, Bollards & Gate Automation',
                  description:
                    'Professional installation of Centurion boom barriers, rising bollards, and automated gate systems for controlled vehicle entry and exit. Perfect for commercial buildings, residential estates, and parking facilities in Nairobi, Mombasa, and across Kenya.'
                },
                {
                  title: 'Access Control Systems - RFID, Biometric & LPR',
                  description:
                    'Advanced RFID card readers, biometric fingerprint scanners, facial recognition, keypads, and automated number plate recognition (LPR/ANPR) systems for secure and flexible access management. ISO-compliant and integrated with existing security infrastructure.'
                },
                {
                  title: 'Parking Payment & Ticketing Solutions',
                  description:
                    'Automated parking payment systems, ticket dispensers, barrier integration, and cashless payment solutions (M-PESA, cards) for efficient and user-friendly parking operations. Real-time occupancy monitoring and revenue management.'
                },
                {
                  title: 'Monitoring, Reporting & Maintenance',
                  description:
                    'Cloud-based monitoring dashboards, detailed access logs and reports, preventive maintenance schedules, and 24/7 technical support to ensure system reliability and maximum uptime.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <ImageSlider
              images={[
                {
                  src: '/images/centurion boom.jpeg',
                  alt: 'Centurion Sector Boom barriers installation in Kenya - automatic vehicle access control'
                },
                {
                  src: '/images/parking.png',
                  alt: 'Smart parking access control system with RFID and payment integration'
                },
                {
                  src: '/images/boom.jpg',
                  alt: 'Automatic boom barrier gate system for commercial parking in Nairobi'
                },
                {
                  src: '/images/parking management.jpg',
                  alt: 'Complete parking management system with ticketing and access control'
                },
                {
                  src: '/images/bollards.jpg',
                  alt: 'Rising bollards for high-security vehicle access control'
                },
                {
                  src: '/images/rising barrier.jpg',
                  alt: 'Hydraulic rising barrier security system installation'
                }
              ]}
              autoPlay={true}
              intervalMs={5000}
              showControls={true}
            />
          </div>
        </div>
      </article>

      {/* Industry 4.0 Section */}
      <article id="industry40" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full font-medium mb-4">
                  Industry 4.0 Solutions
                </span>

                <h2 className="mb-4 text-3xl md:text-4xl font-bold">
                  Industry 4.0 Smart Manufacturing with Real-Time OEE Monitoring
                </h2>

                <p className="text-lg text-brand-gray-600 mb-6">
                  AutoNex delivers Industry 4.0 and smart manufacturing solutions in Kenya and East Africa. Our systems provide real-time Overall Equipment Effectiveness (OEE) calculation, production monitoring, and interactive dashboards that give manufacturers complete visibility into availability, performance, and quality across production lines. Achieve digital transformation with SCADA integration, PLC connectivity, and IoT sensors.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Real-Time OEE Calculation & Monitoring',
                    description:
                      'Automated OEE calculation measuring Availability, Performance, and Quality using live machine data from PLCs, SCADA systems, and IoT sensors. Track manufacturing efficiency metrics including cycle times, downtime, and production rates in real-time.'
                  },
                  {
                    title: 'Production & Downtime Monitoring',
                    description:
                      'Comprehensive tracking of cycle times, machine stoppages, quality rejects, and production counts with clear root-cause classification. Identify bottlenecks, reduce unplanned downtime, and optimize production schedules.'
                  },
                  {
                    title: 'Interactive Dashboards & KPIs',
                    description:
                      'Cloud-based web dashboards with real-time charts, trends, alerts, and KPI visualizations. Monitor OEE, downtime reasons, productivity metrics, and quality data from anywhere. Mobile-responsive interfaces for management teams.'
                  },
                  {
                    title: 'Historical Analysis & Reporting',
                    description:
                      'Analyze historical OEE trends, compare shift performance, benchmark production lines, and generate detailed reports for continuous improvement initiatives. Export to Excel, PDF, and integrate with ERP systems.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-brand-gray-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ImageSlider
                slides={[
                  {
                    type: 'video',
                    src: '/videos/industrial automation.mp4',
                    alt: 'Industry 4.0 smart factory automation and OEE monitoring system demonstration'
                  },
                  {
                    type: 'image',
                    src: '/images/OEE dashboard.png',
                    alt: 'Real-time OEE dashboard showing production efficiency, downtime analysis, and KPIs'
                  }
                ]}
                autoPlay={true}
                intervalMs={5000}
                showControls={true}
              />

              <div className="absolute -bottom-8 -left-8 hidden lg:block" aria-hidden="true">
                <div className="bg-brand-blue text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold mb-1">+37%</div>
                  <div className="text-sm opacity-90">
                    Average OEE improvement with real-time dashboards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* IIoT Section */}
      <article id="iiot" className="py-16 bg-brand-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Industrial IoT (IIoT) sensors and connectivity for smart manufacturing in Kenya" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 hidden lg:block" aria-hidden="true">
                <div className="bg-brand-orange text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold mb-1">52%</div>
                  <div className="text-sm opacity-90">Data-driven decision improvement</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-medium mb-4">
                  Industrial IoT (IIoT) Solutions
                </span>
                <h2 className="mb-4 text-3xl md:text-4xl font-bold">
                  Industrial IoT Solutions - Connect Your Equipment & Data
                </h2>
                <p className="text-lg text-brand-gray-600 mb-6">
                  AutoNex provides Industrial Internet of Things (IIoT) solutions that connect industrial equipment, collect operational data, and deliver real-time insights for data-driven decision-making. Our IIoT platforms integrate with existing machinery, PLCs, and SCADA systems across manufacturing, energy, and infrastructure sectors in Kenya and East Africa.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Sensor Integration & Edge Computing',
                    description: 'Connect industrial equipment with advanced IoT sensors (temperature, vibration, pressure, flow) and edge computing devices that capture critical operational data at the source. Compatible with Modbus, OPC-UA, MQTT protocols.'
                  },
                  {
                    title: 'Real-Time Equipment Monitoring',
                    description: 'Monitor equipment performance, health status, environmental conditions, and process metrics in real-time. Predictive maintenance alerts, anomaly detection, and equipment utilization tracking reduce unplanned downtime.'
                  },
                  {
                    title: 'Secure Data Pipelines & Storage',
                    description: 'Implement robust, secure systems for industrial data collection, processing, transmission, and storage. Cloud and on-premise options with data encryption, backup, and compliance with industry standards.'
                  },
                  {
                    title: 'Custom Visualization Dashboards',
                    description: 'Transform complex industrial data into clear, actionable insights with custom web-based dashboards. Real-time visualizations, trend analysis, automated reports, and KPI tracking for operations teams.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">{item.title}</h3>
                    <p className="text-brand-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* IT Services Section */}
      <section id="it" className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full font-medium mb-4">
              Custom IT Solutions
            </span>
            <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">
              Enterprise IT Services & Industrial Software Development
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Custom software development, industrial cybersecurity, cloud migration, data analytics, and managed IT services for manufacturing, logistics, and infrastructure companies in Kenya and East Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Software Development',
                description: 'Tailored enterprise software, SCADA/MES systems, mobile apps, and web applications designed for your unique industrial and business requirements. Full-stack development with modern technologies.'
              },
              {
                title: 'Industrial Cybersecurity',
                description: 'Protect connected industrial systems, ICS/SCADA networks, and OT/IT infrastructure with comprehensive security assessments, firewall implementation, intrusion detection, and compliance audits.'
              },
              {
                title: 'Cloud Migration & Integration',
                description: 'Seamlessly migrate legacy systems to secure cloud platforms (AWS, Azure, Google Cloud). Hybrid cloud solutions, API integration, and cloud-native application development with minimal disruption.'
              },
              {
                title: 'Data Analytics & Machine Learning',
                description: 'Extract valuable business intelligence from operational data. Implement predictive analytics, machine learning models, and AI-powered insights for forecasting, quality prediction, and optimization.'
              },
              {
                title: 'Legacy System Integration',
                description: 'Connect modern IIoT and Industry 4.0 technologies with legacy PLC, SCADA, and ERP systems. Protocol conversion, middleware development, and system modernization to extend asset lifespan.'
              },
              {
                title: 'Managed IT Services & Support',
                description: 'Comprehensive 24/7 support, network management, server administration, backup solutions, and IT infrastructure maintenance for industrial facilities. Preventive maintenance and helpdesk services.'
              },
            ].map((service, index) => (
              <article key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Home Automation Section */}
      <article id="homeauto" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-medium mb-4">
                  Home Automation
                </span>
                <h2 className="mb-4 text-3xl md:text-4xl font-bold">
                  Smart Home Automation & Centurion Gate Systems in Kenya
                </h2>
                <p className="text-lg text-brand-gray-600 mb-6">
                  AutoNex offers professional home automation and gate automation solutions across Kenya. Authorized Centurion dealer providing installation, service, and maintenance of smart gate motors, access control, and security systems for residential and commercial properties in Nairobi, Mombasa, Kisumu, and nationwide.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: 'Centurion Gate Systems - D5 Smart & EVO',
                    description: 'Authorized installation and servicing of Centurion D5 Smart, D5 EVO, and Vantage gate motors for sliding gates and swing gates. Solar-powered options available. Includes warranty, genuine spare parts, and certified technicians.'
                  },
                  {
                    title: 'Remote Controls & Smart Access',
                    description: 'Supply and programming of Centurion 4-channel and 1-channel remote controls. Smartphone app integration, GSM gate openers, intercom systems, and visitor management solutions for modern smart homes.'
                  },
                  {
                    title: 'Integrated Security Solutions',
                    description: 'GLX 900 Lockers, CCTV camera systems, alarm systems, perimeter security, and complete property protection. Integration with gate automation for comprehensive security coverage.'
                  },
                  {
                    title: '24/7 Maintenance & Support Services',
                    description: 'Regular preventive maintenance programs, emergency repair services, system upgrades, and 24/7 technical support hotline to keep your gate automation and security systems running reliably.'
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
                    alt: 'Centurion D5 Smart automatic gate system installation in Kenya - sliding gate motor'
                  },
                  {
                    src: '/images/alarm.png',
                    alt: 'Smart home alarm system control panel and security integration'
                  },
                  {
                    src: '/images/Home automation.png',
                    alt: 'Complete home automation system with lighting, access control and security'
                  }
                ]}
                autoPlay={true}
                intervalMs={5000}
                showControls={true}
              />
              <div className="absolute -bottom-8 -right-8 hidden lg:block" aria-hidden="true">
                <div className="bg-brand-orange text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Support & Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ Section for SEO */}
      <section className="py-16 bg-brand-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'What is Industry 4.0 and how can it benefit my manufacturing business in Kenya?',
                answer: 'Industry 4.0 refers to the fourth industrial revolution, integrating smart technologies like IoT sensors, real-time data analytics, and automation into manufacturing. Benefits include improved OEE (Overall Equipment Effectiveness), reduced downtime, better quality control, and data-driven decision making. AutoNex helps Kenyan manufacturers implement these solutions for increased productivity and competitiveness.'
              },
              {
                question: 'How much does an access control and parking management system cost in Kenya?',
                answer: 'Costs vary based on requirements: basic boom barriers start from KES 150,000, while complete parking management systems with RFID, payment integration, and LPR range from KES 500,000 to KES 2,000,000+. Contact us for a detailed quote tailored to your specific needs and site requirements.'
              },
              {
                question: 'Do you provide maintenance for Centurion gate motors in Kenya?',
                answer: 'Yes, AutoNex is an authorized Centurion dealer providing installation, maintenance, and repair services for all Centurion gate systems (D5 Smart, D5 EVO, Vantage) across Kenya. We offer preventive maintenance contracts, emergency repairs, genuine spare parts, and 24/7 technical support.'
              },
              {
                question: 'What is the difference between IIoT and Industry 4.0?',
                answer: 'IIoT (Industrial Internet of Things) focuses on connecting industrial equipment and sensors to collect data. Industry 4.0 is broader, encompassing IIoT plus automation, analytics, AI, and system integration to create smart factories. AutoNex provides both IIoT solutions and complete Industry 4.0 transformation services.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-semibold text-lg text-brand-blue cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-brand-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-white mb-6 text-3xl md:text-4xl font-bold">
            Ready to Start Your Digital Transformation Journey?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Contact AutoNex Smart Solutions today to discuss your Industry 4.0, IIoT, access control, or home automation project. Get a detailed quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/inquiry" 
              className="inline-block bg-white text-brand-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
}
