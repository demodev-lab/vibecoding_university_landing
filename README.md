# Handoff: DEMODEV 랜딩 페이지 (바이브코딩 1인 개발사 창업)

## Overview
바이브코딩 기반 프리랜서 개발 창업 교육 프로그램 "대모산개발단"의 메인 랜딩 페이지 디자인 레퍼런스입니다. 비개발자/개발자 대상 1:1 훈련 프로그램의 가치 제안, 수강료, 훈련 내용, 환불 정책 등을 전달합니다.

## About the Design Files
이 번들의 파일들은 **HTML/React JSX로 만들어진 디자인 레퍼런스(프로토타입)** 입니다. 의도된 룩앤필과 동작을 보여주는 참고 자료이며, 그대로 프로덕션으로 복사해 쓰는 코드가 아닙니다.

작업 목표는 이 디자인을 **타겟 코드베이스의 기존 환경**(예: Next.js + Tailwind, Vite + React 등)에서 **해당 프로젝트의 패턴과 라이브러리를 사용해 재구현**하는 것입니다. 프로젝트 환경이 아직 없다면 가장 적절한 프레임워크(권장: Next.js 14+ App Router + Tailwind CSS)를 선택해 구현해주세요.

## Fidelity
**High-fidelity (hifi)** — 색상·타이포그래피·간격·레이아웃이 최종에 가깝게 확정된 디자인입니다. 픽셀 단위로 재현해주세요. 폰트, 색상 토큰, 스페이싱 모두 디자인 토큰 섹션의 값을 그대로 사용하세요.

## Design Language
- **톤**: 에디토리얼 / 신문광고 / 브루탈리스트 하이브리드. 라운드 코너 최소, 얇은 1px 보더, 대형 타이포, 산세리프(Pretendard) + 세리프(Nanum Myeongjo) 믹스.
- **시그니처**: 히어로 배경에 대각선(-14°)으로 회전된 "DEMODEV" 대형 라벤더 워드마크.
- **색상**: 따뜻한 오프화이트 배경 + 잉크 블랙 + 인디고 포인트.
- **카드 지양**: 그림자/라운드 카드 대신 얇은 라인 분할과 그리드 컬럼으로 구조화.

## Sections (순서대로)

### 1. Nav (sticky)
- 높이: 약 60px, 상단 고정, `backdrop-filter: blur(12px)` + `rgba(250,250,249,0.92)` 배경
- 좌측: `◆ DEMODEV` 워드마크 (17px, 900, 다이아몬드는 indigo)
  - 옆에 "포트폴리오", "블로그" 링크 (13.5px, inkSoft)
- 우측: "회사 소개서" (underline text btn) + "상담하기 →" (solid ink button)
- 하단 1px 보더

### 2. Hero
- 배경: `#fafaf9` 오프화이트
- 절대 배치된 DEMODEV 대각선 워드마크: fontSize 360px, weight 900, color `indigoLight (#a9a4f5)`, opacity 0.35, letter-spacing -18, `transform: rotate(-14deg)`
- 상단 meta bar (14px 패딩, 1px 보더): 좌측 "No. 042 / 바이브코딩 1인 개발사 창업", 우측 "EST. 2023 · SEOUL MOONRAE"
- Eyebrow: "— 큰 돈 내고 개발 외주 맡기기 불안하셨죠?" (작은 대시 + 본문)
- **Headline (핵심)**:
  - `30일 만에,` (산세리프 Pretendard, 92px, weight 800, letter-spacing -3.5, ink)
  - `500만원 외주.` (세리프 Nanum Myeongjo, 92px, weight 400, indigo `#3b2ed6`)
- 서브카피 (16px, muted, max-width 520px): "바이브코딩 훈련과 영업컨설팅이 합쳐진 **강력하고도 유일한 커리큘럼**. 100억 외주 용역을 수행하며 쌓은 실전 노하우를 1:1로 전수합니다."
- CTA: Primary "무료 맛보기 신청 →" (검정 배경, 흰 글자) + Secondary "커리큘럼 자세히 보기" (언더라인 텍스트)
- **수치 테이블** (상단 1px 진한 보더, 4컬럼 그리드):
  - 비개발자 기준 / **7주** / 첫 수주 소요 평균 (최단 4주)
  - 비개발자 기준 / **427만원** / 평균 단일 프로젝트 계약 규모
  - 개발자 기준 / **3주** / 첫 수주 소요 평균 (최단 1주)
  - 개발자 기준 / **2,140만원** / 평균 단일 프로젝트 계약 규모
  - 숫자: 42px, weight 800, letter-spacing -1.5

