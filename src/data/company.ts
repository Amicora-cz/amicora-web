export const COMPANY = {
  name: "Amicora s.r.o.",
  ico: "300 34 337",
  icoCompact: "30034337",
  email: "info@amicora.cz",
  seat: "Koželužská 3034/1, 301 00 Plzeň",
  seatLines: ["Koželužská 3034/1", "Jižní Předměstí", "301 00 Plzeň"] as const,
  court: "C 49035, Krajský soud v Plzni",
  justiceUrl:
    "https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1333138&typ=PLATNY",
  githubUrl: "https://github.com/Amicora-cz",
  nalekciUrl: "https://nalekci.cz/cs",
  nalekciSearchUrl: "https://nalekci.cz/cs/search",
  siteUrl: "https://amicora.cz",
} as const;

export const FOUNDERS = [
  {
    initials: "JŠ",
    name: "Ing. Jiří Šedivec",
    role: "Zakladatel a jednatel · Plzeň",
  },
  { initials: "VŠ", name: "Ing. Vojtěch Šafránek", role: "Zakladatel a jednatel · Plzeň" },
  {
    initials: "JD",
    name: "Ing. Jakub Devera",
    role: "Zakladatel a jednatel · Praha",
  },
] as const;

export const PARTNERS = [
  { initials: "JŠ", name: "Ing. Jiří Šedivec", role: "Jednatel a společník" },
  { initials: "VŠ", name: "Ing. Vojtěch Šafránek", role: "Jednatel a společník" },
  {
    initials: "JD",
    name: "Ing. Jakub Devera",
    role: "Jednatel a společník · Praha",
  },
] as const;
