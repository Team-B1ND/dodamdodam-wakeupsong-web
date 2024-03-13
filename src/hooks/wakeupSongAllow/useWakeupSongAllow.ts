import wakeupSongRepository from "repository/wakeupSong/wakeupSong.repository";
import { toast } from "react-toastify";
import { allowMusicInfoIdAtom } from "store/reducer";
import { useSetRecoilState } from "recoil";
import { useGetBroadcastClubMemberCheckQuery } from "queries/Member/member.query";

const useWakeupSongAllow = () => {
  const setMusicInfoId = useSetRecoilState(allowMusicInfoIdAtom);
  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberCheckQuery();

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

  return { setWakeupSongAllow, setWakeupSongRefuse, isBroadcastClubMember };
};

export default useWakeupSongAllow;
