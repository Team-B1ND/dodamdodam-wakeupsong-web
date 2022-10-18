import { useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongPendingMusicListData = () => {
  const [pendingMusicListData, setPendingMusicListData] = useState<
    WakeupSongMusic[]
  >([]);
  const [pendingAllMusicListData, setPendingAllMusicListData] = useState<
    WakeupSongMusic[]
  >([]);

  const getWakeupSongPendingMusic = async () => {
    try {
      const { data } =
        await wakeupSongRepository.getWakeupSongPendingMusicListData();
      setPendingMusicListData(data.splice(0, 16));
    } catch (error) {
      console.log(error);
    }
  };

  const getWakeupSongPendingAllMusic = async () => {
    try {
      const { data } =
        await wakeupSongRepository.getWakeupSongPendingMusicListData();
      setPendingAllMusicListData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pendingMusicListData,
    getWakeupSongPendingMusic,
    getWakeupSongPendingAllMusic,
    pendingAllMusicListData,
  };
};

export default useWakeupSongPendingMusicListData;
