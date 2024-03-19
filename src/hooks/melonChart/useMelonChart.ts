import { usePostMelonChartApplyMutation } from "queries/melonChart/melonChart.query";
import { toast } from "react-toastify";

const useMelonChart = () => {
  const postMelonChartApply = usePostMelonChartApplyMutation();

  const melonChartApply = (artistParam: string, titleParam: string) => {
    postMelonChartApply.mutateAsync(
      {
        artist: artistParam,
        title: titleParam,
      },
      {
        onSuccess: (e) => {
          if (e.status === 226) {
            toast.error("이미 이번주에 기상송을 신청했습니다!");
            return;
          }

          toast.success("기상송을 신청했습니다!");
        },

        onError: () => {
          toast.error("기상송 신청을 실패했습니다!");
        },
      }
    );
  };
  return { melonChartApply };
};

export default useMelonChart;
