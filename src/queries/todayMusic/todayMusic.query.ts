import { useQuery } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

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
