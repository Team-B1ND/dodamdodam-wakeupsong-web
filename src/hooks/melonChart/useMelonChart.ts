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
            toast.error("이미 이번주에 기상송을 신청하셨습니다");
            return;
          }
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
