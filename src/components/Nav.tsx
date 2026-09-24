"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>
      <header className="nav">
        <Link href="/" className="logo">
          <span className="logo-mark">A</span>Amicora
        </Link>
        <nav className="nav-links" aria-label="Hlavní">
          <Link href="/produkt" aria-current={pathname === "/produkt" ? "page" : undefined}>
            Produkt
          </Link>
          <Link
            href="/#pristup"
            aria-current={pathname === "/" && hash === "#pristup" ? "page" : undefined}
          >
            Jak pracujeme
          </Link>
          <Link
            href="/#tym"
            aria-current={pathname === "/" && hash === "#tym" ? "page" : undefined}
          >
            Tým
          </Link>
          <Link
            href="/o-spolecnosti"
            aria-current={pathname === "/o-spolecnosti" ? "page" : undefined}
          >
            O společnosti
          </Link>
        </nav>
        <Link
          href="/kontakt"
          className="btn btn-primary btn-sm nav-cta"
          aria-current={pathname === "/kontakt" ? "page" : undefined}
        >
          Napište nám
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </header>
      <nav id="menu" className="nav-drawer" aria-label="Mobilní">
        <Link href="/produkt" onClick={close} aria-current={pathname === "/produkt" ? "page" : undefined}>
          Produkt
        </Link>
        <Link href="/#pristup" onClick={close}>
          Jak pracujeme
        </Link>
        <Link href="/#tym" onClick={close}>
          Tým
        </Link>
        <Link
          href="/o-spolecnosti"
          onClick={close}
          aria-current={pathname === "/o-spolecnosti" ? "page" : undefined}
        >
          O společnosti
        </Link>
        <Link
          href="/kontakt"
          onClick={close}
          aria-current={pathname === "/kontakt" ? "page" : undefined}
        >
          Kontakt
        </Link>
      </nav>
    </>
  );
}
