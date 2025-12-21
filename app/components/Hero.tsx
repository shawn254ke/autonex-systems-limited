"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Action {
  text: string;
  href: string;
}

interface BackgroundSlide {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  tertiaryAction?: Action;
  /** Array of background slides (images or videos). Takes precedence over `backgroundImages` and `backgroundImage`. */
  backgroundSlides?: BackgroundSlide[];
  /** Prefer providing multiple images via `backgroundImages`. If omitted, `backgroundImage` is used as single slide. */
  backgroundImages?: string[];
  backgroundImage?: string;
  /** Slide interval in milliseconds */
  intervalMs?: number;
}

export default function Hero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  backgroundSlides,
  backgroundImages,
  backgroundImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  intervalMs = 8000,
}: HeroProps) {
  // Build slides array: prefer `backgroundSlides`, then `backgroundImages`, finally fallback to `backgroundImage`
  const slides: BackgroundSlide[] = backgroundSlides && backgroundSlides.length > 0
    ? backgroundSlides
    : backgroundImages && backgroundImages.length > 0
    ? backgroundImages.map(src => ({ type: 'image' as const, src }))
    : [{ type: 'image' as const, src: backgroundImage }];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Preload image slides
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.type === 'image' && slide.src) {
        const img = new window.Image();
        img.src = slide.src;
      }
    });
  }, [slides]);

  // Auto-cycle slides
  useEffect(() => {
    if (slides.length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs) as unknown as number;

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current as unknown as number);
        intervalRef.current = null;
      }
    };
  }, [slides.length, intervalMs]);

  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">

      {/* Slides: absolutely positioned, cross-fade via opacity */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={index !== i}
          className="absolute inset-0 transition-opacity duration-1000 ease-linear"
          style={{ opacity: index === i ? 1 : 0 }}
        >
          {slide.type === 'image' ? (
            <Image 
              src={slide.src} 
              alt={slide.alt || `Background ${i + 1}`} 
              fill 
              priority={i === 0} 
              className="object-cover" 
            />
          ) : (
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-blue/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in">
            {primaryAction && (
              <Link href={primaryAction.href} className="btn-accent flex items-center gap-2 text-lg">
                {primaryAction.text}
                <ArrowRight size={18} />
              </Link>
            )}

            {tertiaryAction && (
              <Link
                href={tertiaryAction.href}
                className="bg-brand-orange text-white hover:bg-brand-orange/90 font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center gap-2 text-lg"
              >
                {tertiaryAction.text}
                <ArrowRight size={18} />
              </Link>
            )}

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center gap-2 text-lg"
              >
                {secondaryAction.text}
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
