import type { Metadata } from "next";
import Link from "next/link";
import { ProductShot } from "@/components/ProductShot";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "NaLekci",
  description:
    "NaLekci.cz je rezervační produkt Amicora s.r.o. Lekce od ověřených lektorů, živý rozvrh a rezervace online.",
  alternates: { canonical: "/produkt" },
};

export default function ProduktPage() {
  return (
    <main id="obsah">
      <section className="container page-hero">
        <span className="mono accent">Produkt · NaLekci.cz</span>
        <h1>Sportuj s někým, kdo ti sedne.</h1>
        <p className="lead">
          NaLekci je náš první produkt: místo, kde si rezervujete lekci od lektora, kterého jsme
          osobně poznali. Provozuje ho Amicora s.r.o.
        </p>
        <div className="actions">
          <a href={COMPANY.nalekciUrl} className="btn btn-primary" rel="noopener noreferrer">
            Přejít na NaLekci.cz
          </a>
          <Link href="/kontakt" className="btn btn-ghost">
            Chci vypsat své lekce
          </Link>
        </div>
      </section>

      <section className="section container">
        <ProductShot
          src="/images/nalekci-home.jpg"
          alt="NaLekci.cz — úvod a nejbližší lekce"
          href={COMPANY.nalekciUrl}
          label="nalekci.cz"
          wide
        />
      </section>

      <section className="section container">
        <div className="section-head two-col">
          <div>
            <span className="mono accent">Pro cvičící</span>
            <h2>Tři kroky od rozvrhu k tréninku.</h2>
          </div>
          <p className="lead">
            Žádný účet není nutný. E-mail stačí na potvrzení a připomínku den předem.
          </p>
        </div>
        <div className="grid-3">
          <div className="card feature">
            <span className="mono">01</span>
            <h3>Vyber lektora</h3>
            <p>U každé lekce vidíte velikost skupiny, cenu, místo a pro koho je určená.</p>
          </div>
          <div className="card feature">
            <span className="mono">02</span>
            <h3>Rezervuj online</h3>
            <p>
              Potvrdíte rezervaci, způsob platby určuje lektor. Zrušení je zdarma do 24 hodin před
              začátkem.
            </p>
          </div>
          <div className="card feature">
            <span className="mono">03</span>
            <h3>Doraž a trénuj</h3>
            <p>Den před lekcí přijde připomínka s adresou. Nic dalšího řešit nemusíte.</p>
          </div>
        </div>
        <div className="shot-grid" style={{ marginTop: 28 }}>
          <ProductShot
            src="/images/nalekci-lekce.jpg"
            alt="NaLekci.cz — seznam lekcí s filtry, cenou a volnými místy"
            href={COMPANY.nalekciSearchUrl}
            label="nalekci.cz / lekce"
          />
          <ProductShot
            src="/images/nalekci-lektori.jpg"
            alt="NaLekci.cz — profil lektora a rezervace termínu"
            href={COMPANY.nalekciUrl}
            label="nalekci.cz / lektoři"
            lektori
          />
        </div>
      </section>

      <section className="section container">
        <div className="section-head two-col">
          <div>
            <span className="mono accent">Pro lektory</span>
            <h2>Rozvrh pro stálé klienty. Objevení pro nové.</h2>
          </div>
          <p className="lead">
            Vypsání lekcí je zdarma a bez karty. Klienti vidí volná místa v reálném čase a vy víte,
            kdo přijde.
          </p>
        </div>
        <div className="grid-2">
          <div className="card feature">
            <h3>Jednoduchá správa</h3>
            <p>
              Profil, termíny, kapacity. Odkaz pošlete stávajícím klientům — rezervují se sami, bez
              zpráv na Messengeru.
            </p>
          </div>
          <div className="card feature">
            <h3>Noví lidé podle poptávky</h3>
            <p>
              NaLekci není jen rezervační systém. Lidé nám píší, koho chtějí vidět ve svém městě.
              Podle zájmu lektory oslovujeme.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head two-col">
          <div>
            <span className="mono accent">Na zakázku</span>
            <h2>Potřebujete rezervační systém podle sebe?</h2>
          </div>
          <p className="lead">
            Kromě NaLekci stavíme i zakázkové rezervační systémy. Pokud máte vlastní proces a
            potřebujete software, který ho drží — ozvěte se.
          </p>
        </div>
        <div className="actions">
          <Link href="/kontakt" className="btn btn-primary">
            Napsat Amicoře
          </Link>
        </div>
      </section>

      <section className="section container cta">
        <h2>Chcete NaLekci pro své studio?</h2>
        <p className="lead">
          Napište nám na {COMPANY.email}. Ozveme se do jednoho pracovního dne.
        </p>
        <div className="actions">
          <a href={`mailto:${COMPANY.email}`} className="btn btn-primary">
            {COMPANY.email}
          </a>
          <a href={COMPANY.nalekciUrl} className="btn btn-ghost" rel="noopener noreferrer">
            nalekci.cz
          </a>
        </div>
      </section>
    </main>
  );
}
