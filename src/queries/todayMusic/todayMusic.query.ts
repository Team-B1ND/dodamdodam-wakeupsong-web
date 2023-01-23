import { useQuery } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const useGetTodayMusicData = () =>
  useQuery("todayMusicData/getTodayMusicData", () =>
    wakeupSongRepository.getWakeupSongTodayMusicData(
      new Date().toLocaleDateString().split(".")
    )
  );
