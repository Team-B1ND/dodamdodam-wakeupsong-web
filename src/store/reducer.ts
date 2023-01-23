import { atom } from "recoil";

export const allowMusicInfo = atom({
  key: "ALLOWMUSICINFO",
  default: {
    id: 0,
    playedDate: "",
  },
});

export const isApplyMusicBtn = atom({
  key: "ISAPPLYMUSICBTN",
  default: {
    isApply: false,
  },
});
