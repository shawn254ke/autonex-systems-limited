
import React from 'react';
import Link from 'next/link';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
  color?: 'blue' | 'orange' | 'gradient';
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link = '/services',
  className,
  color = 'blue',
  linkText = 'Learn more'
}) => {
  const cardStyles = {
    blue: 'border-l-4 border-brand-blue hover:bg-brand-blue/5',
    orange: 'border-l-4 border-brand-orange hover:bg-brand-orange/5',
    gradient: 'border-l-0 hover:bg-gradient-to-br hover:from-brand-blue/10 hover:to-brand-orange/10'
  };

  const iconContainerStyles = {
    blue: 'text-brand-blue bg-brand-blue/10',
    orange: 'text-brand-orange bg-brand-orange/10',
    gradient: 'text-brand-blue bg-gradient-to-br from-brand-blue/10 to-brand-orange/10'
  };

  return (
    <Link href={link} className={cn('card group flex flex-col h-full', cardStyles[color], className)}>
      <div className={cn('w-14 h-14 rounded-lg flex items-center justify-center mb-5', iconContainerStyles[color])}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-blue transition-colors">{title}</h3>
      <p className="text-brand-gray-500 mb-4 grow">{description}</p>
      <div className="flex items-center text-brand-blue font-medium">
        <span className="transition-all group-hover:mr-2">{linkText}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </Link>
  );
};

export default ServiceCard;
