import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Access Control, SCADA, ERP, PLC, Home Automation Kenya",
  description: "Complete industrial solutions including access control systems, SCADA software, ERP integration, PLC programming, boom barriers, home automation, and system integration in Kenya and East Africa.",
  keywords: "access control systems Kenya, SCADA software, ERP integration services, PLC programming Kenya, boom barriers Centurion, home automation Kenya, industrial IoT, smart systems",
  openGraph: {
    title: "Professional Services | Autonex Systems Limited",
    description: "Access control, SCADA, ERP, PLC programming, home automation, and industrial automation services.",
    type: "website",
    url: "https://autonexsystemsltd.com/services",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
