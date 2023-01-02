import { useMutation, useQuery } from "react-query";
import { MelonKeyword } from "repository/melonChart/melonChart.Param";
import melonChartRepository from "repository/melonChart/melonChart.repository";

export const useGetMelonChartLists = () =>
  useQuery("melonChart/getMelonChartLists", () =>
    melonChartRepository.getMelonChartList()
  );

export const usePostMelonChartApply = () => {
  const mutation = useMutation(({ artist, title }: MelonKeyword) =>
    melonChartRepository.postMelonChartApply({ artist, title })
  );
  return mutation;
};
