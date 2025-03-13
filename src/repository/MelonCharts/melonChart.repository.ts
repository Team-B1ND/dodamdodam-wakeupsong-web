import dodamAxios from "libs/Axioss/dodamAxios";
import { MelonChartListsResponse, MelonKeyword } from "./melonChart.param";
import { Response } from "types/Utils/response.type";

class MelonChartRepository {
  public async getMelonChartList(): Promise<MelonChartListsResponse> {
    const { data } = await dodamAxios.get("wakeup-song/chart");
    return data;
  }

  public async postMelonChartApply({
    artist,
    title,
  }: MelonKeyword): Promise<Response> {
    const { data } = await dodamAxios.post("wakeup-song/keyword", {
      artist,
      title,
    });
    return data;
  }
}

export default new MelonChartRepository();
