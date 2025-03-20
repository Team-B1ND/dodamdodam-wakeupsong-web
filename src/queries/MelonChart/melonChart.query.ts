import { AxiosError } from "axios";
import { QUERY_KEYS } from "queries/queryKey";
import { useMutation, useQuery, UseQueryOptions } from "react-query";
import {
  MelonChartListsResponse,
  MelonKeyword,
} from "repository/MelonChart/melonChart.param";
import melonChartRepository from "repository/MelonChart/melonChart.repository";

export const useGetMelonChartLists = (
  options?: UseQueryOptions<
    MelonChartListsResponse,
    AxiosError,
    MelonChartListsResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.melonChart.getMelonChartList,
    () => melonChartRepository.getMelonChartList(),
    {
      ...options,
    }
  );

export const usePostMelonChartApplyMutation = () => {
  const mutation = useMutation(({ artist, title }: MelonKeyword) =>
    melonChartRepository.postMelonChartApply({ artist, title })
  );
  return mutation;
};
