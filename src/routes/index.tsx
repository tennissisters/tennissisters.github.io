import { createFileRoute, Link } from "@tanstack/react-router";
import heroCoach from "@/assets/hero-coach.jpg";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach Noey · Bangkok Private Tennis Coaching" },
      { name: "description", content: "12+ years of elite tennis coaching in Bangkok. Private 1-on-1 lessons from first swing to tournament ready." },
      { property: "og:title", content: "Coach Noey · Bangkok Private Tennis Coaching" },
      { property: "og:description", content: "Bangkok-based private tennis coaching by Coach Noey." },
      { property: "og:image", content: heroCoach },
      { name: "twitter:image", content: heroCoach },
    ],
  }),
  component: Index,
});

const pressLogos = [
  "ATP TOUR", "WTA", "TENNIS BANGKOK", "LTAT", "SET FOR LIFE",
  "ASIA TENNIS", "BKK POST", "THE NATION", "BANGKOK 101",
];

const pillars = [
  {
    no: "01",
    title: "PRIVATE COACHING",
    desc: "One-on-one sessions designed around your goals, technique gaps, and pace. No template programs — every lesson is custom.",
  },
  {
    no: "02",
    title: "TOURNAMENT PREP",
    desc: "Match simulation, tactical patterns, mental performance. Built for players entering club competitions, ITF, or national rankings.",
  },
  {
    no: "03",
    title: "JUNIORS DEVELOPMENT",
    desc: "Long-term technical foundation for ages 8–17. Movement, motor skills, competitive mindset — without burning out the love of the game.",
  },
];

const stats = [
  { v: "12+", l: "YEARS COACHING" },
  { v: "300+", l: "PLAYERS DEVELOPED" },
  { v: "20+", l: "TOURNAMENT WINS" },
  { v: "BKK", l: "ALL COURTS" },
];

function Index() {
  return (
    <div className="bg-background">
      {/* HERO — full bleed image with overlaid editorial type */}
      <section className="relative min-h-screen bg-[var(--navy-deep)]">
        <SiteHeader variant="transparent" />

        <div className="absolute inset-0">
          <img
            src={heroCoach}
            alt="Coach Noey on a Bangkok clay court at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-white">
            <span className="block text-outline text-5xl md:text-7xl lg:text-8xl">
              ONE OF
            </span>
            <span className="block text-outline text-5xl md:text-7xl lg:text-8xl">
              BANGKOK'S MOST
            </span>
            <span className="mt-2 block text-5xl md:text-7xl lg:text-8xl">
              trusted tennis<span className="text-[var(--amber)]">.</span>
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl">
              coaches<span className="text-[var(--amber)]">.</span>
            </span>
          </h1>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-[var(--amber)] px-8 py-4 text-xs font-bold tracking-editorial text-[var(--amber-foreground)] shadow-[var(--shadow-amber)] transition-transform hover:scale-[1.03]"
            >
              BOOK A SESSION
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/lessons"
              className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-xs font-bold tracking-editorial text-white transition-colors hover:bg-white/10"
            >
              EXPLORE COACHING
            </Link>
          </div>
        </div>

        {/* Side label */}
        <div className="pointer-events-none absolute bottom-8 right-6 hidden text-xs tracking-editorial text-white/60 md:block md:right-10">
          BANGKOK · EST. 2012
        </div>
      </section>

      {/* PRESS / FEATURED BAR */}
      <section className="border-y border-border bg-[var(--navy)] py-10 text-white/70">
        <div className="mx-auto mb-6 max-w-7xl px-6 text-center text-xs tracking-editorial md:px-10">
          AS SEEN IN
        </div>
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-16 px-6 animate-marquee">
            {[...pressLogos, ...pressLogos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap font-display text-xl font-bold tracking-editorial text-white/50"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO BLOCK — editorial split */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <div className="text-xs font-bold tracking-editorial text-[var(--amber)]">
              — THE STORY
            </div>
            <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1] md:text-5xl">
              Bangkok's most precise tennis instruction.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="font-display text-xl leading-relaxed text-foreground/80 md:text-2xl">
              For over a decade Coach Noey has shaped serious players across Bangkok —
              from absolute beginners discovering the sport to nationally-ranked
              juniors preparing for tournaments. Every session is built on
              <span className="text-[var(--navy)] font-semibold"> measurable technique</span>,
              tactical clarity, and the kind of belief that turns
              practice into performance.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl font-extrabold text-[var(--navy)]">
                    {s.v}
                  </div>
                  <div className="mt-2 text-xs tracking-editorial text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS — dark editorial */}
      <section className="bg-[var(--navy-deep)] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs font-bold tracking-editorial text-[var(--amber)]">
                — WHAT I COACH
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1] md:text-6xl">
                Three programs. One standard.
              </h2>
            </div>
            <Link
              to="/lessons"
              className="text-xs font-bold tracking-editorial text-white/70 hover:text-[var(--amber)]"
            >
              SEE ALL PROGRAMS →
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {pillars.map((p) => (
              <article
                key={p.no}
                className="group relative bg-[var(--navy-deep)] p-10 transition-colors hover:bg-[var(--navy)]"
              >
                <div className="font-display text-sm font-bold tracking-editorial text-[var(--amber)]">
                  {p.no}
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold uppercase leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{p.desc}</p>
                <div className="mt-8 inline-block border-b border-[var(--amber)] pb-1 text-xs font-bold tracking-editorial text-[var(--amber)] opacity-0 transition-opacity group-hover:opacity-100">
                  LEARN MORE
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / CTA */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="text-xs font-bold tracking-editorial text-[var(--amber)]">— PHILOSOPHY</p>
          <blockquote className="mt-8 font-display text-3xl font-extrabold uppercase leading-tight text-foreground md:text-5xl">
            "Talent isn't given. It's built —<br />
            one disciplined hour at a time."
          </blockquote>
          <p className="mt-6 text-xs tracking-editorial text-muted-foreground">
            COACH NOEY
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 bg-[var(--navy)] px-8 py-4 text-xs font-bold tracking-editorial text-white transition-transform hover:scale-[1.03]"
            >
              BOOK YOUR FIRST SESSION →
            </Link>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-xs font-bold tracking-editorial text-foreground transition-colors hover:bg-foreground/5"
            >
              VIEW AVAILABILITY
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
