(() => {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".nav-drawer");

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  };

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector("form[data-contact]");
  if (!form) return;

  const status = form.querySelector(".form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent");

    if (!name || !email || !message || !consent) {
      if (status) {
        status.textContent = "Vyplňte prosím všechna pole a souhlas se zpracováním.";
        status.classList.add("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Zpráva z webu Amicora — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    if (status) {
      status.textContent = "Otevíráme e-mailového klienta…";
      status.classList.remove("error");
    }
    window.location.href = `mailto:info@amicora.cz?subject=${subject}&body=${body}`;
  });
})();
