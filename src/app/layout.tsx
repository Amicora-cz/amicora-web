import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { COMPANY } from "@/data/company";
import "./globals.css";

const siteTitle = "Amicora s.r.o. — oficiální web";
const siteDescription =
  "Amicora s.r.o. (IČO 30034337) je tech studio z Plzně. Stavíme NaLekci.cz a další software. Oficiální web amicora.cz.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Amicora s.r.o.",
  },
  description: siteDescription,
  applicationName: "Amicora",
  authors: [{ name: COMPANY.name, url: COMPANY.siteUrl }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  keywords: [
    "Amicora",
    "Amicora s.r.o.",
    "amicora.cz",
    "NaLekci",
    "NaLekci.cz",
    "tech studio Plzeň",
    "software",
    "IČO 30034337",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: "cs_CZ",
    type: "website",
    url: COMPANY.siteUrl,
    siteName: "Amicora",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  category: "technology",
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${COMPANY.siteUrl}/#organization`,
      name: COMPANY.name,
      alternateName: ["Amicora", "amicora.cz"],
      legalName: COMPANY.name,
      url: COMPANY.siteUrl,
      email: COMPANY.email,
      foundingDate: "2026-09-16",
      identifier: [
        {
          "@type": "PropertyValue",
          name: "IČO",
          value: COMPANY.icoCompact,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koželužská 3034/1",
        addressLocality: "Plzeň",
        addressRegion: "Jižní Předměstí",
        postalCode: "301 00",
        addressCountry: "CZ",
      },
      sameAs: [COMPANY.githubUrl, COMPANY.nalekciUrl, COMPANY.justiceUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${COMPANY.siteUrl}/#website`,
      url: COMPANY.siteUrl,
      name: "Amicora",
      alternateName: ["Amicora s.r.o.", "amicora.cz"],
      description: siteDescription,
      inLanguage: "cs-CZ",
      publisher: { "@id": `${COMPANY.siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${COMPANY.siteUrl}/#webpage`,
      url: COMPANY.siteUrl,
      name: siteTitle,
      isPartOf: { "@id": `${COMPANY.siteUrl}/#website` },
      about: { "@id": `${COMPANY.siteUrl}/#organization` },
      inLanguage: "cs-CZ",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
