import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Autonex Systems Limited | Access Control & Industrial Automation Experts Kenya",
  description: "Learn about Autonex's mission, vision, and expertise in access control systems, SCADA, ERP integration, PLC programming, and industrial IoT solutions. Leading innovation in Kenya.",
  keywords: "about Autonex, access control solutions, SCADA systems, PLC programming, ERP integration, industrial IoT Kenya, automation experts, smart systems",
  openGraph: {
    title: "About Autonex Systems Limited | Industrial Automation & Access Control",
    description: "Discover how Autonex is transforming industries with access control, SCADA systems, ERP integration, and advanced automation technology.",
    type: "website",
    url: "https://autonexsystemsltd.com/about",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
