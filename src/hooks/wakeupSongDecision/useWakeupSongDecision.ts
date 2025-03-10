import { allowMusicInfoIdAtom } from "store/reducer";
import { useSetRecoilState } from "recoil";
import {
  useAllowWakeupSongMutation,
  useDenyWakeupSongMutation,
} from "queries/wakeupSong/wakeupSong.query";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

type WakeupSongDecisionType = {
  musicInfoId: number;
  decisionType: "ALLOW" | "DENY";
};

const useWakeupSongDecision = () => {
  const setMusicInfoId = useSetRecoilState(allowMusicInfoIdAtom);

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

  const handleWakeupSongDeny = (musicInfoId: number) => {
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

  const handleWakeupSongDecision = ({
    musicInfoId,
    decisionType,
  }: WakeupSongDecisionType) => {
    if (musicInfoId !== 0) {
      decisionType === "ALLOW"
        ? hanldeWakeupSongAllow(musicInfoId)
        : handleWakeupSongDeny(musicInfoId);
    } else {
      toast.info("기상송을 선택해주세요");
    }
  };

  return {
    hanldeWakeupSongAllow,
    handleWakeupSongDeny,
    handleWakeupSongDecision,
  };
};

export default useWakeupSongDecision;
