import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Autonex Systems Limited | Access Control & Industrial Solutions",
  description: "Get in touch with Autonex for access control systems, SCADA solutions, PLC programming, home automation, and industrial IoT projects in Kenya. Expert support and consultation.",
  keywords: "contact Autonex, access control support, SCADA consultation, industrial automation Kenya, system integration, home automation services",
  openGraph: {
    title: "Contact Autonex Systems Limited",
    description: "Reach out to our team for access control, SCADA, PLC programming, and industrial automation solutions in Kenya.",
    type: "website",
    url: "https://autonexsystemsltd.com/contact",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
