import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { toast } from "react-toastify";

const useApplyWakeupSong = () => {
  const postApplyWakeupSong = async (wakeupSongUrl: string) => {
    try {
      const { status } = await wakeupSongRepository.postApplyWakeupSong(
        wakeupSongUrl
      );
      if (status === 200 || status === 201) {
        toast.success("기상송 신청성공!");
      } else {
        toast.error("기상송 신청실패");
      }
    } catch (error) {
      toast.error("기상송 신청실패");
    }
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
