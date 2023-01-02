import { usePostMelonChartApply } from "querys/melonChart/melonChart.query";
import { toast } from "react-toastify";

const useMelonChart = () => {
  const postMelonChartApply = usePostMelonChartApply();

  const melonChartApply = (artistParam: string, titleParam: string) => {
    postMelonChartApply.mutateAsync(
      {
        artist: artistParam,
        title: titleParam,
      },
      {
        onSuccess: () => {
          toast.success("신청 성공");
        },
        onError: () => {
          window.alert("신청 실패");
        },
      }
    );
  };
  return { melonChartApply };
};

export default useMelonChart;
