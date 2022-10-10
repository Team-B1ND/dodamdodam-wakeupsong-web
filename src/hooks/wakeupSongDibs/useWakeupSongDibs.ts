import { toast } from "react-toastify";
import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { useEffect, useState } from "react";
import {
  WakeupSongDibs,
  WakeupSongDibsLists,
} from "types/wakeupSongDibs/wakeupSongDibs.type";

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

  useEffect(() => {
    const getWakeupSongDibs = async () => {
      try {
        const { data } = await wakeupSongRepository.getWakeupSongDibs();
        setDibsMusicLists(data);
        console.log(data);
      } catch (error) {
        toast.error("저장한 노래 불러오기 실패");
      }
    };

    getWakeupSongDibs();
  }, []);

  return { postWakeupSongDibs, dibsMusicLists };
};

export default useWakeupSongDibs;
