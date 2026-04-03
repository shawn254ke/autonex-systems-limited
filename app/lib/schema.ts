export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://autonexsystemsltd.com/#organization",
        "name": "Autonex Systems Limited",
        "url": "https://autonexsystemsltd.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://autonexsystemsltd.com/images/logo1.png",
          "width": 600,
          "height": 600
        },
        "description": "Leading provider of access control systems, SCADA solutions, ERP integration, PLC programming, Centurion boom barriers, home automation, and industrial IoT in Kenya and East Africa.",
        "sameAs": [
          "https://www.linkedin.com/company/autonex-systems-limited",
          "https://www.facebook.com/autonexsystemsltd"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+254-XXX-XXX-XXX",
          "email": "contact@autonexsystemsltd.com"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://autonexsystemsltd.com/#localbusiness",
        "name": "Autonex Systems Limited",
        "image": "https://autonexsystemsltd.com/images/logo1.png",
        "description": "Access Control, SCADA Systems, PLC Programming, ERP Integration, Home Automation",
        "url": "https://autonexsystemsltd.com",
        "telephone": "+254-XXX-XXX-XXX",
        "email": "contact@autonexsystemsltd.com",
        "areaServed": [
          {
            "@type": "Country",
            "name": "Kenya"
          },
          {
            "@type": "Country",
            "name": "Uganda"
          },
          {
            "@type": "Country",
            "name": "Tanzania"
          }
        ],
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "@id": "https://autonexsystemsltd.com/services#access-control",
        "name": "Access Control & Centurion Boom Barriers",
        "description": "Professional access control systems including Centurion boom barriers, RFID, biometric readers, automatic gates, bollards, and parking management.",
        "provider": {
          "@type": "Organization",
          "@id": "https://autonexsystemsltd.com/#organization"
        },
        "areaServed": "KE"
      },
      {
        "@type": "Service",
        "@id": "https://autonexsystemsltd.com/services#scada-plc",
        "name": "SCADA Systems & PLC Programming",
        "description": "Advanced SCADA systems, PLC programming, industrial automation, and system integration services.",
        "provider": {
          "@type": "Organization",
          "@id": "https://autonexsystemsltd.com/#organization"
        },
        "areaServed": "KE"
      },
      {
        "@type": "Service",
        "@id": "https://autonexsystemsltd.com/services#erp-integration",
        "name": "ERP Integration & Business Systems",
        "description": "ERP software integration, system integration, and business system solutions for industrial operations.",
        "provider": {
          "@type": "Organization",
          "@id": "https://autonexsystemsltd.com/#organization"
        },
        "areaServed": "KE"
      },
      {
        "@type": "Service",
        "@id": "https://autonexsystemsltd.com/services#homeauto",
        "name": "Home Automation Solutions",
        "description": "Smart home automation featuring automated Centurion gates, smart locks, security systems, and intelligent home solutions.",
        "provider": {
          "@type": "Organization",
          "@id": "https://autonexsystemsltd.com/#organization"
        },
        "areaServed": "KE"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://autonexsystemsltd.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://autonexsystemsltd.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "About",
            "item": "https://autonexsystemsltd.com/about"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contact",
            "item": "https://autonexsystemsltd.com/contact"
          }
        ]
      }
    ]
  };
}
