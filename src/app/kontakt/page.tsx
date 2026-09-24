import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Napište Amicora s.r.o. na info@amicora.cz. Sídlo Koželužská 3034/1, 301 00 Plzeň, IČO 30034337.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <main id="obsah">
      <section className="container page-hero">
        <span className="mono accent">Kontakt</span>
        <h1>Ozveme se do jednoho pracovního dne.</h1>
        <p className="lead">
          Napište na{" "}
          <a href={`mailto:${COMPANY.email}`} className="accent">
            {COMPANY.email}
          </a>
          , nebo použijte formulář. Stejná adresa platí i pro NaLekci.
        </p>
      </section>

      <section className="section container contact-split">
        <ContactForm />

        <aside className="card" style={{ padding: 28 }}>
          <span className="mono accent">Sídlo</span>
          <h2 style={{ fontSize: 28, margin: "12px 0 16px" }}>{COMPANY.name}</h2>
          <p className="lead" style={{ fontSize: 16 }}>
            {COMPANY.seatLines[0]}
            <br />
            {COMPANY.seatLines[1]}
            <br />
            {COMPANY.seatLines[2]}
          </p>
          <p style={{ marginTop: 20 }}>
            <a href={`mailto:${COMPANY.email}`} className="accent">
              {COMPANY.email}
            </a>
          </p>
          <p className="source" style={{ marginTop: 20 }}>
            IČO {COMPANY.ico}
            <br />
            {COMPANY.court}
          </p>
          <p style={{ marginTop: 20 }}>
            <a className="btn btn-ghost btn-sm" href={COMPANY.justiceUrl} rel="noopener noreferrer">
              Výpis na Justice →
            </a>
          </p>
        </aside>
      </section>
    </main>
  );
}
