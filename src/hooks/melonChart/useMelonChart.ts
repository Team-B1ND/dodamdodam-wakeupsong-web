import { AxiosError } from "axios";
import { usePostMelonChartApplyMutation } from "queries/melonChart/melonChart.query";
import { toast } from "react-toastify";
import ErrorHandler from "utils/Error/ErrorHandler";

const useMelonChart = () => {
  const postMelonChartApply = usePostMelonChartApplyMutation();

  const melonChartApply = (artistParam: string, titleParam: string) => {
    postMelonChartApply.mutateAsync(
      {
        artist: artistParam,
        title: titleParam,
      },
      {
        onSuccess: () => {
          toast.success("기상송을 신청했습니다!");
        },

        onError: (error) => {
          const errorCode = error as AxiosError;
          toast.error(ErrorHandler.applyWakeupSongError(errorCode));
        },
      }
    );
  };
  return { melonChartApply };
};

export default useMelonChart;
