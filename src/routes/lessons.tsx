import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "레슨 안내 · Coach Noey" },
      { name: "description", content: "방콕 Noey 코치의 1:1 테니스 레슨 패키지 및 요금 안내." },
      { property: "og:title", content: "레슨 안내 · Coach Noey" },
      { property: "og:description", content: "1:1 / 2인 / 시합 준비 레슨 패키지." },
    ],
  }),
  component: LessonsPage,
});

const lessons = [
  {
    name: "Starter",
    tagline: "테니스가 처음이라면",
    price: "1,200",
    duration: "60분 · 1:1",
    features: ["그립과 기본 자세", "포핸드/백핸드 기초", "코트 매너", "장비 추천"],
  },
  {
    name: "Improver",
    tagline: "한 단계 더 성장하고 싶다면",
    price: "1,400",
    duration: "90분 · 1:1",
    featured: true,
    features: ["스트로크 교정", "서브 & 발리", "랠리 트레이닝", "주간 피드백 영상"],
  },
  {
    name: "Match Ready",
    tagline: "시합과 토너먼트 준비",
    price: "1,800",
    duration: "90분 · 1:1",
    features: ["전술 & 코트 포지셔닝", "시합 시뮬레이션", "체력 & 멘탈 코칭", "스트로크 영상 분석"],
  },
];

const courts = [
  { name: "Sukhumvit Sports Club", area: "Sukhumvit", surface: "Hard" },
  { name: "RBSC (Royal Bangkok Sports Club)", area: "Pathum Wan", surface: "Clay" },
  { name: "ATTA Tennis Court", area: "Sukhumvit 26", surface: "Hard" },
  { name: "Central Sports Club", area: "Thonglor", surface: "Hard / Clay" },
];

function LessonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--clay)]">
            Lessons & Pricing
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">
            나에게 맞는 레슨을 골라보세요.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            모든 레슨은 1:1 개인레슨이며, 가격은 코치비 기준입니다. 코트 사용료는 별도이며
            예약 시 안내해 드립니다. (가격 단위: THB)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {lessons.map((l) => (
            <article
              key={l.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-[var(--shadow-card)] ${
                l.featured
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              {l.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[var(--ball)] px-3 py-1 text-xs font-semibold text-[var(--ball-foreground)]">
                  가장 인기
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{l.name}</h3>
              <p className={`mt-1 text-sm ${l.featured ? "text-white/80" : "text-muted-foreground"}`}>
                {l.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">฿{l.price}</span>
                <span className={`text-sm ${l.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  /회
                </span>
              </div>
              <p className={`mt-1 text-xs ${l.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {l.duration}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {l.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        l.featured ? "bg-[var(--ball)]" : "bg-primary"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/booking"
                className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  l.featured
                    ? "bg-[var(--ball)] text-[var(--ball-foreground)]"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                이 레슨 예약하기
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">자주 이용하는 코트</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            방콕 시내 주요 코트로 출장 레슨이 가능합니다. 원하시는 코트를 예약 시 알려주세요.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {courts.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-6 py-5"
              >
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.area}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {c.surface}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
