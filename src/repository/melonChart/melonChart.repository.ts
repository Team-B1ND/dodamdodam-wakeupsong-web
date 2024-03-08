import customAxios from "lib/axios/customAxios";
import { MelonChartListsResponse, MelonKeyword } from "./melonChart.param";
import { Response } from "types/util/response.type";

class MelonChartRepository {
  public async getMelonChartList(): Promise<MelonChartListsResponse> {
    const { data } = await customAxios.get("wakeup-song/chart");
    return data;
  }

  public async postMelonChartApply({
    artist,
    title,
  }: MelonKeyword): Promise<Response> {
    const { data } = await customAxios.post("wakeup-song/keyword", {
      artist: artist,
      title: title,
    });
    return data;
  }
}

export default new MelonChartRepository();
