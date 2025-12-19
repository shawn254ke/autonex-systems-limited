
import React from 'react';
import { cn } from '../lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  image,
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn('card flex flex-col h-full', className)}>
      {/* Quote SVG */}
      <div className="text-brand-orange mb-4">
        <svg
          width="45"
          height="36"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.048 35.136L0.408 35.136C0.408 28.304 0.856 22.88 1.752 18.864C2.648 14.8 4.312 11.68 6.744 9.504C9.224 7.28 12.616 5.584 16.92 4.416L19.928 10.544C16.856 11.488 14.568 12.928 13.064 14.864C11.608 16.8 10.76 19.648 10.52 23.408L13.048 23.408L13.048 35.136ZM37.976 35.136L25.336 35.136C25.336 28.304 25.784 22.88 26.68 18.864C27.576 14.8 29.24 11.68 31.672 9.504C34.152 7.28 37.544 5.584 41.848 4.416L44.856 10.544C41.784 11.488 39.496 12.928 37.992 14.864C36.536 16.8 35.688 19.648 35.448 23.408L37.976 23.408L37.976 35.136Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <p className="text-brand-gray-600 mb-6 grow">
        "{quote}"
      </p>

      <div className="flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 mr-4 flex items-center justify-center text-brand-blue font-bold text-xl">
            {author.substring(0, 1)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-brand-blue">{author}</h4>
          <p className="text-brand-gray-500 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
