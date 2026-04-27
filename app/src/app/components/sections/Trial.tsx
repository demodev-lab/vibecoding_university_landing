const cards = [
  {
    num: "01",
    tag: "공통과정 맛보기",
    title: "클로드 코드 왕기초 + BMad Method 훈련",
    rows: [
      { k: "훈련 내용", v: "터미널 기본 영어, 클로드 설치, BMad Analysis chapter 실습" },
      { k: "준비물", v: "화상 회의가 가능한 노트북 + 추가 연결 모니터 1개 이상" },
      { k: "목적", v: "웹/앱/에이전트 프로그램 구축에 대해 공통과정의 접근법 맛보기" },
      { k: "추천", v: "비개발자 · 초보자" },
    ],
  },
  {
    num: "02",
    tag: "프리랜서 과정 맛보기",
    title: "영업 플랫폼 셋팅 훈련",
    rows: [
      { k: "훈련 내용", v: "나에게 맞는 영업 전략 수립" },
      { k: "준비사항", v: "크몽/숨고/위시켓 중 1개를 골라 프로필 · 자기소개 · 상품 셋팅" },
      { k: "목적", v: "프로그램 개발 외주 영업에 대해 프리랜서 창업과정의 접근법 맛보기" },
      { k: "추천", v: "개발자" },
    ],
  },
];

export default function Trial() {
  return (
    <section className="border-b border-line bg-surface px-10 pt-[110px] pb-24">
      <div className="mx-auto max-w-[1180px]">
        {/* 섹션 헤더 */}
        <div className="mb-12 flex items-end justify-between border-b border-line-strong pb-6">
          <div>
            <div className="mb-[18px] text-[11.5px] font-semibold tracking-[2px] text-muted">
              — TRIAL
            </div>
            <h2
              className="m-0 text-[44px] font-extrabold text-ink"
              style={{ letterSpacing: "-2px" }}
            >
              1:1 맛보기 훈련{" "}
              <span className="font-serif font-normal text-indigo">
                신청하세요
              </span>
            </h2>
          </div>
          <p className="m-0 max-w-[380px] text-[13.5px] leading-[1.65] text-muted">
            직강 1:1 맛보기 훈련. 실제 그룹세션 녹화 영상을 카카오톡 상담으로
            요청하실 수도 있습니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-2 border-t border-l border-line">
          {cards.map((card) => (
            <div
              key={card.num}
              className="border-r border-b border-line bg-white p-8 pb-9"
            >
              <div className="mb-[18px] flex items-baseline gap-3.5">
                <span className="font-serif text-[34px] font-normal text-indigo">
                  {card.num}
                </span>
                <span className="text-[11.5px] font-semibold tracking-[1.5px] text-muted">
                  {card.tag.toUpperCase()}
                </span>
              </div>
              <h3
                className="mb-[22px] text-[22px] font-extrabold leading-[1.3] text-ink"
                style={{ letterSpacing: "-0.8px" }}
              >
                {card.title}
              </h3>
              <div>
                {card.rows.map((r, j) => (
                  <div
                    key={j}
                    className={`grid grid-cols-[90px_1fr] gap-3.5 border-b border-line py-2.5 text-[12.5px] ${
                      j === 0 ? "border-t" : ""
                    }`}
                  >
                    <span className="font-medium text-muted">{r.k}</span>
                    <span className="leading-[1.55] text-ink">{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <button className="bg-ink px-6 py-[13px] text-[13.5px] font-bold text-white hover:opacity-90">
            맛보기 훈련 신청하기 →
          </button>
          <button className="px-1 py-[13px] text-[13.5px] font-semibold text-ink underline underline-offset-4 hover:opacity-80">
            카카오톡으로 영상 받기
          </button>
        </div>
      </div>
    </section>
  );
}
