import { useState } from "react";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { WakeupSongMusic } from "types/wakeupSongMy/wakeupSongMy.type.";

const useWakeupSongMy = () => {
  const [myData, setMyData] = useState<WakeupSongMusic[]>([]);
  const [myAllData, setMyAllData] = useState<WakeupSongMusic[]>([]);

  const getMyData = async () => {
    try {
      const { data } = await wakeupSongRepository.getWakeupSongMy();
      setMyData(data.splice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  const getMyAllData = async () => {
    try {
      const { data } = await wakeupSongRepository.getWakeupSongMy();
      setMyAllData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getMyData, myData, myAllData, getMyAllData };
};

export default useWakeupSongMy;
