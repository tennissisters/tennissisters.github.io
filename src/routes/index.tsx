import { createFileRoute, Link } from "@tanstack/react-router";
import heroCoach from "@/assets/hero-coach.jpg";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coach Noey · 방콕 테니스 개인레슨" },
      { name: "description", content: "ITF 경력의 Noey 코치와 함께하는 방콕 1:1 테니스 레슨. 초보·중급·시합 준비까지 맞춤 트레이닝." },
      { property: "og:title", content: "Coach Noey · 방콕 테니스 개인레슨" },
      { property: "og:description", content: "ITF 경력의 Noey 코치와 함께하는 방콕 1:1 테니스 레슨." },
      { property: "og:image", content: heroCoach },
      { name: "twitter:image", content: heroCoach },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "12+", label: "코칭 경력 (년)" },
  { value: "300+", label: "수강생" },
  { value: "5★", label: "평균 평점" },
  { value: "BKK", label: "방콕 전 지역" },
];

const strengths = [
  {
    title: "체계적인 1:1 커리큘럼",
    desc: "그립·풋워크·스트로크부터 전술까지, 레벨에 맞춘 단계별 트레이닝.",
  },
  {
    title: "원어민 영어/한국어 가능",
    desc: "초보자도 편안하게 소통하며 배울 수 있는 이중언어 코칭.",
  },
  {
    title: "방콕 주요 코트 출장",
    desc: "수쿰빗·통로·실롬 등 원하는 코트로 직접 찾아갑니다.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCoach}
            alt="방콕 클레이 코트에서 포핸드 스트로크 자세를 보여주는 Noey 코치"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[640px] max-w-6xl flex-col justify-end px-6 pb-16 pt-32 text-[var(--court-foreground)]">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--ball)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--ball-foreground)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ball-foreground)]" />
            Bangkok · Private Coaching
          </span>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">
            테니스를 더 잘하고 싶다면, <br />
            <span className="text-[var(--ball)]">Coach Noey</span>와 함께.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            방콕 어디서든 1:1 맞춤 레슨. 초보자의 첫 스윙부터 시합 준비까지,
            12년 경력의 코치가 함께합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              className="rounded-full bg-[var(--ball)] px-7 py-3.5 text-sm font-semibold text-[var(--ball-foreground)] shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
            >
              레슨 예약하기 →
            </Link>
            <Link
              to="/lessons"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              레슨 살펴보기
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--clay)]">
            Why Coach Noey
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            "잘 가르치는 것"에 집착합니다.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((s, i) => (
            <article
              key={s.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">
                {i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="overflow-hidden rounded-3xl p-12 text-[var(--court-foreground)] shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--gradient-court)" }}
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">
                첫 레슨 예약, 30초면 충분합니다.
              </h3>
              <p className="mt-2 text-white/80">원하는 날짜와 코트를 알려주세요.</p>
            </div>
            <Link
              to="/booking"
              className="rounded-full bg-[var(--ball)] px-7 py-3.5 text-sm font-semibold text-[var(--ball-foreground)] transition-transform hover:scale-[1.02]"
            >
              지금 예약하기 →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
