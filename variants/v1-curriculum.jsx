// Curriculum — 카드/이모지 최소화. 에디토리얼 레이아웃: 좌측 목차, 우측 상세
function V1Curriculum() {
  const c = window.v1c;

  const common = {
    num: 'I',
    tag: 'COMMON',
    weeks: '4–8주',
    title: '공통 과정',
    desc: '직접 도제식으로 가르치고, 흡수력에 따라 완급을 조절하며 최대·최선의 실습을 진행합니다.',
    items: [
      { t: '랜딩페이지 구축', d: '고객을 설득하는 첫 페이지' },
      { t: '웹서비스 구축', d: 'CRUD 기반 실전 웹앱' },
      { t: '플랫폼 구축', d: '양면 시장 플랫폼 설계·구현' },
      { t: 'AI Agent 프로덕트 구축', d: 'AI 에이전트 기반 서비스 설계·구현' },
    ],
    checks: [
      '1:1 온라인 코칭 · 그룹 세션 · 강의 영상 혼합',
      '개인이 이해하고 체득할 때까지 최적화된 강의 형태',
      '랜딩 · 웹 · 모바일 앱 · AI까지 실전형으로 구축 및 배포',
    ],
    outcome: '혼자서도 웹/앱을 만들고 배포할 수 있는 상태',
    price: '30만원',
    total: '300만원',
    note: '월 분할 · 10개월 무이자 할부',
  };
  const free = {
    num: 'II',
    tag: 'FREELANCER',
    weeks: '5주',
    title: '프리랜서 창업 과정',
    sub: '공통 과정 포함가',
    desc: '100억 외주 용역을 수행하며 쌓은 세일즈부터 납품 완료까지의 노하우를 전수받으며 첫 500만원 매출을 만듭니다.',
    items: [
      { t: '외주영역 A–Z', d: '10만원–10억원 규모별 프로젝트 전수' },
      { t: '전략 수립', d: '나에게 최적화된 영업 전략 및 성장 계획' },
      { t: '포트폴리오 준비', d: '판매에 직접 집중되도록 가상 프로젝트 진행' },
      { t: '영업 시작', d: '전 과정 직접 지도 및 소프트 랜딩' },
    ],
    checks: [
      '사업자 등록부터 플랫폼 셋팅까지 1:1 리드',
      '초기 영업 과정에서의 수많은 결정에 빠르게 대응',
      '서비스 정형화 컨설팅 및 스케일업 지원',
    ],
    outcome: '첫 클라이언트 수주, 월 500만원 수입 시작',
    price: '60만원',
    priceOrig: '100만원',
    total: '600만원',
    note: '공통 과정 비용 300만원 포함 · 4월 40% 할인 적용',
  };

  const Row = ({ data }) => (
    <div style={{ borderTop: `1px solid ${c.lineStrong}`, padding: '56px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 260px', gap: 48 }}>
        {/* left: 번호 + 태그 */}
        <div>
          <div style={{ fontFamily: c.serif, fontSize: 56, fontWeight: 400, color: c.indigo, lineHeight: 1, letterSpacing: -1 }}>{data.num}</div>
          <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginTop: 18 }}>{data.tag}</div>
          <div style={{ fontFamily: c.sans, fontSize: 12, color: c.muted, marginTop: 6 }}>{data.weeks}</div>
        </div>

        {/* middle: 제목 + 상세 */}
        <div>
          <h3 style={{ fontFamily: c.sans, fontSize: 34, fontWeight: 800, color: c.ink, letterSpacing: -1.5, margin: 0, lineHeight: 1.2 }}>{data.title}</h3>
          {data.sub && <div style={{ fontFamily: c.serif, fontSize: 15, color: c.indigo, fontStyle: 'italic', marginTop: 8 }}>— {data.sub}</div>}
          <p style={{ fontFamily: c.sans, fontSize: 14, lineHeight: 1.7, color: c.inkSoft, margin: '18px 0 24px', maxWidth: 580 }}>{data.desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 16, columnGap: 32, marginTop: 8 }}>
            {data.items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 14 }}>
                <span style={{ fontFamily: c.mono, fontSize: 11, color: c.indigo, fontWeight: 700, marginTop: 3 }}>0{i+1}</span>
                <div>
                  <div style={{ fontFamily: c.sans, fontSize: 14, fontWeight: 700, color: c.ink, letterSpacing: -0.3 }}>{it.t}</div>
                  <div style={{ fontFamily: c.sans, fontSize: 12.5, color: c.muted, marginTop: 3, lineHeight: 1.5 }}>{it.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px dashed ${c.line}` }}>
            {data.checks.map((ck, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontFamily: c.sans, fontSize: 12.5, color: c.inkSoft, lineHeight: 1.8 }}>
                <span style={{ color: c.indigo }}>—</span>{ck}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22, fontFamily: c.sans, fontSize: 13, color: c.ink }}>
            <span style={{ color: c.muted, marginRight: 8, fontWeight: 600, letterSpacing: 1, fontSize: 10.5 }}>결과</span>
            {data.outcome}
          </div>
        </div>

        {/* right: 가격 — 미니멀 */}
        <div style={{ borderLeft: `1px solid ${c.line}`, paddingLeft: 28 }}>
          <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>수강료</div>
          {data.priceOrig && (
            <div style={{ fontFamily: c.sans, fontSize: 13, color: c.dim, textDecoration: 'line-through', marginBottom: 2 }}>월 {data.priceOrig}</div>
          )}
          <div style={{ display: 'baseline', alignItems: 'baseline' }}>
            <span style={{ fontFamily: c.serif, fontSize: 54, fontWeight: 400, color: c.ink, letterSpacing: -2, lineHeight: 1 }}>{data.price}</span>
            <span style={{ fontFamily: c.sans, fontSize: 13, color: c.muted, marginLeft: 6 }}>/ 월</span>
          </div>
          <div style={{ fontFamily: c.sans, fontSize: 12, color: c.muted, marginTop: 8 }}>총 {data.total}</div>
          <div style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, marginTop: 20, lineHeight: 1.6 }}>{data.note}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 24 }}>
            <button style={{ background: c.ink, color: '#fff', padding: '11px 14px', border: 'none', fontSize: 12.5, fontWeight: 700, fontFamily: c.sans, cursor: 'pointer' }}>카카오톡 문의 →</button>
            <button style={{ background: 'transparent', color: c.ink, padding: '10px 4px', border: 'none', fontSize: 12, fontWeight: 600, fontFamily: c.sans, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4, textAlign: 'left' }}>맛보기 훈련 신청</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '100px 40px 40px', background: c.bg }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, fontWeight: 600, letterSpacing: 2, marginBottom: 18 }}>— CURRICULUM</div>
            <h2 style={{ fontFamily: c.sans, fontSize: 52, fontWeight: 800, color: c.ink, letterSpacing: -2, margin: 0 }}>
              과정별 <span style={{ fontFamily: c.serif, fontWeight: 400, color: c.indigo }}>커리큘럼</span>
            </h2>
          </div>
          <div style={{ fontFamily: c.sans, fontSize: 13, color: c.muted, fontStyle: 'italic' }}>영상이 아닌, 1:1 밀착 지도입니다.</div>
        </div>

        <Row data={common} />
        <Row data={free} />

        {/* Promise */}
        <div style={{ borderTop: `1px solid ${c.lineStrong}`, padding: '40px 0', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 48 }}>
          <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2 }}>PROMISE</div>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 22, fontWeight: 800, color: c.ink, letterSpacing: -0.8 }}>첫 프로젝트, 납품까지 함께합니다.</div>
            <div style={{ fontFamily: c.sans, fontSize: 13.5, color: c.inkSoft, lineHeight: 1.75, marginTop: 12, maxWidth: 720 }}>
              첫 수주 프로젝트는 견적부터 납품 완료까지 실전 감독합니다. 이후에도 무제한·무기한으로 인프라를 활용해 컨설팅을 이어갈 수 있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.V1Curriculum = V1Curriculum;
