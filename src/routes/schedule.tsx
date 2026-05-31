import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "수업 일정표 · Coach Noey" },
      { name: "description", content: "Noey 코치의 주간 가능 시간 및 예약 현황." },
      { property: "og:title", content: "수업 일정표 · Coach Noey" },
      { property: "og:description", content: "주간 가능 시간을 확인하고 예약하세요." },
    ],
  }),
  component: SchedulePage,
});

const days = ["월", "화", "수", "목", "금", "토", "일"];
const hours = ["06:00", "08:00", "10:00", "15:00", "17:00", "19:00"];

// 0 = 가능 · 1 = 예약됨 · 2 = 휴무
const grid: number[][] = [
  // 월 화 수 목 금 토 일
  [0, 0, 1, 0, 0, 1, 2], // 06:00
  [1, 0, 0, 1, 0, 0, 2], // 08:00
  [0, 1, 0, 0, 1, 0, 2], // 10:00
  [2, 2, 2, 2, 2, 0, 0], // 15:00
  [0, 0, 0, 1, 0, 1, 0], // 17:00
  [1, 0, 1, 0, 0, 0, 1], // 19:00
];

const legend = [
  { v: 0, label: "예약 가능", className: "bg-[var(--ball)] text-[var(--ball-foreground)]" },
  { v: 1, label: "예약 완료", className: "bg-muted text-muted-foreground line-through" },
  { v: 2, label: "휴무", className: "bg-secondary text-muted-foreground/60" },
];

function cellClass(v: number) {
  return legend.find((l) => l.v === v)!.className;
}
function cellLabel(v: number) {
  if (v === 0) return "가능";
  if (v === 1) return "예약됨";
  return "휴무";
}

function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--clay)]">
            Weekly Schedule
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">
            이번 주 가능 시간
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            아래 일정은 매주 일요일 저녁에 업데이트됩니다. 원하는 시간이 예약 가능 상태라면
            예약 페이지에서 신청해 주세요.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {legend.map((l) => (
              <span
                key={l.v}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${l.className}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-border bg-secondary/40">
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  시간
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    className="p-4 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((h, ri) => (
                <tr key={h} className="border-b border-border last:border-0">
                  <td className="p-4 text-sm font-medium">{h}</td>
                  {days.map((_, ci) => {
                    const v = grid[ri][ci];
                    return (
                      <td key={ci} className="p-2 text-center">
                        <span
                          className={`inline-flex w-full max-w-[88px] items-center justify-center rounded-md px-3 py-2 text-xs font-medium ${cellClass(
                            v,
                          )}`}
                        >
                          {cellLabel(v)}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/booking"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]"
          >
            원하는 시간 예약하기 →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
