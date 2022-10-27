import customAxios from "lib/axios/customAxios";
import { Response } from "types/util/response.type";
import { MelonChartListsResponse, MelonKeyword } from "./melonChart.Param";

class melonChartRepository {
  public async getMelonChartList(): Promise<MelonChartListsResponse> {
    const { data } = await customAxios.get("wakeup-song/chart");
    return data;
  }

  public async postMelonChartApply({
    artist,
    title,
  }: MelonKeyword): Promise<number> {
    const { status } = await customAxios.post("wakeup-song/keyword", {
      artist: artist,
      title: title,
    });
    return status;
  }
}

export default new melonChartRepository();
