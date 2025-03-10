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
import { QUERY_KEYS } from "queries/queryKey";
import { useRecoilState } from "recoil";
import { IsFirstVisit } from "store/ToolTip/toolTip.store";
import { TOOL_TIP_KEY } from "constants/ToolTip/toolTip.constants";

const useMelonChart = () => {
  const queryClient = useQueryClient();
  const postMelonChartApplyMutation = usePostMelonChartApplyMutation();
  const { data: MelonChartList } = useGetMelonChartLists();
  const [isFirstVisit, setIsFirstVisit] = useRecoilState(IsFirstVisit);
  const [melonChart, setMelonChart] = useState<MelonChartListType[]>([]);
  const [melonChartInfo, setMelonChartInfo] = useState<MelonKeyword>({
    artist: "",
    title: "",
  });

  const handleClickMelonChart = (id: number, title: string, artist: string) => {
    if (isFirstVisit) {
      localStorage.setItem(TOOL_TIP_KEY, "false");
      setIsFirstVisit(false);
    }

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
        queryClient.invalidateQueries(
          QUERY_KEYS.wakeupSong.getPendingMusicList
        );
        queryClient.invalidateQueries(QUERY_KEYS.wakeupSong.getMyAllWakeupSong);
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
