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
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import ErrorHandler from "utils/Error/ErrorHandler";
import { QUERY_KEYS } from "queries/queryKey";

const useMelonChart = () => {
  const queryClient = useQueryClient();
  const postMelonChartApplyMutation = usePostMelonChartApplyMutation();
  const { data: MelonChartList } = useGetMelonChartLists();

  const [isEnabled, setIsEnabled] = useState(true);
  const [isHideToolTip, setIsShowToolTip] = useState(false);
  const [melonChart, setMelonChart] = useState<MelonChartListType[]>([]);
  const [melonChartInfo, setMelonChartInfo] = useState<MelonKeyword>({
    artist: "",
    title: "",
  });

  const handleClickMelonChart = (id: number, title: string, artist: string) => {
    setIsShowToolTip(true);
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
    if (!isEnabled) return;

    setIsEnabled(false);

    postMelonChartApplyMutation.mutate(melonChartInfo, {
      onSuccess: () => {
        B1ndToast.showSuccess("기상송을 신청했습니다!");
        queryClient.invalidateQueries(
          QUERY_KEYS.wakeupSong.getPendingMusicList
        );
        queryClient.invalidateQueries(QUERY_KEYS.wakeupSong.getMyAllWakeupSong);
        setMelonChartInfo({ artist: "", title: "" });
        setMelonChart((prev) =>
          prev.map((item) => ({ ...item, isAtv: false }))
        );
        setIsEnabled(true);
      },
      onError: (error) => {
        const errorCode = error as AxiosError;
        B1ndToast.showError(ErrorHandler.applyWakeupSongError(errorCode));
        setIsEnabled(true);
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
    isEnabled,
    melonChart,
    melonChartInfo,
    isHideToolTip,
    handleClickMelonChart,
    handleClickMelonChartApply,
  };
};

export default useMelonChart;
