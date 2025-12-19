import React from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { 
  Database, 
  Network, 
  Code, 
  Cpu, 
  Server, 
  Cloud, 
  Shield, 
  Wrench, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Settings,
  Home,
  Lock
} from 'lucide-react';

interface ServicesGridProps {
  category?: 'industry40' | 'iiot' | 'it' | 'homeauto' | 'all';
  useContactUs?: boolean;
}

const ServicesGrid = ({ category = 'all', useContactUs = false }: ServicesGridProps) => {
  const linkText = useContactUs ? 'Contact Us' : 'Learn more';
  const linkUrl = useContactUs ? '/contact' : '/services';

  // Industry 4.0 services
  const industry40Services = [
    { title: 'Smart Factory Setup', description: 'Complete smart factory implementation with integrated systems and IIoT connectivity.', icon: <Factory className="h-6 w-6" />, color: 'blue' as const },
    { title: 'Automation Solutions', description: 'Industrial automation strategies to optimize processes and reduce manual intervention.', icon: <Settings className="h-6 w-6" />, color: 'orange' as const },
    { title: 'Digital Twin Development', description: 'Create virtual replicas of physical systems for simulation and optimization.', icon: <Copy className="h-6 w-6" />, color: 'gradient' as const },
    { title: 'Predictive Analytics', description: 'Advanced analytics systems that predict maintenance needs and prevent downtime.', icon: <TrendingUp className="h-6 w-6" />, color: 'blue' as const },
  ];

  // IIoT services
  const iiotServices = [
    { title: 'Sensor Networks', description: 'Design and implementation of comprehensive industrial sensor networks.', icon: <Network className="h-6 w-6" />, color: 'orange' as const },
    { title: 'Data Pipelines', description: 'Robust data collection, processing, and storage solutions for industrial data.', icon: <Database className="h-6 w-6" />, color: 'blue' as const },
    { title: 'Real-time Monitoring', description: 'Live monitoring systems for industrial equipment and processes.', icon: <ActivitySquare className="h-6 w-6" />, color: 'gradient' as const },
    { title: 'Dashboards & Visualization', description: 'Custom dashboards that transform complex data into actionable insights.', icon: <BarChart className="h-6 w-6" />, color: 'orange' as const },
  ];

  // IT services
  const itServices = [
    { title: 'Custom Software Development', description: 'Tailored software solutions designed specifically for your business needs.', icon: <Code className="h-6 w-6" />, color: 'gradient' as const },
    { title: 'Cybersecurity', description: 'Comprehensive protection for your industrial and business IT infrastructure.', icon: <Shield className="h-6 w-6" />, color: 'blue' as const },
    { title: 'Cloud Migration', description: 'Seamless transition of your systems and data to secure cloud environments.', icon: <Cloud className="h-6 w-6" />, color: 'orange' as const },
    { title: 'IT Infrastructure', description: 'Design and implementation of robust IT systems for modern businesses.', icon: <Server className="h-6 w-6" />, color: 'blue' as const },
  ];

  // Home Automation services
  const homeAutoServices = [
    { title: 'Automated Gates', description: 'Installation and repairs of Centurion automated gates including D5 Smart, EVO D5 for sliding and swing gates.', icon: <Gate className="h-6 w-6" />, color: 'blue' as const },
    { title: 'Gate Remotes', description: 'Supply of 4-channel and 1-channel remotes compatible with all Centurion gate systems.', icon: <Remote className="h-6 w-6" />, color: 'orange' as const },
    { title: 'Smart Home Integration', description: 'Connect your gate systems with your smart home setup for seamless access control.', icon: <Home className="h-6 w-6" />, color: 'gradient' as const },
    { title: 'Security Locks', description: 'GLX 900 Lockers and other high-security solutions for residential and commercial properties.', icon: <Lock className="h-6 w-6" />, color: 'blue' as const },
  ];

  let servicesToDisplay = [];

  switch(category) {
    case 'industry40': servicesToDisplay = industry40Services; break;
    case 'iiot': servicesToDisplay = iiotServices; break;
    case 'it': servicesToDisplay = itServices; break;
    case 'homeauto': servicesToDisplay = homeAutoServices; break;
    default: // all categories
      servicesToDisplay = [
        industry40Services[0],
        iiotServices[0],
        itServices[0],
        homeAutoServices[0],
        industry40Services[1],
        homeAutoServices[1],
      ];
  }

  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesToDisplay.map((service, index) => (
          <article key={index} role="listitem">
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              link={linkUrl}
              linkText={linkText}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

// Missing icons
const Factory = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

const Copy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const ActivitySquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M17 12h-2l-2 5-2-10-2 5H7" />
  </svg>
);

const BarChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const Gate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M6 3v18" />
    <path d="M6 14h12" />
    <path d="M6 8h12" />
    <path d="M6 18h12" />
    <path d="M18 3v18" />
  </svg>
);

const Remote = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="4" width="12" height="16" rx="2" />
    <circle cx="12" cy="10" r="2" />
    <line x1="12" y1="16" x2="12" y2="16" strokeWidth="3" />
    <line x1="9" y1="20" x2="15" y2="20" strokeWidth="1" />
  </svg>
);

export default ServicesGrid;
