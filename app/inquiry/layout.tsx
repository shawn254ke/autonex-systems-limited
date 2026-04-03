import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote | Autonex Systems Limited Access Control & Industrial Solutions",
  description: "Request a customized quote for access control systems, SCADA solutions, ERP integration, PLC programming, boom barriers, gates, and home automation in Kenya.",
  keywords: "request quote access control, SCADA pricing, boom barriers quote, gate automation price, industrial automation Kenya cost",
  openGraph: {
    title: "Get a Quote | Autonex Systems Limited",
    description: "Request a customized proposal for your access control, SCADA, automation, or home automation project.",
    type: "website",
    url: "https://autonexsystemsltd.com/inquiry",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/inquiry",
  },
};

export default function InquiryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
