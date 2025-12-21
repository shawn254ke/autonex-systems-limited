'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaSlide {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface ImageSliderProps {
  images?: {
    src: string;
    alt: string;
  }[];
  slides?: MediaSlide[];
  autoPlay?: boolean;
  intervalMs?: number;
  showControls?: boolean;
}

export default function ImageSlider({
  images,
  slides,
  autoPlay = true,
  intervalMs = 5000,
  showControls = true,
}: ImageSliderProps) {
  // Build slides array: prefer `slides` prop, fallback to `images` prop
  const mediaSlides: MediaSlide[] = slides && slides.length > 0
    ? slides
    : images && images.length > 0
    ? images.map(img => ({ type: 'image' as const, src: img.src, alt: img.alt }))
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || mediaSlides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaSlides.length);
    }, intervalMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, mediaSlides.length, intervalMs]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaSlides.length) % mediaSlides.length);
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaSlides.length);
      }, intervalMs);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaSlides.length);
    // Reset interval on manual navigation
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaSlides.length);
      }, intervalMs);
    }
  };

  if (mediaSlides.length === 0) {
    return <div className="w-full h-96 bg-gray-200 rounded-lg" />;
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg group">
      {/* Media Container */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
        {mediaSlides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            {slide.type === 'image' ? (
              <Image
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            )}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      {showControls && mediaSlides.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Next Button */}
      {showControls && mediaSlides.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Dots Indicator */}
      {showControls && mediaSlides.length > 1 && (
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
          {mediaSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentIndex
                  ? 'bg-white w-4 sm:w-6'
                  : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Media Counter */}
      {showControls && mediaSlides.length > 1 && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-black/50 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
          {currentIndex + 1} / {mediaSlides.length}
        </div>
      )}
    </div>
  );
}
