export default function Hero() {
  const stats = [
    { tag: "비개발자 기준", value: "7주", label: "첫 수주 소요 평균 (최단 4주)" },
    { tag: "비개발자 기준", value: "427만원", label: "평균 단일 프로젝트 계약 규모" },
    { tag: "개발자 기준", value: "3주", label: "첫 수주 소요 평균 (최단 1주)" },
    { tag: "개발자 기준", value: "2,140만원", label: "평균 단일 프로젝트 계약 규모" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      {/* 배경 DEMODEV 대각선 워드마크 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <div
          className="whitespace-nowrap font-sans text-[360px] font-black leading-[0.85] text-indigo-light opacity-35"
          style={{ letterSpacing: -18, transform: "rotate(-14deg)" }}
        >
          DEMODEV
        </div>
      </div>

      {/* 상단 메타 바 */}
      <div className="relative z-[2] flex justify-between border-b border-line px-10 py-3.5 text-[11.5px] tracking-wide text-muted">
        <span>No. 042 / 바이브코딩 1인 개발사 창업</span>
        <span>EST. 2023 · SEOUL MOONRAE</span>
      </div>

      <div className="relative z-[2] mx-auto max-w-[1180px] px-10 pt-20 pb-[120px]">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2.5 text-[13px] font-medium text-muted">
          <span className="inline-block h-px w-7 bg-muted" />
          큰 돈 내고 개발 외주 맡기기 불안하셨죠?
        </div>

        {/* Headline */}
        <h1
          className="m-0 max-w-[1000px] text-[92px] font-extrabold leading-[1.02] text-ink"
          style={{ letterSpacing: "-3.5px" }}
        >
          30일 만에,
          <br />
          <span
            className="font-serif font-normal text-indigo"
            style={{ letterSpacing: "-2.5px" }}
          >
            500만원 외주
          </span>
          .
        </h1>

        {/* 서브카피 */}
        <p className="mt-7 max-w-[520px] text-base leading-[1.7] text-muted">
          20명의 현직 외주 개발자가 직접 달라붙어 바이브코딩을 가르치는{" "}
          <span className="font-bold text-ink">강력하고도 유일한 커리큘럼</span>.
          첫 수주부터 10회 이상 프로젝트를 완수한 베테랑이 함께 봐드립니다.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <button className="bg-ink px-[26px] py-3.5 text-sm font-bold text-white hover:opacity-90">
            무료 맛보기 신청 →
          </button>
          <button className="px-1 py-3.5 text-[13.5px] font-semibold text-ink underline underline-offset-4 hover:opacity-80">
            커리큘럼 자세히 보기
          </button>
        </div>

        {/* 수치 테이블 */}
        <div className="mt-[110px] grid grid-cols-4 gap-6 border-t border-line-strong pt-8">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                {s.tag}
              </div>
              <div
                className="text-[42px] font-extrabold leading-none text-ink"
                style={{ letterSpacing: "-1.5px" }}
              >
                {s.value}
              </div>
              <div className="mt-2.5 text-xs leading-[1.55] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
