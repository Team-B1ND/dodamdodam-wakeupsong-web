import { useGetBroadcastClubMemberCheckQuery } from "queries/Member/member.query";
import { QUERY_KEYS } from "queries/queryKey";
import {
  useAllowWakeupSongMutation,
  useDenyWakeupSongMutation,
  useGetPendingMusicListQuery,
} from "queries/WakeupSongs/wakeupSong.query";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { WakeupSongMusicType } from "types/WakeupSongs/wakeupSong.type";

const useDecisionWakeupSong = () => {
  const queryClient = useQueryClient();
  const allowWakeupSongMutation = useAllowWakeupSongMutation();
  const denyWakeupSongMutation = useDenyWakeupSongMutation();
  const { data: PendingWakeupSongList } = useGetPendingMusicListQuery();
  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberCheckQuery();

  const [isEnabled, setIsEnabled] = useState(true);
  const [musicInfoId, setMusicInfoId] = useState<number>();
  const [pendingWakeupSong, setPendingWakeupSong] = useState<
    WakeupSongMusicType[]
  >([]);

  const handleClickWakeupSong = (id: number) => {
    setPendingWakeupSong((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isAtv: !item.isAtv }
          : { ...item, isAtv: false }
      )
    );

    setMusicInfoId((prev) => (prev === id ? undefined : id));
  };

  const handleSuccessfulWakeupSongEvent = () => {
    setMusicInfoId(undefined);
    setPendingWakeupSong((prev) =>
      prev.map((item) => ({ ...item, isAtv: false }))
    );
  };

  const hanldeWakeupSongAllow = () => {
    if (!isEnabled) return;

    setIsEnabled(false);

    allowWakeupSongMutation.mutate(musicInfoId!, {
      onSuccess: () => {
        B1ndToast.showSuccess("기상송을 승인했습니다!");
        handleSuccessfulWakeupSongEvent();
        queryClient.invalidateQueries([
          QUERY_KEYS.wakeupSong.getTodayMusicData,
          QUERY_KEYS.wakeupSong.getTomorrowMusicData,
        ]);
        setIsEnabled(true);
      },
      onError: () => {
        B1ndToast.showError("기상송 승인을 실패하였습니다!");
        setIsEnabled(true);
      },
    });
  };

  const hanldeWakeupSongDeny = () => {
    if (!isEnabled) return;

    setIsEnabled(false);

    denyWakeupSongMutation.mutate(musicInfoId!, {
      onSuccess: () => {
        B1ndToast.showSuccess("기상송을 거절했습니다!");
        handleSuccessfulWakeupSongEvent();
        queryClient.invalidateQueries(
          QUERY_KEYS.wakeupSong.getPendingMusicList
        );
        setIsEnabled(true);
      },
      onError: () => {
        B1ndToast.showError("기상송 거절을 실패하였습니다!");
        setIsEnabled(true);
      },
    });
  };

  useEffect(() => {
    if (PendingWakeupSongList?.data) {
      setPendingWakeupSong(
        PendingWakeupSongList.data.map((item) => ({ ...item, isAtv: false }))
      );
    }
  }, [PendingWakeupSongList]);

  return {
    isEnabled,
    musicInfoId,
    pendingWakeupSong,
    isBroadcastClubMember,
    handleClickWakeupSong,
    hanldeWakeupSongAllow,
    hanldeWakeupSongDeny,
  };
};

export default useDecisionWakeupSong;
