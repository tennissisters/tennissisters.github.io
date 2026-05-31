import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "레슨 예약 · Coach Noey" },
      { name: "description", content: "원하는 날짜와 시간으로 Noey 코치의 테니스 레슨을 예약하세요." },
      { property: "og:title", content: "레슨 예약 · Coach Noey" },
      { property: "og:description", content: "원하는 날짜와 시간으로 예약하세요." },
    ],
  }),
  component: BookingPage,
});

const lessonTypes = ["Starter (60분)", "Improver (90분)", "Match Ready (90분)"];
const courts = ["Sukhumvit Sports Club", "RBSC", "ATTA Tennis Court", "Central Sports Club", "기타 (메모 작성)"];

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    lesson: lessonTypes[1],
    court: courts[0],
    date: "",
    time: "",
    notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--amber)]">
            Book a Lesson
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold md:text-6xl">
            레슨 예약
          </h1>
          <p className="mt-4 text-muted-foreground">
            아래 정보를 입력해 주시면 Noey 코치가 24시간 이내에 연락드립니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {submitted ? (
          <div className="rounded-2xl border border-primary bg-primary p-10 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[var(--amber)] text-2xl text-[var(--amber-foreground)]">
              ✓
            </div>
            <h2 className="font-display text-3xl font-bold">예약 신청이 접수되었습니다!</h2>
            <p className="mt-3 text-white/85">
              {form.name}님, {form.date} {form.time} {form.lesson} 신청해주셔서 감사합니다.
              <br />
              곧 {form.contact || form.email}로 확정 연락드릴게요.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ ...form, date: "", time: "", notes: "" });
              }}
              className="mt-6 rounded-full bg-[var(--amber)] px-6 py-3 text-sm font-semibold text-[var(--amber-foreground)]"
            >
              새 예약하기
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="이름 *">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-style"
                />
              </Field>
              <Field label="연락처 (Line / WhatsApp)">
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="@line_id 또는 +66..."
                  className="input-style"
                />
              </Field>
            </div>

            <Field label="이메일 *">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input-style"
              />
            </Field>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="레슨 종류">
                <select name="lesson" value={form.lesson} onChange={handleChange} className="input-style">
                  {lessonTypes.map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </Field>
              <Field label="희망 코트">
                <select name="court" value={form.court} onChange={handleChange} className="input-style">
                  {courts.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="날짜 *">
                <input
                  required
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="input-style"
                />
              </Field>
              <Field label="시간 *">
                <input
                  required
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="input-style"
                />
              </Field>
            </div>

            <Field label="추가 요청사항">
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="실력 수준, 특별히 배우고 싶은 부분 등을 알려주세요."
                className="input-style resize-none"
              />
            </Field>

            <button
              type="submit"
              className="mt-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.01]"
            >
              예약 신청하기 →
            </button>
            <p className="text-center text-xs text-muted-foreground">
              * 이 데모는 폼 제출만 동작합니다. 백엔드 저장과 이메일 알림은 다음 단계에서 추가합니다.
            </p>
          </form>
        )}
      </section>

      <SiteFooter />

      <style>{`
        .input-style {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.65rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color .15s, box-shadow .15s;
        }
        .input-style:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.34 0.07 155 / 0.15);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
