// Camp — 이모지 없이 라인 표제 + 텍스트 블록. 비대칭 레이아웃.
function V1Camp() {
  const c = window.v1c;
  const metas = [
    { label: '위치', lines: ['영등포구 문래동', '기술 질의·영업 대화가 자연스럽게 오가는 공간'] },
    { label: '장비', lines: ['가로 160cm 데스크 + 의자', '듀얼 모니터 + 웹캠', '탕비실 (정수기·커피·냉장고)'] },
    { label: '서비스', lines: ['기술 담당관 1인 상주 (9–6)', '정기 방문 및 영업 지원', '외주 실행 동선 점검 및 수주 대응'] },
  ];

  return (
    <div style={{ padding: '110px 40px', background: c.surface, borderBottom: `1px solid ${c.line}` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, fontWeight: 600, letterSpacing: 2, marginBottom: 18 }}>— VIBE OUTSOURCE CAMP</div>
            <h2 style={{ fontFamily: c.sans, fontSize: 52, fontWeight: 800, color: c.ink, letterSpacing: -2, margin: 0, lineHeight: 1.1 }}>
              바이브 외주 <span style={{ fontFamily: c.serif, fontWeight: 400, color: c.indigo }}>훈련소</span>
            </h2>
          </div>
          <p style={{ fontFamily: c.sans, fontSize: 14, color: c.inkSoft, margin: 0, lineHeight: 1.75, maxWidth: 460 }}>
            기술 질의 담당관 상주, 정기 방문, 실제 작업 공간. 단순 좌석 제공이 아니라 <span style={{ color: c.ink, fontWeight: 700 }}>외주를 실제로 수주하고 끝까지 끌고 가는 사람</span>을 만드는 실전 거점입니다.
          </p>
        </div>

        {/* 2+1 정책 블록 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 0, borderTop: `1px solid ${c.lineStrong}`, borderBottom: `1px solid ${c.line}` }}>
          <div style={{ padding: '28px 28px 32px', borderRight: `1px solid ${c.line}` }}>
            <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>이용 조건</div>
            <div style={{ fontFamily: c.sans, fontSize: 17, fontWeight: 700, color: c.ink, letterSpacing: -0.5, marginBottom: 10 }}>공통 과정 수료자 한정</div>
            <div style={{ fontFamily: c.sans, fontSize: 12.5, color: c.muted, lineHeight: 1.7 }}>기본 훈련을 끝낸 뒤 실제 외주 수주 훈련에 들어가는 사람만 사용할 수 있습니다.</div>
          </div>
          <div style={{ padding: '28px 28px 32px', borderRight: `1px solid ${c.line}` }}>
            <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>환불 정책</div>
            <div style={{ fontFamily: c.sans, fontSize: 17, fontWeight: 700, color: c.ink, letterSpacing: -0.5, marginBottom: 10 }}>3개월 전업 기준 1천만원 미만이면 전액 환불</div>
            <div style={{ fontFamily: c.sans, fontSize: 12.5, color: c.muted, lineHeight: 1.7 }}>프리랜서 과정 수강생은 3개월 입주 가능. 전업 수주액이 1천만원 미만이면 4월 기준 300만원 전액 환불합니다.</div>
          </div>
          <div style={{ padding: '28px 28px 32px', background: c.bg }}>
            <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>운영 핵심</div>
            <div style={{ fontFamily: c.serif, fontSize: 19, fontWeight: 400, color: c.ink, letterSpacing: -0.5, lineHeight: 1.5 }}>
              혼자 공부하는 공간이 아니라, <span style={{ color: c.indigo }}>외주 수주 → 납품 → 서비스 정형화</span>까지 이어가는 훈련 공간입니다.
            </div>
          </div>
        </div>

        {/* 메타 정보 — 세로 리스트 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderBottom: `1px solid ${c.lineStrong}` }}>
          {metas.map((m, i) => (
            <div key={i} style={{ padding: '28px 28px 32px', borderRight: i < 2 ? `1px solid ${c.line}` : 'none' }}>
              <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>{m.label}</div>
              {m.lines.map((l, j) => (
                <div key={j} style={{ fontFamily: c.sans, fontSize: 13, color: c.inkSoft, marginTop: j === 0 ? 0 : 8, lineHeight: 1.55 }}>{l}</div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, fontFamily: c.sans, fontSize: 12, color: c.muted, fontStyle: 'italic' }}>
          문래동 30평 규모 · 10명 정도가 함께 일하는 외주 훈련소 (수요에 따라 유동 운영)
        </div>
      </div>
    </div>
  );
}
window.V1Camp = V1Camp;
