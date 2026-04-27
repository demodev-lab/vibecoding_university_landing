import type { Metadata } from "next";
import { Nanum_Myeongjo, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum-myeongjo",
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEMODEV — 바이브코딩 1인 개발사 창업",
  description:
    "바이브코딩 훈련과 영업컨설팅이 합쳐진 강력하고도 유일한 커리큘럼. 100억 외주 용역을 수행하며 쌓은 실전 노하우를 1:1로 전수합니다.",
  openGraph: {
    title: "DEMODEV — 30일 만에, 500만원 외주",
    description:
      "바이브코딩 기반 프리랜서 개발 창업 교육. 1:1 밀착 훈련으로 첫 수주까지.",
    siteName: "DEMODEV",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${nanumMyeongjo.variable} ${notoSerifKR.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
