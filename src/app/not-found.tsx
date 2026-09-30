import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stránka nenalezena",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="container not-found" id="obsah">
      <span className="mono accent">404</span>
      <h1>Tady nic není.</h1>
      <p className="lead">Stránka neexistuje, nebo se přestěhovala.</p>
      <div className="actions">
        <Link href="/" className="btn btn-primary">
          Zpět na úvod
        </Link>
        <Link href="/kontakt" className="btn btn-ghost">
          Kontakt
        </Link>
      </div>
    </main>
  );
}
