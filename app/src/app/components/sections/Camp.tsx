const metas = [
  {
    label: "위치",
    lines: ["영등포구 문래동", "기술 질의·영업 대화가 자연스럽게 오가는 공간"],
  },
  {
    label: "장비",
    lines: [
      "가로 160cm 데스크 + 의자",
      "듀얼 모니터 + 웹캠",
      "탕비실 (정수기·커피·냉장고)",
    ],
  },
  {
    label: "서비스",
    lines: [
      "기술 담당관 1인 상주 (9–6)",
      "정기 방문 및 영업 지원",
      "외주 실행 동선 점검 및 수주 대응",
    ],
  },
];

export default function Camp() {
  return (
    <section className="border-b border-line bg-surface px-10 py-[110px]">
      <div className="mx-auto max-w-[1180px]">
        {/* 헤더 */}
        <div className="mb-12 grid grid-cols-2 items-end gap-20">
          <div>
            <div className="mb-[18px] text-[11.5px] font-semibold tracking-[2px] text-muted">
              — VIBE OUTSOURCE CAMP
            </div>
            <h2
              className="m-0 text-[52px] font-extrabold leading-[1.1] text-ink"
              style={{ letterSpacing: "-2px" }}
            >
              바이브 외주{" "}
              <span className="font-serif font-normal text-indigo">훈련소</span>
            </h2>
          </div>
          <p className="m-0 max-w-[460px] text-sm leading-[1.75] text-ink-soft">
            20명의 현직 외주 개발자가 상주하며 기술 질의에 즉시 대응. 단순 좌석 제공이
            아니라{" "}
            <span className="font-bold text-ink">
              베테랑이 직접 달라붙어 외주 수주부터 납품까지 끌고 가는 사람
            </span>
            을 만드는 실전 거점입니다.
          </p>
        </div>

        {/* 정책 블록 */}
        <div className="grid grid-cols-[1fr_1fr_1.2fr] border-t border-line-strong border-b border-b-line">
          <div className="border-r border-line p-7 pb-8">
            <div className="mb-3.5 text-[10.5px] font-bold tracking-[2px] text-muted">
              이용 조건
            </div>
            <div className="mb-2.5 text-[17px] font-bold text-ink" style={{ letterSpacing: "-0.5px" }}>
              공통 과정 수료자 한정
            </div>
            <div className="text-[12.5px] leading-[1.7] text-muted">
              기본 훈련을 끝낸 뒤 실제 외주 수주 훈련에 들어가는 사람만 사용할 수
              있습니다.
            </div>
          </div>
          <div className="border-r border-line p-7 pb-8">
            <div className="mb-3.5 text-[10.5px] font-bold tracking-[2px] text-muted">
              환불 정책
            </div>
            <div className="mb-2.5 text-[17px] font-bold text-ink" style={{ letterSpacing: "-0.5px" }}>
              3개월 전업 기준 1천만원 미만이면 전액 환불
            </div>
            <div className="text-[12.5px] leading-[1.7] text-muted">
              프리랜서 과정 수강생은 3개월 입주 가능. 전업 수주액이 1천만원
              미만이면 4월 기준 300만원 전액 환불합니다.
            </div>
          </div>
          <div className="bg-bg p-7 pb-8">
            <div className="mb-3.5 text-[10.5px] font-bold tracking-[2px] text-muted">
              운영 핵심
            </div>
            <div className="font-serif text-[19px] font-normal leading-[1.5] text-ink" style={{ letterSpacing: "-0.5px" }}>
              혼자 공부하는 공간이 아니라,{" "}
              <span className="text-indigo">
                외주 수주 → 납품 → 서비스 정형화
              </span>
              까지 이어가는 훈련 공간입니다.
            </div>
          </div>
        </div>

        {/* 메타 정보 */}
        <div className="grid grid-cols-3 border-b border-line-strong">
          {metas.map((m, i) => (
            <div
              key={i}
              className={`p-7 pb-8 ${i < 2 ? "border-r border-line" : ""}`}
            >
              <div className="mb-4 text-[10.5px] font-bold tracking-[2px] text-muted">
                {m.label}
              </div>
              {m.lines.map((l, j) => (
                <div
                  key={j}
                  className={`text-[13px] leading-[1.55] text-ink-soft ${j > 0 ? "mt-2" : ""}`}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs italic text-muted">
          문래동 30평 규모 · 10명 정도가 함께 일하는 외주 훈련소 (수요에 따라
          유동 운영)
        </div>
      </div>
    </section>
  );
}
