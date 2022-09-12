import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong.repository";
import { WakeupSongMyMusic } from "types/wakeupSong/wakeupSongMy";

const useWakeupSongTodayData = () => {
  const [todaySongData, setTodaySongData] = useState<WakeupSongMyMusic[]>([]);

  useEffect(() => {
    const date = new Date().toLocaleDateString().split(".");
    const getTodayData = async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongTodayMusicData(
          date
        );
        setTodaySongData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTodayData();
  }, []);

  return { todaySongData };
};

export default useWakeupSongTodayData;
