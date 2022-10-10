import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { toast } from "react-toastify";
import { useResetRecoilState } from "recoil";
import { allowMusicInfo } from "store/reducer";

const useApplyWakeupSong = () => {
  // const resetMusicInfo = useResetRecoilState(allowMusicInfo);

  const postApplyWakeupSong = async (wakeupSongUrl: string) => {
    try {
      const { status } = await wakeupSongRepository.postApplyWakeupSong(
        wakeupSongUrl
      );
      if (status === 200 || status === 201) {
        toast.success("기상송 신청성공!");
      }
    } catch (error) {
      toast.error("정확한 주소를 입력해 주세요");
    }
  };

  return { postApplyWakeupSong };
};

export default useApplyWakeupSong;
