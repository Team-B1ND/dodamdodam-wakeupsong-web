import { atom } from "recoil";

export const allowMusicInfo = atom({
  key: "ALLOWMUSICINFO",
  default: {
    id: 0,
    playedDate: "",
  },
});