### 3. Trial (맛보기 훈련)
- 섹션 헤더: eyebrow "— TRIAL", 제목 "1:1 맛보기 훈련 **신청하세요**" (신청하세요는 세리프 + indigo)
- 2컬럼 그리드, 얇은 라인으로 분할된 카드:
  - **01 공통과정 맛보기** — 클로드 코드 왕기초 + BMad Method 훈련
    - 훈련 내용 / 준비물 / 목적 / 추천(비개발자·초보자)
  - **02 프리랜서 과정 맛보기** — 영업 플랫폼 셋팅 훈련
    - 훈련 내용 / 준비사항 / 목적 / 추천(개발자)
- 각 row: 90px 라벨 컬럼 + 본문 컬럼, 상하 1px 구분선
- 하단 CTA: "맛보기 훈련 신청하기 →" + "카카오톡으로 영상 받기"

### 4. Timer (4월 프로모션)
- 1.5px 강한 보더 박스 (white bg)
- 좌측: "— APRIL PROMOTION" + 헤드라인 "프리랜서 창업 과정 **사십 퍼센트 할인**" (사십 퍼센트는 세리프+indigo)
- 우측: D-Day 카운트다운 (DAY/HR/MIN/SEC, 세리프 48px)
- 하단 월별 할인율 표시: 2월 50% (취소선) → 3월 45% (취소선) → **4월 40%** (indigo) → 5월 35% → 6월 30% → 7월 25%
- "매월 할인율이 5%씩 줄어듭니다" 이탤릭 코멘트

### 5. Curriculum
- 에디토리얼 3컬럼 레이아웃: 좌측 180px 번호(로마자) / 가운데 본문 / 우측 260px 가격
- **I. 공통 과정** (COMMON / 4–8주)
  - 4개 아이템: 랜딩페이지 · 웹서비스 · 플랫폼 · AI Agent 프로덕트
  - 3개 체크 포인트 (— dash 리스트)
  - 결과: "혼자서도 웹/앱을 만들고 배포할 수 있는 상태"
  - 가격: 월 **30만원** (세리프 54px), 총 300만원, 10개월 무이자 할부
- **II. 프리랜서 창업 과정** (FREELANCER / 5주, "— 공통 과정 포함가")
  - 4개 아이템: 외주영역 A-Z · 전략 수립 · 포트폴리오 · 영업 시작
  - 결과: "첫 클라이언트 수주, 월 500만원 수입 시작"
  - 가격: 월 100만원(취소선) → **60만원** (세리프 54px), 총 600만원, 4월 40% 할인
- 하단 PROMISE 블록: "첫 프로젝트, 납품까지 함께합니다."

### 6. Camp (바이브 외주 훈련소)
- 제목: "바이브 외주 **훈련소**" (훈련소는 세리프+indigo)
- 3컬럼 정책 블록 (이용 조건 / 환불 정책 / 운영 핵심)
  - 환불: "3개월 전업 기준 1천만원 미만이면 전액 환불"
- 3컬럼 메타 (위치 / 장비 / 서비스)
  - 위치: 영등포구 문래동
  - 장비: 데스크 + 듀얼 모니터 + 웹캠 + 탕비실
  - 서비스: 기술 담당관 상주(9–6) + 정기 방문 + 수주 대응

### 7. Footer
- 3컬럼: 로고+tagline / 바로가기 / 연락처(010-4718-8591, 02-544-8591, contact@demodev.io)
- 하단 사업자 정보:
  - 상호명: 주식회사 대모산개발단
  - 대표자: 고상현
  - 사업자 등록 번호: 489-87-03180
  - 주소: 서울 서초구 사평대로55길 65-7, 1층
  - 유선전화: 02-544-8591
- Instagram + YouTube 소셜 아이콘 (36×36, 1px border, 사각형)
- © 2026 DemoDev + 교육 용어 면책 문구

