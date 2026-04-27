// Trial — 이모지/썸네일 덜 시끄러운 버전. 텍스트 우선, 얇은 보더.
function V1Trial() {
  const c = window.v1c;
  const cards = [
    {
      num: '01',
      tag: '공통과정 맛보기',
      title: '클로드 코드 왕기초 + BMad Method 훈련',
      rows: [
        { k: '훈련 내용', v: '터미널 기본 영어, 클로드 설치, BMad Analysis chapter 실습' },
        { k: '준비물', v: '화상 회의가 가능한 노트북 + 추가 연결 모니터 1개 이상' },
        { k: '목적', v: '웹/앱/에이전트 프로그램 구축에 대해 공통과정의 접근법 맛보기' },
        { k: '추천', v: '비개발자 · 초보자' },
      ],
    },
    {
      num: '02',
      tag: '프리랜서 과정 맛보기',
      title: '영업 플랫폼 셋팅 훈련',
      rows: [
        { k: '훈련 내용', v: '나에게 맞는 영업 전략 수립' },
        { k: '준비사항', v: '크몽/숨고/위시켓 중 1개를 골라 프로필 · 자기소개 · 상품 셋팅' },
        { k: '목적', v: '프로그램 개발 외주 영업에 대해 프리랜서 창업과정의 접근법 맛보기' },
        { k: '추천', v: '개발자' },
      ],
    },
  ];

  return (
    <div style={{ padding: '110px 40px 96px', background: c.surface, borderBottom: `1px solid ${c.line}` }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: `1px solid ${c.lineStrong}`, paddingBottom: 24, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, fontWeight: 600, letterSpacing: 2, marginBottom: 18 }}>— TRIAL</div>
            <h2 style={{ fontFamily: c.sans, fontSize: 44, fontWeight: 800, color: c.ink, letterSpacing: -2, margin: 0 }}>
              1:1 맛보기 훈련 <span style={{ fontFamily: c.serif, fontWeight: 400, color: c.indigo }}>신청하세요</span>
            </h2>
          </div>
          <p style={{ fontFamily: c.sans, fontSize: 13.5, color: c.muted, maxWidth: 380, lineHeight: 1.65, margin: 0 }}>
            직강 1:1 맛보기 훈련. 실제 그룹세션 녹화 영상을 카카오톡 상담으로 요청하실 수도 있습니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderLeft: `1px solid ${c.line}`, borderTop: `1px solid ${c.line}` }}>
          {cards.map((card) => (
            <div key={card.num} style={{ borderRight: `1px solid ${c.line}`, borderBottom: `1px solid ${c.line}`, padding: '32px 32px 36px', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
                <span style={{ fontFamily: c.serif, fontSize: 34, color: c.indigo, fontWeight: 400 }}>{card.num}</span>
                <span style={{ fontFamily: c.sans, fontSize: 11.5, color: c.muted, fontWeight: 600, letterSpacing: 1.5 }}>{card.tag.toUpperCase()}</span>
              </div>
              <h3 style={{ fontFamily: c.sans, fontSize: 22, fontWeight: 800, color: c.ink, margin: '0 0 22px', letterSpacing: -0.8, lineHeight: 1.3 }}>{card.title}</h3>
              <div>
                {card.rows.map((r, j) => (
                  <div key={j} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14, padding: '10px 0', borderTop: j === 0 ? `1px solid ${c.line}` : 'none', borderBottom: `1px solid ${c.line}`, fontFamily: c.sans, fontSize: 12.5 }}>
                    <span style={{ color: c.muted, fontWeight: 500 }}>{r.k}</span>
                    <span style={{ color: c.ink, lineHeight: 1.55 }}>{r.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 48, alignItems: 'center' }}>
          <button style={{ background: c.ink, color: '#fff', padding: '13px 24px', border: 'none', fontSize: 13.5, fontWeight: 700, fontFamily: c.sans, cursor: 'pointer' }}>맛보기 훈련 신청하기 →</button>
          <button style={{ background: 'transparent', color: c.ink, padding: '13px 4px', border: 'none', fontSize: 13.5, fontWeight: 600, fontFamily: c.sans, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4 }}>카카오톡으로 영상 받기</button>
        </div>
      </div>
    </div>
  );
}
window.V1Trial = V1Trial;
