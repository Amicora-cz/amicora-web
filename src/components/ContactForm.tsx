"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { COMPANY } from "@/data/company";

type FormStatus = { message: string; error: boolean };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !message || !consent) {
      setStatus({
        message: "Vyplňte prosím všechna pole a souhlas se zpracováním.",
        error: true,
      });
      return;
    }

    const subject = encodeURIComponent(`Zpráva z webu Amicora — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    setStatus({ message: "Otevíráme e-mailového klienta…", error: false });
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="card" style={{ padding: 28 }} noValidate onSubmit={onSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Jméno</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="message">Zpráva</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Nápad, NaLekci, rezervační systém na míru…"
          />
        </div>
        <label className="check">
          <input type="checkbox" name="consent" required />
          <span>
            Souhlasím se <Link href="/ochrana-osobnich-udaju">zpracováním osobních údajů</Link> za
            účelem odpovědi na tuto zprávu.
          </span>
        </label>
        <button className="btn btn-primary" type="submit">
          Odeslat e-mailem
        </button>
        <p className={`form-status${status?.error ? " error" : ""}`} role="status">
          {status?.message ?? ""}
        </p>
        <p className="hint mono" style={{ textTransform: "none", letterSpacing: 0 }}>
          Formulář otevře váš e-mailový klient s předvyplněnou zprávou na {COMPANY.email}.
        </p>
      </div>
    </form>
  );
}
