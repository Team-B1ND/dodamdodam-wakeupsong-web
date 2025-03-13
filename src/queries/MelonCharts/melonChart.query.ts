import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery } from "react-query";
import { MelonKeyword } from "repository/MelonCharts/melonChart.param";
import melonChartRepository from "repository/MelonCharts/melonChart.repository";

export const useGetMelonChartLists = () =>
  useQuery(QUERY_KEYS.melonChart.getMelonChartList, () =>
    melonChartRepository.getMelonChartList()
  );

export const usePostMelonChartApplyMutation = () => {
  const mutation = useMutation(({ artist, title }: MelonKeyword) =>
    melonChartRepository.postMelonChartApply({ artist, title })
  );
  return mutation;
};
