import { useQuery } from "react-query";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

export const useGetMyAllWakeupSong = () =>
  useQuery("myAllWakeupSong/useGetMyAllWakeupSong", () =>
    wakeupSongRepository.getWakeupSongMy()
  );
