// Timer — 형광 다크 그린 제거, 신문 광고지 느낌. 텍스트+라인+번호 중심.
function V1Timer() {
  const c = window.v1c;
  const months = [
    { m: '2월', d: '50%', done: true },
    { m: '3월', d: '45%', done: true },
    { m: '4월', d: '40%', active: true },
    { m: '5월', d: '35%' },
    { m: '6월', d: '30%' },
    { m: '7월', d: '25%' },
  ];
  return (
    <div style={{ padding: '80px 40px', background: c.bg, borderBottom: `1px solid ${c.line}` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', border: `1.5px solid ${c.lineStrong}`, padding: '32px 36px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'end', borderBottom: `1px solid ${c.line}`, paddingBottom: 24 }}>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 11, color: c.muted, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>— APRIL PROMOTION</div>
            <div style={{ fontFamily: c.sans, fontSize: 40, fontWeight: 800, color: c.ink, letterSpacing: -1.5, lineHeight: 1.15 }}>
              프리랜서 창업 과정<br/>
              <span style={{ fontFamily: c.serif, fontWeight: 400, color: c.indigo }}>사십 퍼센트 할인</span>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 11, color: c.muted, fontWeight: 600, letterSpacing: 2, marginBottom: 12 }}>— 4월 마감까지</div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'baseline' }}>
              {[{n:'09', l:'DAY'},{n:'00', l:'HR'},{n:'59', l:'MIN'},{n:'05', l:'SEC'}].map((t,i) => (
                <div key={i}>
                  <div style={{ fontFamily: c.serif, fontSize: 48, fontWeight: 400, color: c.ink, letterSpacing: -1, lineHeight: 1 }}>{t.n}</div>
                  <div style={{ fontFamily: c.sans, fontSize: 10, color: c.muted, marginTop: 6, letterSpacing: 1.5 }}>{t.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: c.sans, fontSize: 12, color: c.muted, fontStyle: 'italic' }}>매월 할인율이 5%씩 줄어듭니다 — 지금이 가장 좋은 시점입니다.</div>
          <div style={{ display: 'flex', gap: 0, alignItems: 'baseline', fontFamily: c.sans, fontSize: 13 }}>
            {months.map((m, i) => (
              <span key={i} style={{
                padding: '0 14px',
                borderLeft: i === 0 ? 'none' : `1px solid ${c.line}`,
                color: m.active ? c.indigo : m.done ? c.dim : c.inkSoft,
                fontWeight: m.active ? 800 : 500,
                textDecoration: m.done ? 'line-through' : 'none',
              }}>
                {m.m} {m.d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.V1Timer = V1Timer;
