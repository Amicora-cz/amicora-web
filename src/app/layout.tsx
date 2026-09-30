import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { COMPANY } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "Amicora — Stavíme software, který lidé skutečně používají",
    template: "%s — Amicora",
  },
  description:
    "Amicora s.r.o. je tech studio za NaLekci.cz. Software, IT poradenství a webové produkty. Sídlo v Plzni, IČO 30034337.",
  openGraph: {
    title: "Amicora s.r.o.",
    description: "Tech studio za NaLekci.cz. Stavíme software, který lidé skutečně používají.",
    locale: "cs_CZ",
    type: "website",
    url: COMPANY.siteUrl,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  legalName: COMPANY.name,
  url: COMPANY.siteUrl,
  email: COMPANY.email,
  foundingDate: "2026-09-16",
  identifier: COMPANY.icoCompact,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Koželužská 3034/1",
    addressLocality: "Plzeň",
    addressRegion: "Jižní Předměstí",
    postalCode: "301 00",
    addressCountry: "CZ",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
