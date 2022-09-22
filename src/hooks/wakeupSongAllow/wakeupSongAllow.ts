import wakeupSongRepository from "repository/wakeupSong.repository";
import { allow } from "types/wakeupSongAllow/wakeupSongAllow";

const useWakeupSongAllow = () => {
  const setWakeupSongAllow = async (musicInfo: allow) => {
    console.log(musicInfo);

    try {
      const { data } = await wakeupSongRepository.wakeupSongAllow(musicInfo);
      console.log(data);
    } catch (error) {
      window.alert(error);
    }
  };

  return { setWakeupSongAllow };
};

export default useWakeupSongAllow;
