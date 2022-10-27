import { usePostMelonChartApply } from "querys/melonChart/melonChart.query";
import React from "react";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";

const useMelonChart = () => {
  const queryClient = useQueryClient();
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
