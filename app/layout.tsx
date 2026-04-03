// app/layout.tsx
import { ReactNode } from "react";
import { Toaster } from "sonner";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Metadata } from "next";
import { generateOrganizationSchema } from "./lib/schema";

export const metadata: Metadata = {
  title: "Access Control, SCADA, ERP & PLC Integration Solutions | AutoNex Systems Limited Kenya",
  description: "Expert provider of access control systems, SCADA solutions, ERP integration, PLC programming, Centurion boom barriers, home automation, and industrial IoT in Kenya. Smart parking management and system integration services.",
  keywords: "access control Kenya, SCADA systems, ERP software, PLC programming, Centurion boom barriers, industrial IoT, home automation Kenya, parking management, system integration, IIoT solutions, smart gates Kenya, automated gates Kenya",
  authors: [{ name: "Autonex Systems Limited" }],
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
    title: "Access Control, SCADA, ERP & PLC Solutions | AutoNex Systems Limited",
    description: "Leading provider of access control, SCADA systems, ERP integration, PLC programming, Centurion boom barriers, home automation, and industrial IoT solutions in Kenya and East Africa.",
    type: "website",
    url: "https://autonexsystemsltd.com/",
    locale: "en_KE",
    siteName: "AutoNex Systems Limited",
    images: [
      {
        url: "https://autonexsystemsltd.com/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Autonex Systems Limited - Access Control & SCADA Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const schemaData = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          strategy="afterInteractive"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
