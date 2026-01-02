export default function Head() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Autonex Systems Limited",
    url: "https://autonexsystemsltd.com",
    logo: "https://autonexsystemsltd.com/images/logo1.png"
  };

  return (
    <>
      <link rel="icon" href="/images/logo1.png" />
      <link rel="apple-touch-icon" href="/images/logo1.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content="https://autonexsystemsltd.com/images/logo1.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
    </>
  );
}
