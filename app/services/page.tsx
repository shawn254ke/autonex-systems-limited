import { Metadata } from 'next';
import Link from 'next/link';
import ServicesContent from './ServicesContent';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Access Control, Parking Management, Industry 4.0 & IT Services | AutoNex Systems Limited Kenya',
  description: 'Leading provider of Industry 4.0, Industrial IoT (IIoT), IT services, access control, parking management, and home automation solutions in Kenya and East Africa. Expert OEE monitoring, smart manufacturing, and gate automation.',
  keywords: 'Industry 4.0 Kenya, IIoT solutions Kenya, industrial automation East Africa, OEE monitoring, smart manufacturing, access control systems, parking management Kenya, boom barriers Kenya, gate automation, Centurion gates Kenya, home automation Kenya, industrial IoT solutions, smart factory Kenya, SCADA systems, PLC integration, biometric access control, RFID systems, number plate recognition Kenya, bollards Kenya, industrial cybersecurity, cloud integration Kenya, data analytics manufacturing, predictive maintenance, real-time dashboards, production monitoring, downtime tracking',
  authors: [{ name: 'AutoNex Systems Limited' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Access Control, Parking Management,Industry 4.0, IIoT & IT Services | AutoNex Systems Limited Kenya',
    description: 'Transform your operations with Industry 4.0, IIoT solutions, access control, parking management, and home automation. Expert industrial automation services in Kenya and East Africa.',
    type: 'website',
    url: 'https://autonexsystemsltd.com/services',
    locale: 'en_KE',
    siteName: 'AutoNex Systems Limited',
    images: [
      {
        url: 'https://www.autonexsystemsltd.com/images/OEE%20dashboard.png',
        width: 1200,
        height: 630,
        alt: 'AutoNex Industry 4.0 and IIoT Solutions',
      },
      {
        url: 'https://www.autonexsystemsltd.com/images/centurion%20boom.jpeg',
        width: 1200,
        height: 630,
        alt: 'AutoNex Access Control and Parking Management with Centurion Boom Barriers',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Control, Parking Management,Industry 4.0, IIoT & IT Services | AutoNex Systems Limited Kenya',
    description: 'Transform your operations with Industry 4.0, IIoT solutions, access control, and automation services in Kenya.',
    images: ['https://www.autonexsystemsltd.com/images/boom.jpg'],
  },
  alternates: {
    canonical: 'https://autonexsystemsltd.com/services',
  },
};

// JSON-LD Structured Data for SEO
function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://autonexsystemsltd.com/#organization',
        name: 'AutoNex Systems Limited',
        url: 'https://autonexsystemsltd.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://autonexsystemsltd.com/images/logo1.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254-XXX-XXXXXX',
          contactType: 'Customer Service',
          areaServed: ['KE', 'EA'],
          availableLanguage: ['English', 'Swahili'],
        },
        sameAs: [
          'https://www.linkedin.com/company/autonex-systems-limited',
          'https://twitter.com/autonexsystems',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://autonexsystemsltd.com/services#webpage',
        url: 'https://autonexsystemsltd.com/services',
        name: 'Access Control, Parking Management,Industry 4.0, IIoT & IT Services | AutoNex Systems Limited Kenya',
        description: 'Comprehensive Industry 4.0, Industrial IoT, IT services, access control, parking management, and home automation solutions in Kenya and East Africa.',
        isPartOf: {
          '@id': 'https://autonexsystemsltd.com/#website',
        },
        breadcrumb: {
          '@id': 'https://autonexsystemsltd.com/services#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://autonexsystemsltd.com/services#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://autonexsystemsltd.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://autonexsystemsltd.com/services',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://autonexsystemsltd.com/services#industry40',
        name: 'Industry 4.0 Manufacturing Solutions',
        description: 'Real-time OEE calculation, production monitoring, and interactive dashboards for smart manufacturing and digital transformation.',
        provider: {
          '@id': 'https://autonexsystemsltd.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Industry 4.0',
      },
      {
        '@type': 'Service',
        '@id': 'https://autonexsystemsltd.com/services#iiot',
        name: 'Industrial IoT (IIoT) Solutions',
        description: 'Connect industrial equipment with advanced sensors, real-time monitoring, data pipelines, and visualization dashboards.',
        provider: {
          '@id': 'https://autonexsystemsltd.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Industrial IoT',
      },
      {
        '@type': 'Service',
        '@id': 'https://autonexsystemsltd.com/services#access-control',
        name: 'Access Control & Parking Management Systems',
        description: 'Smart boom barriers, bollards, gate automation, RFID access control, biometric systems, and parking management solutions.',
        provider: {
          '@id': 'https://autonexsystemsltd.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Access Control Systems',
      },
      {
        '@type': 'Service',
        '@id': 'https://autonexsystemsltd.com/services#it-services',
        name: 'Custom IT Services & Solutions',
        description: 'Custom software development, industrial cybersecurity, cloud migration, data analytics, and managed IT services.',
        provider: {
          '@id': 'https://autonexsystemsltd.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'IT Services',
      },
      {
        '@type': 'Service',
        '@id': 'https://autonexsystemsltd.com/services#home-automation',
        name: 'Home Automation & Gate Systems',
        description: 'Centurion gate systems, smart home automation, security solutions, and 24/7 maintenance services.',
        provider: {
          '@id': 'https://autonexsystemsltd.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Kenya',
        },
        serviceType: 'Home Automation',
      },
    ],
  };
}

const Services = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
      />

      <ServicesContent />
    </>
  );
};

export default Services;
