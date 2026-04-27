// Hero — 대형 serif 믹스 + 기울기 없는 워드마크 + 비대칭 수치 배치
function V1Hero() {
  const c = window.v1c;
  return (
    <div style={{ position: 'relative', background: c.bg, overflow: 'hidden', borderBottom: `1px solid ${c.line}` }}>
      {/* 배경 DEMODEV — 대각선 라벤더 워드마크 */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          fontFamily: c.sans,
          fontSize: 360,
          fontWeight: 900,
          color: c.indigoLight,
          opacity: 0.35,
          letterSpacing: -18,
          whiteSpace: 'nowrap',
          lineHeight: 0.85,
          transform: 'rotate(-14deg)',
          transformOrigin: 'center',
        }}>
          DEMODEV
        </div>
      </div>

      {/* Top meta bar */}
      <div style={{ position: 'relative', zIndex: 2, padding: '14px 40px', borderBottom: `1px solid ${c.line}`, display: 'flex', justifyContent: 'space-between', fontFamily: c.sans, fontSize: 11.5, color: c.muted, letterSpacing: 0.2 }}>
        <span>No. 042 / 바이브코딩 1인 개발사 창업</span>
        <span>EST. 2023 · SEOUL MOONRAE</span>
      </div>

      <div style={{ position: 'relative', zIndex: 2, padding: '80px 40px 120px', maxWidth: 1180, margin: '0 auto' }}>
        {/* Eyebrow */}
        <div style={{ fontFamily: c.sans, fontSize: 13, color: c.muted, fontWeight: 500, letterSpacing: -0.1, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 28, height: 1, background: c.muted, display: 'inline-block' }}/>
          큰 돈 내고 개발 외주 맡기기 불안하셨죠?
        </div>

        {/* Headline — 믹스: 산세리프 + serif */}
        <h1 style={{ fontFamily: c.sans, fontSize: 92, fontWeight: 800, color: c.ink, letterSpacing: -3.5, lineHeight: 1.02, margin: 0, maxWidth: 1000 }}>
          30일 만에,<br/>
          <span style={{ fontFamily: c.serif, fontWeight: 400, fontStyle: 'normal', color: c.indigo, letterSpacing: -2.5 }}>500만원 외주</span>.
        </h1>

        <p style={{ fontFamily: c.sans, fontSize: 16, lineHeight: 1.7, color: c.muted, margin: '28px 0 0', maxWidth: 520 }}>
          바이브코딩 훈련과 영업컨설팅이 합쳐진 <span style={{ color: c.ink, fontWeight: 700 }}>강력하고도 유일한 커리큘럼</span>. 100억 외주 용역을 수행하며 쌓은 실전 노하우를 1:1로 전수합니다.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 40, alignItems: 'center' }}>
          <button style={{ background: c.ink, color: '#fff', padding: '14px 26px', border: 'none', fontSize: 14, fontWeight: 700, fontFamily: c.sans, cursor: 'pointer' }}>무료 맛보기 신청 →</button>
          <button style={{ background: 'transparent', color: c.ink, padding: '14px 4px', border: 'none', fontSize: 13.5, fontWeight: 600, fontFamily: c.sans, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>커리큘럼 자세히 보기</button>
        </div>

        {/* 수치 — 한 줄 테이블 형태 (카드 아님) */}
        <div style={{ marginTop: 110, borderTop: `1px solid ${c.lineStrong}`, paddingTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24 }}>
          {[
            { tag: '비개발자 기준', v: '7주', label: '첫 수주 소요 평균 (최단 4주)' },
            { tag: '비개발자 기준', v: '427만원', label: '평균 단일 프로젝트 계약 규모' },
            { tag: '개발자 기준', v: '3주', label: '첫 수주 소요 평균 (최단 1주)' },
            { tag: '개발자 기준', v: '2,140만원', label: '평균 단일 프로젝트 계약 규모' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: c.sans, fontSize: 11, color: c.muted, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>{s.tag}</div>
              <div style={{ fontFamily: c.sans, fontSize: 42, fontWeight: 800, color: c.ink, letterSpacing: -1.5, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: c.sans, fontSize: 12, color: c.muted, marginTop: 10, lineHeight: 1.55 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.V1Hero = V1Hero;
