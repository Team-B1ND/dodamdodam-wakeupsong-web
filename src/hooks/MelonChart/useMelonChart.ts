import { useEffect, useState } from "react";
import {
  useGetMelonChartLists,
  usePostMelonChartApplyMutation,
} from "queries/MelonChart/melonChart.query";
import {
  MelonChartListType,
  MelonKeyword,
} from "repository/MelonChart/melonChart.param";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import ErrorHandler from "utils/Error/ErrorHandler";

const useMelonChart = () => {
  const queryClient = useQueryClient();
  const postMelonChartApplyMutation = usePostMelonChartApplyMutation();
  const { data: MelonChartList } = useGetMelonChartLists();
  const [melonChart, setMelonChart] = useState<MelonChartListType[]>([]);
  const [melonChartInfo, setMelonChartInfo] = useState<MelonKeyword>({
    artist: "",
    title: "",
  });

  const handleClickMelonChart = (id: number, title: string, artist: string) => {
    setMelonChart((prev) =>
      prev.map((item) =>
        item.rank === id
          ? { ...item, isAtv: !item.isAtv }
          : { ...item, isAtv: false }
      )
    );

    setMelonChartInfo((prev) =>
      prev.title === title && prev.artist === artist
        ? { artist: "", title: "" }
        : { artist, title }
    );
  };

  const handleClickMelonChartApply = () => {
    postMelonChartApplyMutation.mutate(melonChartInfo, {
      onSuccess: () => {
        toast.success("기상송을 신청했습니다!");
        queryClient.invalidateQueries("pendingMusic/getPendingMusicList");
        queryClient.invalidateQueries("myAllWakeupSong/useGetMyAllWakeupSong");
        setMelonChartInfo({ artist: "", title: "" });
        setMelonChart((prev) =>
          prev.map((item) => ({ ...item, isAtv: false }))
        );
      },
      onError: (error) => {
        const errorCode = error as AxiosError;
        toast.error(ErrorHandler.applyWakeupSongError(errorCode));
      },
    });
  };

  useEffect(() => {
    if (MelonChartList?.data) {
      setMelonChart(
        MelonChartList.data.map((item) => ({ ...item, isAtv: false }))
      );
    }
  }, [MelonChartList]);

  return {
    melonChart,
    melonChartInfo,
    handleClickMelonChart,
    handleClickMelonChartApply,
  };
};

export default useMelonChart;
