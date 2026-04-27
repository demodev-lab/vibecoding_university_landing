// Nav — 이모지/둥근 로고 없애고 워드마크 중심. 심플 텍스트 링크 + 얇은 보더
function V1Nav() {
  const c = window.v1c;
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(250,250,249,0.92)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${c.line}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', fontFamily: c.sans }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 44 }}>
          <div style={{ fontFamily: c.sans, fontSize: 17, color: c.ink, fontWeight: 900, letterSpacing: -0.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <span style={{ color: c.indigo }}>◆</span>&nbsp;DEMODEV
          </div>
          <div style={{ display: 'flex', gap: 28, fontSize: 13.5, color: c.inkSoft, fontWeight: 500 }}>
            <span>포트폴리오</span><span>블로그</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <button style={{ background: 'transparent', color: c.inkSoft, padding: 0, border: 'none', fontSize: 13.5, fontWeight: 500, fontFamily: c.sans, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>회사 소개서</button>
          <button style={{ background: c.ink, color: '#fff', padding: '10px 22px', border: 'none', fontSize: 13, fontWeight: 700, fontFamily: c.sans, cursor: 'pointer' }}>상담하기 →</button>
        </div>
      </div>
    </div>
  );
}
window.V1Nav = V1Nav;