## Interactions & Behavior
- **Nav sticky**: 스크롤 시 상단 고정, backdrop-filter blur.
- **Hover states**: 버튼은 opacity 0.9 또는 배경 조금 어둡게. 링크는 언더라인 굵기/색상 미세 변화.
- **CTA**: "무료 맛보기 신청" → 모달 또는 카카오톡 채널 연결. "상담하기" → 카카오톡 상담 링크.
- **반응형**: 1280px 기준 설계. 모바일에서는 4컬럼 수치 테이블을 2×2 그리드로, 커리큘럼 3컬럼을 세로 스택으로 전환.
- **애니메이션**: 스크롤 인 fade-up 아주 미세하게만(또는 없이).

## Design Tokens

### Colors
```
bg:         #fafaf9   /* off-white 따뜻 */
bgAlt:      #f4f3f7   /* 살짝 라벤더 */
bgDeep:     #edebf3
surface:    #ffffff

ink:        #0a0a12   /* primary text */
inkSoft:    #1f1f2d
muted:      #5c5c6e
dim:        #8a8a9c

line:       #e3e1ea   /* 기본 보더 */
lineSoft:   #eceaef
lineStrong: #111118   /* 강한 구분선 */

indigo:     #3b2ed6   /* primary accent */
indigoDeep: #1e1a94
indigoLight:#a9a4f5   /* 대각선 워드마크 */
indigoSoft: #d9d5fb
indigoBg:   #efedfc
```

### Typography
- **Sans (primary)**: Pretendard (v1.3.9)
  - CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`
- **Serif (accent, headline)**: Nanum Myeongjo (400/700/800) + Noto Serif KR fallback
  - Google Fonts: `Nanum+Myeongjo:wght@400;700;800&family=Noto+Serif+KR:wght@400;500;600;700`
- **Mono**: JetBrains Mono

### Spacing
- 섹션 상하 패딩: 80–110px
- 섹션 좌우 패딩: 40px
- 컨텐츠 max-width: 1180px
- 보더: 1px 기본, 1.5px 강조

### Scales
- Headline: 92px / 52px / 44px / 34px
- Body: 16 / 14 / 13.5 / 13 / 12.5
- Label: 11 / 11.5 (eyebrow 2px letter-spacing, 700 weight, uppercase)

## Assets
- 로고: `◆ DEMODEV` 텍스트 + 다이아몬드 글리프(SVG 또는 유니코드)
- 단체 사진 (신뢰 섹션용 — 추가 예정): `images/team.png`
- 외부 폰트 2종 (Pretendard, Nanum Myeongjo) — CDN 로드

## Files
- `landing.html` — 엔트리 포인트. 모든 variant JSX를 로드하고 DesignCanvas에 래핑
- `design-canvas.jsx` — 디자인 탐색용 캔버스 래퍼 (프로덕션에서는 제거)
- `variants/v1-tokens.jsx` — 디자인 토큰 (색상, 폰트 패밀리)
- `variants/v1-classic.jsx` — 섹션 조립 루트
- `variants/v1-nav.jsx` — Nav
- `variants/v1-hero.jsx` — Hero + DEMODEV 대각선 워드마크 + 수치 테이블
- `variants/v1-trial.jsx` — 1:1 맛보기 훈련 2개 카드
- `variants/v1-timer.jsx` — 4월 할인 타이머 + 월별 할인율
- `variants/v1-curriculum.jsx` — 공통/프리랜서 과정 상세 + 가격
- `variants/v1-camp.jsx` — 바이브 외주 훈련소
- `variants/v1-footer.jsx` — 푸터 (실제 사업자 정보 포함)

## 구현 권장 사항
1. **Next.js 14 App Router + Tailwind CSS** 추천
2. 디자인 토큰을 `tailwind.config.ts`의 theme.extend.colors / fontFamily로 선언
3. 각 섹션을 `app/(marketing)/_components/sections/`에 개별 컴포넌트로 분리
4. 카카오톡 상담: 카카오 비즈니스 링크로 `<Link>` 연결
5. DEMODEV 대각선 워드마크: `absolute inset-0` + `rotate-[-14deg]`, 모바일에서는 fontSize 축소
6. SEO: metadata export + OG 이미지, 구조화된 데이터(Organization, Course)
7. 성능: 폰트는 `next/font`로 최적화, Pretendard는 variable font 사용 고려
