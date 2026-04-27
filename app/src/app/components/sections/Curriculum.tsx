type CourseData = {
  num: string;
  tag: string;
  weeks: string;
  title: string;
  sub?: string;
  desc: string;
  items: { t: string; d: string }[];
  checks: string[];
  outcome: string;
  price: string;
  priceOrig?: string;
  total: string;
  note: string;
};

const common: CourseData = {
  num: "I",
  tag: "COMMON",
  weeks: "4–8주",
  title: "공통 과정",
  desc: "20명의 현직 외주 개발자가 직접 달라붙어 도제식으로 가르치고, 흡수력에 따라 완급을 조절하며 최대·최선의 실습을 진행합니다.",
  items: [
    { t: "랜딩페이지 구축", d: "고객을 설득하는 첫 페이지" },
    { t: "웹서비스 구축", d: "CRUD 기반 실전 웹앱" },
    { t: "플랫폼 구축", d: "양면 시장 플랫폼 설계·구현" },
    { t: "AI Agent 프로덕트 구축", d: "AI 에이전트 기반 서비스 설계·구현" },
  ],
  checks: [
    "1:1 온라인 코칭 · 그룹 세션 · 강의 영상 혼합",
    "개인이 이해하고 체득할 때까지 최적화된 강의 형태",
    "랜딩 · 웹 · 모바일 앱 · AI까지 실전형으로 구축 및 배포",
  ],
  outcome: "혼자서도 웹/앱을 만들고 배포할 수 있는 상태",
  price: "30만원",
  total: "300만원",
  note: "월 분할 · 10개월 무이자 할부",
};

const freelancer: CourseData = {
  num: "II",
  tag: "FREELANCER",
  weeks: "5주",
  title: "프리랜서 창업 과정",
  sub: "공통 과정 포함가",
  desc: "100억 외주 용역을 수행하며 쌓은 세일즈부터 납품 완료까지의 노하우를 전수받으며 첫 500만원 매출을 만듭니다.",
  items: [
    { t: "외주영역 A–Z", d: "10만원–10억원 규모별 프로젝트 전수" },
    { t: "전략 수립", d: "나에게 최적화된 영업 전략 및 성장 계획" },
    { t: "포트폴리오 준비", d: "판매에 직접 집중되도록 가상 프로젝트 진행" },
    { t: "영업 시작", d: "전 과정 직접 지도 및 소프트 랜딩" },
  ],
  checks: [
    "사업자 등록부터 플랫폼 셋팅까지 1:1 리드",
    "초기 영업 과정에서의 수많은 결정에 빠르게 대응",
    "서비스 정형화 컨설팅 및 스케일업 지원",
  ],
  outcome: "첫 클라이언트 수주, 월 500만원 수입 시작",
  price: "60만원",
  priceOrig: "100만원",
  total: "600만원",
  note: "공통 과정 비용 300만원 포함 · 4월 40% 할인 적용",
};

