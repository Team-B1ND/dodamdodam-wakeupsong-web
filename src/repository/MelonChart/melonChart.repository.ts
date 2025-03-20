import dodamAxios from "libs/Axios/dodamAxios";
import { MelonChartListsResponse, MelonKeyword } from "./melonChart.param";
import { Response } from "types/Util/response.type";

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

const melonChartRepository = new MelonChartRepository();
export default melonChartRepository;

