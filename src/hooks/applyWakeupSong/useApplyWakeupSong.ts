import wakeupSongRepository from "repository/wakeupSong.repository";
import { toast } from "react-toastify";

const useApplyWakeupSong = () => {
  const postApplyWakeupSong = async (wakeupSongUrl: string) => {
    try {
      const { status } = await wakeupSongRepository.postApplyWakeupSong(
        wakeupSongUrl
      );
      if (status === 200) {
        toast.success("기상송 신청성공!");
      }
    } catch (error) {
      toast.error("기상송 신청실패");
    }
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
