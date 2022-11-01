import { toast } from "react-toastify";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { useState } from "react";
import { WakeupSongDibs } from "types/wakeupSongDibs/wakeupSongDibs.type";

//서버 로직이 완성되지 않아서 뷰 구현은 됬지만 통신 로직이 안되어 있음. 그래서 사용안함
const useWakeupSongDibs = () => {
  const [dibsMusicLists, setDibsMusicLists] = useState<WakeupSongDibs[]>([]);

  const postWakeupSongDibs = async (wakeupSongUrl: string) => {
    try {
      const { status } = await wakeupSongRepository.postWakeupSongDibs(
        wakeupSongUrl
      );
      if (status === 200) {
        toast.success("보관함에 저장되었습니다.");
      }
    } catch (error) {
      toast.error("찜하기 오류");
    }
  };

  const getWakeupSongDibs = async () => {
    try {
      const { data } = await wakeupSongRepository.getWakeupSongDibs();
      setDibsMusicLists(data);
    } catch (error) {
      toast.error("저장한 노래 불러오기 실패");
    }
  };

  return { postWakeupSongDibs, dibsMusicLists, getWakeupSongDibs };
};

export default useWakeupSongDibs;
