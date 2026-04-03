import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Automation Catalog | Centurion Gates, Smart Automation Products Kenya",
  description: "Browse Autonex's home automation catalog featuring Centurion gates, automated swing gates, boom barriers, smart locks, and complete home automation solutions.",
  keywords: "home automation catalog, Centurion gates Kenya, automated gates, smart home products, boom barriers, gate motors, home automation systems Kenya",
  openGraph: {
    title: "Home Automation Catalog | Autonex Systems Limited",
    description: "Explore our range of home automation products including Centurion gates, smart home systems, and automated access solutions.",
    type: "website",
    url: "https://autonexsystemsltd.com/catalog",
    locale: "en_KE",
  },
  alternates: {
    canonical: "https://autonexsystemsltd.com/catalog",
  },
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
