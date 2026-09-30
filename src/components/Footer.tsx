import Link from "next/link";
import { COMPANY } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer container">
      <div className="legal">
        <span>
          © {year} {COMPANY.name}
        </span>
        <span>
          IČO {COMPANY.ico} · {COMPANY.seat} · {COMPANY.court}
        </span>
      </div>
      <nav className="nav-links">
        <a href={COMPANY.githubUrl} rel="noopener noreferrer">
          GitHub
        </a>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/ochrana-osobnich-udaju">Ochrana osobních údajů</Link>
      </nav>
    </footer>
  );
}
