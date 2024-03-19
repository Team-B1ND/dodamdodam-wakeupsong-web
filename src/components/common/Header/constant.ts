export const HEADER_ITEMS = [
  {
    link: "/",
    title: "기상송 홈",
  },
  { link: "/mymusic", title: "마이뮤직" },
  {
    link: "/todaymusic",
    title: new Date().getHours() >= 16 ? "내일의 기상송" : "오늘의 기상송",
  },
  { link: "/pendingmusic", title: "신청 현황" },
] as const;
