"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { cn } from "../lib/utils";
import { Home, Lock } from "lucide-react";
import React from "react";

/* Custom Gate Icon */
const GateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M6 3v18" />
    <path d="M6 14h12" />
    <path d="M6 8h12" />
    <path d="M6 18h12" />
    <path d="M18 3v18" />
  </svg>
);

const slides = [
  {
    title: "Automated Gate Systems and Intercoms",
    description:
      "State-of-the-art sliding and swing gate automation with smart features for enhanced security and convenience.",
    icon: <GateIcon className="h-10 w-10" />,
    color: "blue",
    image:
      "/images/Centurion Gate.png",
  },
  {
    title: "Smart Lighting Control",
    description:
      "Automated lights based on motion sensors, timers, or scenes. Remote control via app or voice assistants.",
    icon: <Home className="h-10 w-10" />,
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1585909695284-32d2985ac9c0",
  },
  {
    title: "Smart Security Systems",
    description:
      "High-security locking solutions for residential and commercial properties with advanced access control.",
    icon: <Lock className="h-10 w-10" />,
    color: "gradient",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
  },
  {
    title: "Energy Management Systems",
    description:
      "Optimize energy consumption and reduce costs with smart energy management solutions.",
    icon: <Lock className="h-10 w-10" />,
    color: "gradient",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7",
  },
];

const getGradientClass = (color: string) => {
  switch (color) {
    case "blue":
      return "from-brand-blue/20 to-brand-blue/5";
    case "orange":
      return "from-brand-orange/20 to-brand-orange/5";
    case "gradient":
      return "from-brand-blue/20 via-purple-500/10 to-brand-orange/20";
    default:
      return "from-brand-blue/20 to-brand-blue/5";
  }
};

export default function HomeAutomationCarousel() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Home Automation Solutions
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto">
            Elevate your property with cutting-edge automation systems that
            combine security, convenience, and smart technology.
          </p>
        </header>

        {/* Carousel */}
        <div className="relative px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className={cn(
                      "rounded-xl overflow-hidden h-full p-6 shadow-md bg-linear-to-br",
                      getGradientClass(slide.color)
                    )}
                  >
                    <div className="flex flex-col h-full">

                      {/* Image */}
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-4 left-4 flex items-center">
                          <div
                            className={cn(
                              "rounded-full p-2 mr-3",
                              slide.color === "blue"
                                ? "bg-brand-blue text-white"
                                : slide.color === "orange"
                                ? "bg-brand-orange text-white"
                                : "bg-white text-brand-blue"
                            )}
                          >
                            {slide.icon}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {slide.title}
                      </h3>

                      <p className="text-brand-gray-600 mb-4 grow">
                        {slide.description}
                      </p>

                      <Link
                        href="/services"
                        className="text-brand-blue font-medium flex items-center hover:underline"
                      >
                        Learn more
                        <span className="ml-1">→</span>
                      </Link>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
