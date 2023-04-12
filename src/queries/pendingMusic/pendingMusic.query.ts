import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { useQuery, UseQueryOptions } from "react-query";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";
import { AxiosError } from "axios";

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
