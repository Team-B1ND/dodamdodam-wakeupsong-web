import customAxios from "lib/axios/customAxios";
import { MelonChartListsResponse } from "./melonChart.Param";

class melonChartRepository {
  public async getMelonChartList(): Promise<MelonChartListsResponse> {
    const { data } = await customAxios.get("wakeup-song/chart");
    return data;
  }
}

export default new melonChartRepository();
