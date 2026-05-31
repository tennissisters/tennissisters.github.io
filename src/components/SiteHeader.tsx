import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "홈" },
  { to: "/lessons", label: "레슨" },
  { to: "/schedule", label: "일정표" },
  { to: "/booking", label: "예약" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ball)] text-[var(--ball-foreground)] text-sm font-bold shadow-[var(--shadow-card)]"
          >
            N
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Coach Noey · Bangkok
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm bg-primary text-primary-foreground",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Coach Noey Tennis Bangkok</p>
        <p>방콕 1:1 테니스 개인레슨 · 초보부터 토너먼트 준비까지</p>
      </div>
    </footer>
  );
}
