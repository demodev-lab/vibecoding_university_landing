"use client";

import { useEffect, useState } from "react";

const months: { m: string; d: string; done?: boolean; active?: boolean }[] = [
  { m: "2월", d: "50%", done: true },
  { m: "3월", d: "45%", done: true },
  { m: "4월", d: "40%", active: true },
  { m: "5월", d: "35%" },
  { m: "6월", d: "30%" },
  { m: "7월", d: "25%" },
];

function getTimeLeft() {
  const now = new Date();
  const endOfApril = new Date(now.getFullYear(), 3, 30, 23, 59, 59);
  if (now > endOfApril) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  const diff = endOfApril.getTime() - now.getTime();
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Timer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const countdown = [
    { n: pad(time.days), l: "DAY" },
    { n: pad(time.hours), l: "HR" },
    { n: pad(time.minutes), l: "MIN" },
    { n: pad(time.seconds), l: "SEC" },
  ];

  return (
    <section className="border-b border-line bg-bg px-10 py-20">
      <div className="mx-auto max-w-[1180px] border-[1.5px] border-line-strong bg-white px-9 py-8">
        <div className="grid grid-cols-[1.2fr_1fr] items-end gap-10 border-b border-line pb-6">
          {/* 좌측 헤드라인 */}
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-[2px] text-muted">
              — APRIL PROMOTION
            </div>
            <div
              className="text-[40px] font-extrabold leading-[1.15] text-ink"
              style={{ letterSpacing: "-1.5px" }}
            >
              프리랜서 창업 과정
              <br />
              <span className="font-serif font-normal text-indigo">
                사십 퍼센트 할인
              </span>
            </div>
          </div>

          {/* 우측 카운트다운 */}
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-[2px] text-muted">
              — 4월 마감까지
            </div>
            <div className="flex items-baseline gap-5">
              {countdown.map((t, i) => (
                <div key={i}>
                  <div className="font-serif text-5xl font-normal leading-none text-ink" style={{ letterSpacing: "-1px" }}>
                    {t.n}
                  </div>
                  <div className="mt-1.5 text-[10px] tracking-[1.5px] text-muted">
                    {t.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 할인율 */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
          <div className="text-xs italic text-muted">
            매월 할인율이 5%씩 줄어듭니다 — 지금이 가장 좋은 시점입니다.
          </div>
          <div className="flex items-baseline text-[13px]">
            {months.map((m, i) => (
              <span
                key={i}
                className={`px-3.5 ${i !== 0 ? "border-l border-line" : ""} ${
                  m.active
                    ? "font-extrabold text-indigo"
                    : m.done
                      ? "text-dim line-through"
                      : "font-medium text-ink-soft"
                }`}
              >
                {m.m} {m.d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
