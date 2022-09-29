import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongPendingMusicListData = () => {
  const [pendingMusicListData, setPendingMusicListData] = useState<
    WakeupSongMusic[]
  >([]);

  useEffect(() => {
    const getPendingMusicData = async () => {
      try {
        const { data } =
          await wakeupSongRepository.getWakeupSongPendingMusicListData();
        setPendingMusicListData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPendingMusicData();
  }, []);

  return { pendingMusicListData };
};

export default useWakeupSongPendingMusicListData;
