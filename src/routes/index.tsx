import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import photographerPhoto from "@/assets/photographer-at-work.jpg";
import itSpecialistPhoto from "@/assets/it-specialist-at-computer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POLANTA — fotogrāfija un mājaslapas Rīgā" },
      {
        name: "description",
        content: "Fotogrāfijas un mājaslapu izstrādes pakalpojumi Rīgā.",
      },
      { property: "og:title", content: "POLANTA — fotogrāfija un mājaslapas" },
      {
        property: "og:description",
        content: "Fotogrāfija un mājaslapu izstrāde Rīgā.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#fotografija", label: "Fotogrāfija" },
  { href: "#majaslapas", label: "Mājaslapas" },
  { href: "#pakalpojumi", label: "Pakalpojumi" },
  { href: "#kontakti", label: "Kontakti" },
];

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
              <a href="#sakums" className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
            POLANTA
          </a>
          <nav aria-label="Galvenā navigācija" className="hidden md:block">
            <ul className="flex gap-9 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Aizvērt izvēlni" : "Atvērt izvēlni"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
        {open && (
          <nav aria-label="Mobilā navigācija" className="border-t border-border md:hidden">
            <ul className="px-5 py-4">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-4 font-display font-extrabold tracking-tight text-3xl last:border-0"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        {/* Sākums */}
        <section id="sakums" className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pb-28 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="animate-rise lg:col-span-7">
              <p className="eyebrow text-muted-foreground">Fotogrāfija un digitālie risinājumi · Rīga</p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[5.5rem]">
                Fotogrāfija un mājaslapas, kas <span className="text-warm-deep">strādā</span> jūsu labā.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Fotosesijas un pasākumu fotogrāfija, kā arī mājaslapu dizains un izstrāde uzņēmumiem un privātpersonām.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#fotografija" className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}>
                  Apskatīt pakalpojumus
                </a>
                <a href="#kontakti" className={`${btn} border border-foreground/25 hover:bg-foreground hover:text-background`}>
                  Sazināties
                </a>
              </div>
            </div>
            <div className="animate-rise grid gap-3 [animation-delay:150ms] lg:col-span-5">
              <a href="#fotografija" className="group flex items-end justify-between rounded-xl bg-warm-deep p-6 text-primary-foreground md:p-8">
                <span>
                  <span className="eyebrow opacity-70">01</span>
                  <span className="mt-6 block font-display font-extrabold tracking-tight text-3xl md:text-4xl">Fotogrāfija</span>
                  <span className="mt-2 block text-sm opacity-80">Portreti · Pasākumi · Studija</span>
                </span>
                <span aria-hidden className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#majaslapas" className="group flex items-end justify-between rounded-xl bg-forest p-6 text-forest-foreground md:p-8">
                <span>
                  <span className="eyebrow opacity-70">02</span>
                  <span className="mt-6 block font-display font-extrabold tracking-tight text-3xl md:text-4xl">Mājaslapas</span>
                  <span className="mt-2 block text-sm opacity-70">Dizains · Izstrāde · Mobilās ierīces</span>
                </span>
                <span aria-hidden className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Fotogrāfija */}
        <section id="fotografija" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex items-baseline justify-between border-b-2 border-warm-deep pb-5 text-warm-deep">
              <p className="eyebrow">01 — Fotogrāfija</p>
              <p className="eyebrow hidden text-muted-foreground sm:block">Portreti · Pasākumi · Studija</p>
            </div>
            <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <img
                  src={photographerPhoto}
                  alt="Fotogrāfe fotografē studijā"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[16/11]"
                />
              </div>
              <div className="flex flex-col justify-center gap-10 lg:col-span-5">
                <div>
                  <h2 className="text-4xl leading-[1.05] md:text-6xl">Īsti mirkļi, ko gribas paturēt.</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Portretu un pasākumu fotografēšana dažādiem notikumiem un vajadzībām. Pastāstiet par ieceri, un vienosimies par fotosesiju.
                  </p>
                  <a href="#kontakti" className={`${btn} mt-8 bg-primary text-primary-foreground hover:opacity-90`}>
                    Pieteikt fotosesiju
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mājaslapas */}
        <section id="majaslapas" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex items-baseline justify-between border-b-2 border-forest pb-5 text-forest">
              <p className="eyebrow">02 — Mājaslapas</p>
              <p className="eyebrow hidden sm:block">Dizains · Izstrāde · Mobilās ierīces</p>
            </div>
            <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-14">
              <div className="order-2 lg:order-1 lg:col-span-5 lg:self-center">
                <h2 className="text-4xl leading-[1.05] md:text-6xl">Mājaslapa, kas skaidri parāda jūsu darbu.</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Veidoju mūsdienīgas, mobilajām ierīcēm pielāgotas mājaslapas uzņēmumiem un personīgajiem zīmoliem. Pārdomāts dizains, saprotama struktūra un ērta lietošana — no pirmā ekrāna līdz kontaktinformācijai.
                </p>
                <a href="#kontakti" className={`${btn} mt-8 bg-forest text-forest-foreground hover:opacity-90`}>
                  Aprunāties par mājaslapu
                </a>
              </div>
              <div className="order-1 mb-10 lg:order-2 lg:col-span-7">
                <img
                  src={itSpecialistPhoto}
                  alt="IT speciālists strādā pie datora mājas birojā"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pakalpojumi */}
        <section id="pakalpojumi" className="bg-primary py-20 text-primary-foreground md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-12">
            <p className="eyebrow opacity-60 lg:col-span-3">03 — Pakalpojumi</p>
            <div className="lg:col-span-9">
              <h2 className="text-4xl leading-[1.05] md:text-7xl">
                Divi pakalpojumu virzieni. <span className="opacity-70">Viens ērts kontakts.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-75">
                Polanta piedāvā fotogrāfijas pakalpojumus un mājaslapu izstrādi. Izvēlieties vajadzīgo pakalpojumu vai sazinieties, lai pārrunātu savu ieceri.
              </p>
            </div>
          </div>
        </section>

        {/* Kontakti */}
        <section id="kontakti" className="py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="eyebrow text-muted-foreground">04 — Kontakti</p>
            <h2 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-7xl">Pastāstiet par savu ieceri.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Fotosesija, pasākuma fotografēšana vai jauna mājaslapa — uzrakstiet vai piezvaniet, un vienosimies par nākamo soli.
            </p>
            <dl className="mt-14 grid border-t border-border md:grid-cols-3">
              {[
                { k: "Tālrunis", v: "+371 20 20 1052", href: "tel:+37120201052" },
                { k: "E-pasts", v: "polanta@gmail.com", href: "mailto:polanta@gmail.com" },
                { k: "Atrašanās vieta", v: "Rīga, Latvija" },
              ].map((c) => (
                <div key={c.k} className="border-b border-border py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                  <dt className="eyebrow text-muted-foreground">{c.k}</dt>
                  <dd className="mt-3 font-display font-extrabold tracking-tight text-2xl md:text-3xl">
                    {c.href ? (
                      <a href={c.href} className="underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground">
                        {c.v}
                      </a>
                    ) : (
                      c.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between md:px-10">
          <span className="font-display font-extrabold tracking-tight text-foreground">POLANTA</span>
          <span>Fotogrāfija · Mājaslapas · Rīga</span>
        </div>
      </footer>
    </div>
  );
}
