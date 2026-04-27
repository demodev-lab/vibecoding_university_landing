// Footer — 실제 정보 반영 + 에디토리얼 톤 유지
function V1Footer() {
  const c = window.v1c;
  return (
    <div style={{ padding: '72px 40px 40px', background: c.bg, borderTop: `1px solid ${c.lineStrong}` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        {/* 상단: 로고 + 바로가기 + 연락처 */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr', gap: 40, paddingBottom: 40, borderBottom: `1px solid ${c.line}` }}>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 24, fontWeight: 900, color: c.ink, letterSpacing: -0.8, display: 'flex', alignItems: 'center', gap: 4, marginBottom: 18 }}>
              <span style={{ color: c.indigo }}>◆</span>&nbsp;DEMODEV
            </div>
            <div style={{ fontFamily: c.sans, fontSize: 13, color: c.muted, lineHeight: 1.7, maxWidth: 380 }}>
              최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발 전문 기업입니다.
            </div>
          </div>

          <div>
            <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>바로가기</div>
            <div style={{ fontFamily: c.sans, fontSize: 13, color: c.inkSoft, lineHeight: 2 }}>
              <div style={{ cursor: 'pointer' }}>문의하기</div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: c.sans, fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>연락처</div>
            <div style={{ fontFamily: c.sans, fontSize: 13, color: c.inkSoft, lineHeight: 2 }}>
              <div>010-4718-8591</div>
              <div>02-544-8591</div>
              <div>contact@demodev.io</div>
            </div>
          </div>
        </div>

        {/* 하단: 사업자 정보 */}
        <div style={{ padding: '28px 0 20px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end' }}>
          <div style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, lineHeight: 1.95 }}>
            <div>상호명 · 주식회사 대모산개발단</div>
            <div>대표자 · 고상현</div>
            <div>사업자 등록 번호 · 489-87-03180</div>
            <div>주소 · 서울 서초구 사평대로55길 65-7, 1층</div>
            <div>유선전화 · 02-544-8591</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 36, height: 36, border: `1px solid ${c.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.inkSoft} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill={c.inkSoft} stroke="none"/></svg>
            </div>
            <div style={{ width: 36, height: 36, border: `1px solid ${c.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={c.inkSoft}><path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.5 4 12 4 12 4s-4.5 0-7.8.2c-.5.1-1.5.1-2.3 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.5 0 7.8-.2c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8zM9.8 15.2V8.4l5.8 3.4-5.8 3.4z"/></svg>
            </div>
          </div>
        </div>

        {/* 면책 + 카피라이트 */}
        <div style={{ borderTop: `1px solid ${c.line}`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontFamily: c.sans, fontSize: 11, color: c.dim }}>© 2026 DemoDev. All rights reserved.</div>
          <div style={{ fontFamily: c.sans, fontSize: 11, color: c.dim, maxWidth: 720, textAlign: 'right', lineHeight: 1.6 }}>
            본 사이트의 '입학·수료·졸업' 등은 정규 교육기관 학위 과정을 의미하지 않으며, 프로그램 단계를 비유적으로 표현한 것입니다.
          </div>
        </div>
      </div>
    </div>
  );
}
window.V1Footer = V1Footer;
