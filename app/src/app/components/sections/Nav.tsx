export default function Nav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-[rgba(250,250,249,0.92)] backdrop-blur-[12px]">
      <div className="mx-auto flex items-center justify-between px-10 py-[18px]">
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-0.5 text-[17px] font-black tracking-tight">
            <span className="text-indigo">◆</span>&nbsp;DEMODEV
          </div>
          <div className="flex gap-7 text-[13.5px] font-medium text-ink-soft">
            <a href="#" className="hover:opacity-80">포트폴리오</a>
            <a href="#" className="hover:opacity-80">블로그</a>
          </div>
        </div>
        <div className="flex items-center gap-[18px]">
          <button className="text-[13.5px] font-medium text-ink-soft underline underline-offset-4 hover:opacity-80">
            회사 소개서
          </button>
          <button className="bg-ink px-[22px] py-2.5 text-[13px] font-bold text-white hover:opacity-90">
            상담하기 →
          </button>
        </div>
      </div>
    </nav>
  );
}
