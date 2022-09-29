import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongMy = () => {
  const [myData, setMyData] = useState<WakeupSongMusic[]>([]);

  useEffect(() => {
    const getMyData = async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongMy();
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMyData();
  }, []);

  return { myData };
};

export default useWakeupSongMy;
