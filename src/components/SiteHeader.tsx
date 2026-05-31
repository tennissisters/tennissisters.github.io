import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/lessons", label: "COACHING" },
  { to: "/schedule", label: "SCHEDULE" },
  { to: "/booking", label: "BOOK" },
] as const;

type Variant = "transparent" | "solid";

export function SiteHeader({ variant = "solid" }: { variant?: Variant }) {
  const isTransparent = variant === "transparent";
  return (
    <header
      className={`absolute left-0 right-0 top-0 z-40 ${
        isTransparent ? "" : "relative bg-[var(--navy-deep)]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link to="/" className="font-display text-base font-bold tracking-editorial text-white">
          COACH NOEY
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-semibold tracking-editorial text-white/80 transition-colors hover:text-white"
              activeProps={{ className: "text-xs font-semibold tracking-editorial text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/booking"
          className="rounded-none bg-[var(--amber)] px-5 py-3 text-xs font-bold tracking-editorial text-[var(--amber-foreground)] transition-transform hover:scale-[1.03]"
        >
          GET LESSON
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--navy-deep)] py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-base font-bold tracking-editorial text-white">
              COACH NOEY
            </div>
            <p className="mt-3 max-w-xs text-sm">
              Bangkok-based private tennis coaching. 12+ years bringing players from
              first swing to tournament ready.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-editorial text-white">EXPLORE</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/lessons" className="hover:text-white">Coaching</Link></li>
              <li><Link to="/schedule" className="hover:text-white">Schedule</Link></li>
              <li><Link to="/booking" className="hover:text-white">Book a Lesson</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold tracking-editorial text-white">CONTACT</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Bangkok, Thailand</li>
              <li>LINE: @coachnoey</li>
              <li>noey@coachnoey.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Coach Noey · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
