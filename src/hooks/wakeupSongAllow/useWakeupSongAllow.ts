import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { MusicInfo } from "repository/wakeupSong/wakeupSong.Param";
import { toast } from "react-toastify";
import { allowMusicInfo } from "store/reducer";
import { useRecoilState } from "recoil";
import { PermissionParams } from "repository/Permission/permission.Param";
// import { PermissionParams } from "repository/permission/permission.Param";
import { PERMISSION_ACCESS_KEY } from "constants/permission/permission.constants";

const useWakeupSongAllow = () => {
  const [musicInfo, setMusicInfo] = useRecoilState(allowMusicInfo);

  const isPermission = (e: PermissionParams) => {
    if (e.permission === PERMISSION_ACCESS_KEY) {
      return true;
    } else {
      return false;
    }
  };

  const setWakeupSongAllow = async (musicInfo: MusicInfo) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongAllow(musicInfo);
      if (status === 200) {
        toast.success("승인을 성공했습니다!");
        setMusicInfo({ id: 0, playedDate: "" });
      }
    } catch (error) {
      toast.error("승인할 노래를 선택해 주세요");
    }
  };

  const setWakeupSongRefuse = async (musicInfo: MusicInfo) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongRefuse(musicInfo);
      if (status === 200) {
        toast.success("거절을 성공했습니다!");
        setMusicInfo({ id: 0, playedDate: "" });
      }
    } catch (error) {
      toast.error("거절할 노래를 선택해 주세요.");
    }
  };

  return { setWakeupSongAllow, setWakeupSongRefuse, isPermission };
};

export default useWakeupSongAllow;
