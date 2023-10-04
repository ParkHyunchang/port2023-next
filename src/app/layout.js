import "@/assets/scss/style.scss";

export const metadata = {
    title: "여행일정 사이트 만들기 🥺 Next-Site",
    description: "넥스트 프레임워크를 통해 만들어 보는 여행일정 및 기록 사이트입니다.",
    keywords: ["여행", "오사카", "기록", "넥스트", "next.js", "hyunchang"],
};
  
export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            <body>{children}</body>
        </html>
    );
}