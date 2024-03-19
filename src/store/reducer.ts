import { atom } from "recoil";

export const allowMusicInfoIdAtom = atom({
  key: "ALLOW_MUSIC_INFO_ID",
  default: 0,
});

export const isApplyMusicBtn = atom({
  key: "ISAPPLYMUSICBTN",
  default: {
    isApply: false,
  },
});
