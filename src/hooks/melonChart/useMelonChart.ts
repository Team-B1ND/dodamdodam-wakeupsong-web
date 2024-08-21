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
        onSuccess: () => {
          toast.success("기상송을 신청했습니다!");
        },

        onError: (error: any) => {
          if (error.status === 422) {
            toast.error("MV형식은 지원하지 않습니다!");
            return;
          }
          if (error.status === 423) {
            toast.error("이미 이번주에 기상송을 신청했습니다!");
            return;
          }
          toast.error("기상송 신청을 실패했습니다!");
        },
      }
    );
  };
  return { melonChartApply };
};

export default useMelonChart;
