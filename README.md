# Amicora — prezentační web

Next.js 16 (App Router) + TypeScript. Stejný stack jako zbytek Amicora / NaLekci aplikací.

```bash
npm install
npm run dev   # http://localhost:3010
```

Build:

```bash
npm run build
npm start     # http://localhost:3010
```

Port `3010` — aby nekolidoval s nalekci-pulse / main-panel (`3000`), jaa-studio (`3001`) ani game appkami (`3020`/`3030`).

## Stránky

- `/` — úvod, produkt, přístup, tým
- `/produkt` — NaLekci.cz
- `/o-spolecnosti` — údaje z obchodního rejstříku
- `/kontakt` — formulář a sídlo
- `/ochrana-osobnich-udaju` — GDPR

## Zdroj údajů

Obchodní rejstřík, Krajský soud v Plzni, spis C 49035:

- Amicora s.r.o., IČO 300 34 337
- sídlo Koželužská 3034/1, Jižní Předměstí, 301 00 Plzeň
- zápis 16. 9. 2026

## SEO / Google

- Canonical URL a metadata míří na `https://amicora.cz`
- Dynamické `/robots.txt` a `/sitemap.xml` (Next.js Metadata routes)
- JSON-LD: Organization + WebSite + WebPage
- Open Graph obrázek: `/opengraph-image`

Aby Google web našel při hledání „Amicora“ / „amicora.cz“:

1. Production na Vercelu musí na doméně `amicora.cz` vracet Next.js appku (HTML routes 200, ne 404).
2. Vypnout Deployment Protection / SSO pro Production (Googlebot musí projít bez loginu).
3. V [Google Search Console](https://search.google.com/search-console) ověřit `amicora.cz` a odeslat sitemap `https://amicora.cz/sitemap.xml`.
