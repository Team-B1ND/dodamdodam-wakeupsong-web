import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { Allow } from "repository/wakeupSong/wakeupSong.Param";
import { toast } from "react-toastify";
import { allowMusicInfo } from "store/reducer";
import { useRecoilState } from "recoil";

const useWakeupSongAllow = () => {
  const [musicInfo, setMusicInfo] = useRecoilState(allowMusicInfo);

  const setWakeupSongAllow = async (musicInfo: Allow) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongAllow(musicInfo);
      if (status === 200) {
        toast.success("승인을 성공했습니다!");
        setMusicInfo({ id: 0, playedDate: "" });
      }
    } catch (error) {
      toast.error("승인할 노래를 선택해주세요");
    }
  };

  return { setWakeupSongAllow };
};

export default useWakeupSongAllow;
