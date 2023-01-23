import { usePostMelonChartApply } from "queries/melonChart/melonChart.query";
import { toast } from "react-toastify";

const useMelonChart = () => {
  const { usePostMelonChartApplyMutation } = usePostMelonChartApply();

  const melonChartApply = (artistParam: string, titleParam: string) => {
    usePostMelonChartApplyMutation.mutateAsync(
      {
        artist: artistParam,
        title: titleParam,
      },
      {
        onSuccess: () => {
          toast.success("신청 성공");
        },
        onError: () => {
          toast.error("신청 실패");
        },
      }
    );
  };
  return { melonChartApply };
};

export default useMelonChart;
