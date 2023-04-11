import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";

export const useGetPendingMusicList = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    "pendingMusic/getPendingMusicList"
  >
) =>
  useQuery(
    "pendingMusic/getPendingMusicList",
    () => wakeupSongRepository.getWakeupSongPendingMusicListData(),
    {
      ...options,
    }
  );
