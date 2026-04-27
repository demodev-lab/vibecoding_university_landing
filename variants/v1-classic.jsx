// V1Classic — 섹션 합치는 루트
function V1Classic() {
  return (
    <div style={{ background: window.v1c.bg, color: window.v1c.ink }}>
      <window.V1Nav />
      <window.V1Hero />
      <window.V1Trial />
      <window.V1Timer />
      <window.V1Curriculum />
      <window.V1Camp />
      <window.V1Footer />
    </div>
  );
}
window.V1Classic = V1Classic;
