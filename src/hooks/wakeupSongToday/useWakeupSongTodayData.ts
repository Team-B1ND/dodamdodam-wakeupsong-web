import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
        setTodaySongData(data.slice(0, 4));
      } catch (error) {
        toast.error("노래 리스트 불러오기 오류");
      }
    };

    getTodayData();
  }, []);

  return { todaySongData };
};

export default useWakeupSongTodayData;
