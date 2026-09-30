import type { Metadata } from "next";
import Link from "next/link";
import { ProductShot } from "@/components/ProductShot";
import { COMPANY, FOUNDERS } from "@/data/company";

export const metadata: Metadata = {
  title: { absolute: "Amicora — Stavíme software, který lidé skutečně používají" },
  description:
    "Amicora s.r.o. je tech studio za NaLekci.cz. Software, IT poradenství a webové produkty. Sídlo v Plzni, IČO 30034337.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="obsah">
      <section className="hero container">
        <div className="hero-copy">
          <span className="mono accent">Tech studio · Plzeň</span>
          <h1>Stavíme software, který lidé skutečně používají.</h1>
          <p className="lead">
            Stavíme NaLekci.cz a další software, který má být rychlý a přehledný.
          </p>
          <div className="actions">
            <a href={COMPANY.nalekciUrl} className="btn btn-primary" rel="noopener noreferrer">
              Otevřít NaLekci
            </a>
            <a href="#pristup" className="btn btn-ghost">
              Jak pracujeme →
            </a>
          </div>
        </div>
        <ProductShot
          src="/images/nalekci-home.jpg"
          alt="NaLekci.cz — úvod a nejbližší lekce"
          href={COMPANY.nalekciUrl}
          label="nalekci.cz"
        />
      </section>

      <section className="trust container">
        <span className="mono">Společnost</span>
        <div className="facts">
          <div className="card fact">
            <strong>Plzeň</strong>
            <span>sídlo společnosti</span>
          </div>
          <div className="card fact">
            <strong>IČO {COMPANY.icoCompact}</strong>
            <span>{COMPANY.name}</span>
          </div>
        </div>
      </section>

      <section id="produkt" className="section container">
        <div className="section-head two-col">
          <div>
            <span className="mono accent">Produkt · NaLekci</span>
            <h2>Lekce, které stojí za vyzkoušení. Rezervace na dvě klepnutí.</h2>
          </div>
          <p className="lead">
            NaLekci.cz spojuje lektory s lidmi, kteří chtějí sportovat s někým, kdo jim sedne. Rozvrh,
            volná místa a rezervace na jednom místě — bez účtu, pokud ho nechcete.
          </p>
        </div>
        <div className="grid-3">
          <div className="card feature">
            <span className="mono">Fig 0.1</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M8 2v4M16 2v4M3 10h18" />
            </svg>
            <h3>Živý rozvrh</h3>
            <p>
              Kapacity a zbývající místa vidíte u každé lekce. Rezervujete přesně to, co lektor
              vypsal.
            </p>
          </div>
          <div className="card feature">
            <span className="mono">Fig 0.2</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h3>Ověření lektoři</h3>
            <p>
              Než někoho zařadíme, spojíme se s ním osobně. Zůstávají jen lekce, které stojí za
              vyzkoušení.
            </p>
          </div>
          <div className="card feature">
            <span className="mono">Fig 0.3</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
            <h3>Platba podle lektora</h3>
            <p>
              Způsob platby určuje lektor a vidíte ho před potvrzením. Den před lekcí přijde
              připomínka s adresou.
            </p>
          </div>
        </div>
        <ProductShot
          src="/images/nalekci-lekce.jpg"
          alt="NaLekci.cz — vyhledávání lekcí, filtry a volná místa"
          href={COMPANY.nalekciSearchUrl}
          label="nalekci.cz / lekce"
          wide
          style={{ marginTop: 28 }}
        />
        <div className="actions" style={{ marginTop: 28 }}>
          <Link href="/produkt" className="btn btn-ghost">
            Víc o NaLekci →
          </Link>
        </div>
      </section>

      <section id="pristup" className="section container side-by-side">
        <div className="sticky-head">
          <span className="mono accent">Jak pracujeme</span>
          <h2>Méně, ale pořádně.</h2>
          <p className="lead">
            Malý tým, krátká smyčka od nápadu k nasazení. Radši jednu věc, která funguje, než pět,
            které skoro fungují.
          </p>
        </div>
        <ol className="principles">
          <li>
            <span className="mono accent">01</span>
            <div>
              <h3>Produkt před technologií</h3>
              <p>
                Nejdřív pochopíme, co uživatel potřebuje. Stack vybíráme podle problému, ne podle
                trendů.
              </p>
            </div>
          </li>
          <li>
            <span className="mono accent">02</span>
            <div>
              <h3>Rychlost jako feature</h3>
              <p>Aplikace musí reagovat okamžitě. Měříme výkon stejně přísně jako chyby.</p>
            </div>
          </li>
          <li>
            <span className="mono accent">03</span>
            <div>
              <h3>Otevřeně a přímo</h3>
              <p>
                Jasné údaje o společnosti, žádné skryté podmínky. Když něco nefunguje, řekneme to.
              </p>
            </div>
          </li>
          <li>
            <span className="mono accent">04</span>
            <div>
              <h3>Dlouhodobě udržitelný kód</h3>
              <p>
                Píšeme kód, který za rok přečte kdokoli z týmu. Méně závislostí, méně překvapení.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="tym" className="section container">
        <div className="section-head row">
          <div>
            <span className="mono accent">Tým</span>
            <h2>Lidé za Amicorou</h2>
          </div>
          <span className="mono">3 zakladatelé · Plzeň / Praha</span>
        </div>
        <div className="grid-3">
          {FOUNDERS.map((person) => (
            <div className="card person" key={person.initials}>
              <div className="photo">
                <span>{person.initials}</span>
              </div>
              <b>{person.name}</b>
              <small>{person.role}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="rezervace" className="section container side-by-side">
        <div className="sticky-head">
          <span className="mono accent">Na zakázku</span>
          <h2>Rezervační systém podle vás.</h2>
          <p className="lead">
            NaLekci je náš produkt. Stejnou zkušenost umíme postavit i na míru — pro studio, klub
            nebo platformu, která potřebuje rezervace přesně podle svých pravidel.
          </p>
        </div>
        <div className="actions" style={{ alignSelf: "center" }}>
          <Link href="/kontakt" className="btn btn-primary">
            Mám zájem, napište mi
          </Link>
          <a href={`mailto:${COMPANY.email}`} className="btn btn-ghost">
            {COMPANY.email}
          </a>
        </div>
      </section>

      <section className="section container cta">
        <h2>Máte nápad, nebo potřebujete rezervace?</h2>
        <p className="lead">Ozveme se do jednoho pracovního dne.</p>
        <div className="actions">
          <Link href="/kontakt" className="btn btn-primary">
            Kontakt
          </Link>
          <a href={COMPANY.nalekciUrl} className="btn btn-ghost" rel="noopener noreferrer">
            Otevřít NaLekci
          </a>
        </div>
      </section>
    </main>
  );
}
