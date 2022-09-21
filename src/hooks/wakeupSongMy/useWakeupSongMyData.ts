import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSong/wakeupSongMy";

const useWakeupSongMyData = () => {
  const [myData, setMyData] = useState<WakeupSongMusic[]>([]);

  useEffect(() => {
    const getMyData = async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongMyData();
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMyData();
  }, []);

  return { myData };
};

export default useWakeupSongMyData;
