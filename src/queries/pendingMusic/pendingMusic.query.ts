import { useQuery } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const useGetPendingMusicList = () =>
  useQuery("pendingMusic/getPendingMusicList", () =>
    wakeupSongRepository.getWakeupSongPendingMusicListData()
  );
