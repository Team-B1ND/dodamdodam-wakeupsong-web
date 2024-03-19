import { allowMusicInfoIdAtom } from "store/reducer";
import { useSetRecoilState } from "recoil";
import { useGetBroadcastClubMemberCheckQuery } from "queries/Member/member.query";
import {
  useAllowWakeupSongMutation,
  useDenyWakeupSongMutation,
} from "queries/wakeupSong/wakeupSong.query";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const useWakeupSongAllow = () => {
  const setMusicInfoId = useSetRecoilState(allowMusicInfoIdAtom);
  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberCheckQuery();

  const allowWakeupSong = useAllowWakeupSongMutation();
  const denyWakeupSong = useDenyWakeupSongMutation();

  const queryClient = useQueryClient();

  const handleSuccessfulWakeupSongEvent = () => {
    setMusicInfoId(0);
    queryClient.invalidateQueries("pendingMusic/getPendingMusicList");
  };

  const hanldeWakeupSongAllow = (musicInfoId: number) => {
    allowWakeupSong.mutate(musicInfoId, {
      onSuccess: () => {
        toast.success("기상송을 승인했습니다!");
        handleSuccessfulWakeupSongEvent();
      },
      onError: (e) => {
        toast.error("기상송 승인을 실패했습니다!");
      },
    });
  };

  const handleWakeupSongRefuse = (musicInfoId: number) => {
    denyWakeupSong.mutate(musicInfoId, {
      onSuccess: () => {
        toast.success("기상송을 거절했습니다!");
        handleSuccessfulWakeupSongEvent();
      },
      onError: (e) => {
        toast.error("기상송 거절을 실패했습니다!");
      },
    });
  };

  return {
    hanldeWakeupSongAllow,
    handleWakeupSongRefuse,
    isBroadcastClubMember,
  };
};

export default useWakeupSongAllow;
