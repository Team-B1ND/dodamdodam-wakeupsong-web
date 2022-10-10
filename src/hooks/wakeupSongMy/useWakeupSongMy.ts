import { useEffect, useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongMy = () => {
  const [myData, setMyData] = useState<WakeupSongMusic[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongMy();
        setMyData(data.splice(0, 4));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { myData };
};

export default useWakeupSongMy;
