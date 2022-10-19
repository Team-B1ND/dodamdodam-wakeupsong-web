import { useQuery } from "react-query";
import melonChartRepository from "repository/melonChart/melonChart.repository";

export const useGetMelonChartLists = () =>
  useQuery("melonChart/getMelonChartLists", () =>
    melonChartRepository.getMelonChartList()
  );
