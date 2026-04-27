export default function Footer() {
  return (
    <footer className="border-t border-line-strong bg-bg px-10 pt-[72px] pb-10">
      <div className="mx-auto max-w-[1180px]">
        {/* 상단: 로고 + 바로가기 + 연락처 */}
        <div className="grid grid-cols-[2fr_1fr_1.2fr] gap-10 border-b border-line pb-10">
          <div>
            <div className="mb-[18px] flex items-center gap-1 text-2xl font-black text-ink" style={{ letterSpacing: "-0.8px" }}>
              <span className="text-indigo">◆</span>&nbsp;DEMODEV
            </div>
            <div className="max-w-[380px] text-[13px] leading-[1.7] text-muted">
              최고의 기술력과 창의력으로 디지털 혁신을 선도하는 웹/앱 개발 전문
              기업입니다.
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10.5px] font-bold tracking-[2px] text-muted">
              바로가기
            </div>
            <div className="text-[13px] leading-8 text-ink-soft">
              <div className="cursor-pointer hover:underline">문의하기</div>
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10.5px] font-bold tracking-[2px] text-muted">
              연락처
            </div>
            <div className="text-[13px] leading-8 text-ink-soft">
              <div>010-4718-8591</div>
              <div>02-544-8591</div>
              <div>contact@demodev.io</div>
            </div>
          </div>
        </div>

        {/* 하단: 사업자 정보 */}
        <div className="grid grid-cols-[1fr_auto] items-end gap-6 py-7 pb-5">
          <div className="text-[11.5px] leading-[1.95] text-muted">
            <div>상호명 · 주식회사 대모산개발단</div>
            <div>대표자 · 고상현</div>
            <div>사업자 등록 번호 · 489-87-03180</div>
            <div>주소 · 서울 서초구 사평대로55길 65-7, 1층</div>
            <div>유선전화 · 02-544-8591</div>
          </div>
          <div className="flex gap-2.5">
            {/* Instagram */}
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center border border-line hover:border-ink-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-ink-soft">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </div>
            {/* YouTube */}
            <div className="flex h-9 w-9 cursor-pointer items-center justify-center border border-line hover:border-ink-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-ink-soft">
                <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.8-.9-2.3-1C16.5 4 12 4 12 4s-4.5 0-7.8.2c-.5.1-1.5.1-2.3 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.5 1 1.8.2 7.6.2 7.6.2s4.5 0 7.8-.2c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8zM9.8 15.2V8.4l5.8 3.4-5.8 3.4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 면책 + 카피라이트 */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <div className="text-[11px] text-dim">
            © 2026 DemoDev. All rights reserved.
          </div>
          <div className="max-w-[720px] text-right text-[11px] leading-[1.6] text-dim">
            본 사이트의 &lsquo;입학·수료·졸업&rsquo; 등은 정규 교육기관 학위
            과정을 의미하지 않으며, 프로그램 단계를 비유적으로 표현한 것입니다.
          </div>
        </div>
      </div>
    </footer>
  );
}
