import { toast } from "react-toastify";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";

const useWakeupSongDibs = () => {
  const wakeupSongDibs = async (wakeupSongUrl: string) => {
    try {
      const { status } = await wakeupSongRepository.wakeupSongDibs(
        wakeupSongUrl
      );
      if (status === 200) {
        //찜 아이콘 노랑색으로 변경
      }
    } catch (error) {
      toast.error("찜하기 오류");
    }
  };
  return { wakeupSongDibs };
};

export default useWakeupSongDibs;
