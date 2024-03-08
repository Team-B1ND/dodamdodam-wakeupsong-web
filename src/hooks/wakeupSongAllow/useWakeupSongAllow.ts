import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { toast } from "react-toastify";
import { allowMusicInfoIdAtom } from "store/reducer";
import { useSetRecoilState } from "recoil";
import { PermissionParams } from "repository/Permission/permission.param";
import { PERMISSION_ACCESS_KEY } from "constants/permission/permission.constants";

const useWakeupSongAllow = () => {
  const setMusicInfoId = useSetRecoilState(allowMusicInfoIdAtom);

  const isPermission = (e: PermissionParams) => {
    if (e.permission === PERMISSION_ACCESS_KEY) {
      return true;
    } else {
      return false;
    }
  };

  const setWakeupSongAllow = async (musicInfoId: number) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongAllow(
        musicInfoId
      );
      if (status === 200) {
        toast.success("승인을 성공했습니다!");
        setMusicInfoId(0);
      }
    } catch (error) {
      toast.error("승인할 노래를 선택해 주세요");
    }
  };

  const setWakeupSongRefuse = async (musicInfoId: number) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongRefuse(
        musicInfoId
      );
      if (status === 200) {
        toast.success("거절을 성공했습니다!");
        setMusicInfoId(0);
      }
    } catch (error) {
      toast.error("거절할 노래를 선택해 주세요.");
    }
  };

  return { setWakeupSongAllow, setWakeupSongRefuse, isPermission };
};

export default useWakeupSongAllow;