function CourseRow({ data }: { data: CourseData }) {
  return (
    <div className="border-t border-line-strong py-14">
      <div className="grid grid-cols-[180px_1fr_260px] gap-12">
        {/* 좌측: 번호 + 태그 */}
        <div>
          <div className="font-serif text-[56px] font-normal leading-none text-indigo" style={{ letterSpacing: "-1px" }}>
            {data.num}
          </div>
          <div className="mt-[18px] text-[10.5px] font-bold tracking-[2px] text-muted">
            {data.tag}
          </div>
          <div className="mt-1.5 text-xs text-muted">{data.weeks}</div>
        </div>

        {/* 가운데: 제목 + 상세 */}
        <div>
          <h3
            className="m-0 text-[34px] font-extrabold leading-[1.2] text-ink"
            style={{ letterSpacing: "-1.5px" }}
          >
            {data.title}
          </h3>
          {data.sub && (
            <div className="mt-2 font-serif text-[15px] italic text-indigo">
              — {data.sub}
            </div>
          )}
          <p className="mt-[18px] mb-6 max-w-[580px] text-sm leading-[1.7] text-ink-soft">
            {data.desc}
          </p>

          <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-4">
            {data.items.map((it, i) => (
              <div key={i} className="flex gap-3.5">
                <span className="mt-0.5 font-mono text-[11px] font-bold text-indigo">
                  0{i + 1}
                </span>
                <div>
                  <div className="text-sm font-bold text-ink" style={{ letterSpacing: "-0.3px" }}>
                    {it.t}
                  </div>
                  <div className="mt-0.5 text-[12.5px] leading-[1.5] text-muted">
                    {it.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-dashed border-line pt-5">
            {data.checks.map((ck, i) => (
              <div key={i} className="flex gap-2.5 text-[12.5px] leading-[1.8] text-ink-soft">
                <span className="text-indigo">—</span>
                {ck}
              </div>
            ))}
          </div>

          <div className="mt-[22px] text-[13px] text-ink">
            <span className="mr-2 text-[10.5px] font-semibold tracking-[1px] text-muted">
              결과
            </span>
            {data.outcome}
          </div>
        </div>

        {/* 우측: 가격 */}
        <div className="border-l border-line pl-7">
          <div className="mb-3.5 text-[10.5px] font-bold tracking-[2px] text-muted">
            수강료
          </div>
          {data.priceOrig && (
            <div className="mb-0.5 text-[13px] text-dim line-through">
              월 {data.priceOrig}
            </div>
          )}
          <div className="flex items-baseline">
            <span className="font-serif text-[54px] font-normal leading-none text-ink" style={{ letterSpacing: "-2px" }}>
              {data.price}
            </span>
            <span className="ml-1.5 text-[13px] text-muted">/ 월</span>
          </div>
          <div className="mt-2 text-xs text-muted">총 {data.total}</div>
          <div className="mt-5 text-[11.5px] leading-[1.6] text-muted">
            {data.note}
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <button className="bg-ink px-3.5 py-[11px] text-[12.5px] font-bold text-white hover:opacity-90">
              카카오톡 문의 →
            </button>
            <button className="px-1 py-2.5 text-left text-xs font-semibold text-ink underline underline-offset-4 hover:opacity-80">
              맛보기 훈련 신청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Curriculum() {
  return (
    <section className="bg-bg px-10 pt-[100px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        {/* 섹션 헤더 */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-[18px] text-[11.5px] font-semibold tracking-[2px] text-muted">
              — CURRICULUM
            </div>
            <h2
              className="m-0 text-[52px] font-extrabold text-ink"
              style={{ letterSpacing: "-2px" }}
            >
              과정별{" "}
              <span className="font-serif font-normal text-indigo">
                커리큘럼
              </span>
            </h2>
          </div>
          <div className="text-[13px] italic text-muted">
            영상이 아닌, 1:1 밀착 지도입니다.
          </div>
        </div>

        <CourseRow data={common} />
        <CourseRow data={freelancer} />

        {/* Promise */}
        <div className="grid grid-cols-[180px_1fr] gap-12 border-t border-line-strong py-10">
          <div className="text-[10.5px] font-bold tracking-[2px] text-muted">
            PROMISE
          </div>
          <div>
            <div
              className="text-[22px] font-extrabold text-ink"
              style={{ letterSpacing: "-0.8px" }}
            >
              첫 프로젝트, 납품까지 함께합니다.
            </div>
            <div className="mt-3 max-w-[720px] text-[13.5px] leading-[1.75] text-ink-soft">
              첫 수주 프로젝트는 최소 10회 이상 외주 경험을 가진 베테랑 개발자가 견적부터 납품 완료까지 함께 감독합니다. 이후에도
              무제한·무기한으로 20명의 현직 개발자 인프라를 활용해 컨설팅을 이어갈 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
