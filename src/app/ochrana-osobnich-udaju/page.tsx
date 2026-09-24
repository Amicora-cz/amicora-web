import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Zásady zpracování osobních údajů společnosti Amicora s.r.o., IČO 30034337.",
  alternates: { canonical: "/ochrana-osobnich-udaju" },
};

export default function OchranaOsobnichUdajuPage() {
  return (
    <main id="obsah">
      <section className="container page-hero">
        <span className="mono accent">GDPR</span>
        <h1>Ochrana osobních údajů</h1>
        <p className="lead">
          Správcem osobních údajů je {COMPANY.name}, IČO {COMPANY.ico}, se sídlem Koželužská 3034/1,
          Jižní Předměstí, 301 00 Plzeň.
        </p>
      </section>

      <section className="section container">
        <div className="prose">
          <h2>Jaké údaje zpracováváme</h2>
          <p>
            Tento prezentační web nepoužívá marketingové cookies ani měřicí skripty třetích stran.
            Pokud nám napíšete e-mail nebo formulářem, zpracujeme jméno, e-mailovou adresu a obsah
            zprávy.
          </p>
          <p>
            Produkt{" "}
            <a href={COMPANY.nalekciUrl} rel="noopener noreferrer">
              NaLekci.cz
            </a>{" "}
            má vlastní rozhraní a podmínky. Rezervace lekcí se řídí pravidly uvedenými tam.
          </p>

          <h2>Účel a právní základ</h2>
          <p>
            Údaje z kontaktního formuláře a e-mailu zpracováváme proto, abychom mohli odpovědět na váš
            dotaz (oprávněný zájem podle čl. 6 odst. 1 písm. f) GDPR, případně plnění opatření před
            uzavřením smlouvy). Souhlas, který zaškrtnete u formuláře, dokumentuje, že jste byli o
            zpracování informováni.
          </p>

          <h2>Doba uložení</h2>
          <p>
            Korespondenci uchováváme po dobu vyřízení dotazu a přiměřenou dobu poté, nejdéle však 3
            roky, pokud delší uložení nevyžaduje právní předpis.
          </p>

          <h2>Příjemci</h2>
          <p>
            Údaje nepředáváme třetím stranám k jejich marketingu. Zprávu čtou jednatelé společnosti.
            Hosting webu může technicky zpracovávat provozní logy (IP adresa, prohlížeč) v rozsahu
            nezbytném pro provoz a bezpečnost.
          </p>

          <h2>Vaše práva</h2>
          <p>
            Máte právo na přístup, opravu, výmaz, omezení zpracování, námitku a přenositelnost. Žádost
            pošlete na <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Stížnost můžete podat
            u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7,{" "}
            <a href="https://www.uoou.gov.cz" rel="noopener noreferrer">
              uoou.gov.cz
            </a>
            .
          </p>

          <h2>Kontakt na správce</h2>
          <p>
            {COMPANY.name}, Koželužská 3034/1, Jižní Předměstí, 301 00 Plzeň, IČO {COMPANY.ico},
            e-mail <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
          <p className="source">
            Tyto zásady platí pro web amicora.cz. Poslední úprava: 17. září 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
