import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongTodayData = () => {
  const [todaySongData, setTodaySongData] = useState<WakeupSongMusic[]>([]);

  useEffect(() => {
    const getTodayData = async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongTodayMusicData(
          new Date().toLocaleDateString().split(".")
        );
        console.log(data);

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
