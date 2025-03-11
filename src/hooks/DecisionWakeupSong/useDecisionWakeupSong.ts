import { useGetBroadcastClubMemberCheckQuery } from "queries/Member/member.query";
import { QUERY_KEYS } from "queries/queryKey";
import {
  useAllowWakeupSongMutation,
  useDenyWakeupSongMutation,
  useGetPendingMusicListQuery,
} from "queries/WakeupSong/wakeupSong.query";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { WakeupSongMusicType } from "types/WakeupSong/wakeupSong.type";

const useDecisionWakeupSong = () => {
  const queryClient = useQueryClient();
  const allowWakeupSongMutation = useAllowWakeupSongMutation();
  const denyWakeupSongMutation = useDenyWakeupSongMutation();
  const { data: PendingWakeupSongList } = useGetPendingMusicListQuery();
  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberCheckQuery();
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
    allowWakeupSongMutation.mutate(musicInfoId!, {
      onSuccess: () => {
        toast.success("기상송을 승인했습니다!");
        handleSuccessfulWakeupSongEvent();
        queryClient.invalidateQueries([
          QUERY_KEYS.wakeupSong.getTodayMusicData,
          QUERY_KEYS.wakeupSong.getTomorrowMusicData,
        ]);
      },
      onError: () => {
        toast.error("기상송 승인을 실패하였습니다!");
      },
    });
  };

  const hanldeWakeupSongDeny = () => {
    denyWakeupSongMutation.mutate(musicInfoId!, {
      onSuccess: () => {
        toast.success("기상송을 거절했습니다!");
        handleSuccessfulWakeupSongEvent();
        queryClient.invalidateQueries(
          QUERY_KEYS.wakeupSong.getPendingMusicList
        );
      },
      onError: () => {
        toast.error("기상송 거절을 실패하였습니다!");
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
    musicInfoId,
    pendingWakeupSong,
    isBroadcastClubMember,
    handleClickWakeupSong,
    hanldeWakeupSongAllow,
    hanldeWakeupSongDeny,
  };
};

export default useDecisionWakeupSong;
