// app/layout.tsx
import { ReactNode } from "react";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autonex Systems Limited | Where Smart Systems Begin",
  description: "We specialize in Access Control, Parking Management, Industrial automation, industrial IoT solutions, and smart technology integration that help transform how you live and work.",
  keywords: "home automation, industrial IoT, smart technology, digital transformation, business solutions, access control, parking management",
  authors: [{ name: "Autonex Systems Limited" }],
  openGraph: {
    title: "Autonex Systems Limited | Where Smart Systems Begin",
    description: "We specialize in Access Control, Parking Management, Industrial automation, industrial IoT solutions, and smart technology integration that help transform how you live and work.",
    type: "website",
    url: "https://autonexsystemsltd.com/",
    images: [
      {
        url: "https://autonexsystemsltd.com/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Autonex Systems Limited",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
