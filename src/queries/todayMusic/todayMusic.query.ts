import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";

export const useGetTodayMusicData = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    "todayMusicData/getTodayMusicData"
  >
) =>
  useQuery(
    "todayMusicData/getTodayMusicData",
    () =>
      wakeupSongRepository.getWakeupSongTodayMusicData(
        new Date().toLocaleDateString().split(".")
      ),
    {
      ...options,
    }
  );
