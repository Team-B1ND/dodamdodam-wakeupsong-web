import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";

export const useGetMyAllWakeupSong = (
  options?: UseQueryOptions<
    WakeupSongMusicLists,
    AxiosError,
    WakeupSongMusicLists,
    "myAllWakeupSong/useGetMyAllWakeupSong"
  >
) =>
  useQuery(
    "myAllWakeupSong/useGetMyAllWakeupSong",
    () => wakeupSongRepository.getWakeupSongMy(),
    {
      ...options,
    }
  );
