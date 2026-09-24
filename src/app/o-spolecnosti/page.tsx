import type { Metadata } from "next";
import { COMPANY, PARTNERS } from "@/data/company";

export const metadata: Metadata = {
  title: "O společnosti",
  description:
    "Amicora s.r.o., IČO 30034337, sídlo Plzeň. Údaje z obchodního rejstříku Krajského soudu v Plzni, spisová značka C 49035.",
  alternates: { canonical: "/o-spolecnosti" },
};

export default function OSpolecnostiPage() {
  return (
    <main id="obsah">
      <section className="container page-hero">
        <span className="mono accent">{COMPANY.name}</span>
        <h1>Malé studio. Veřejný rejstřík. Žádné zástěrky.</h1>
        <p className="lead">
          Jsme společnost s ručením omezeným zapsaná u Krajského soudu v Plzni. Stavíme software —
          teď především NaLekci.cz.
        </p>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="mono accent">Obchodní rejstřík</span>
          <h2>Identifikační údaje</h2>
        </div>
        <dl className="card dl">
          <dt>Firma</dt>
          <dd>{COMPANY.name}</dd>
          <dt>IČO</dt>
          <dd>{COMPANY.ico}</dd>
          <dt>Sídlo</dt>
          <dd>{COMPANY.seat}</dd>
          <dt>E-mail</dt>
          <dd>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </dd>
          <dt>Rejstřík</dt>
          <dd>
            {COMPANY.court} ·{" "}
            <a href={COMPANY.justiceUrl} rel="noopener noreferrer">
              výpis
            </a>
          </dd>
        </dl>
      </section>

      <section className="section container">
        <div className="section-head two-col">
          <div>
            <span className="mono accent">Předmět podnikání</span>
            <h2>Co smíme dělat — a co děláme.</h2>
          </div>
          <p className="lead">
            Zapsaný předmět je volná živnost. V praxi stavíme software, weby a produkty kolem nich.
            První z nich je NaLekci.
          </p>
        </div>
        <div className="grid-2">
          <div className="card feature">
            <h3>Software a data</h3>
            <p>
              Poskytování software, poradenství v oblasti informačních technologií, zpracování dat,
              hostingové a související činnosti a webové portály.
            </p>
          </div>
          <div className="card feature">
            <h3>Návrh, konzultace, marketing</h3>
            <p>
              Poradenská a konzultační činnost, technické návrhy, grafické práce, reklamní činnost,
              marketing a mediální zastoupení.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head row">
          <div>
            <span className="mono accent">Jednatelé a společníci</span>
            <h2>Tři lidé, každý jednu třetinu.</h2>
          </div>
          <span className="mono">3 zakladatelé</span>
        </div>
        <div className="grid-3">
          {PARTNERS.map((person) => (
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
    </main>
  );
}
