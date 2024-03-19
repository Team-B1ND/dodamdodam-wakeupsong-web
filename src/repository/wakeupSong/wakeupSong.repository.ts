import dodamAxios from "libs/axios/dodamAxios";
import { Response } from "types/util/response.type";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";

class WakeupSongRepository {
  public async getWakeupSongPendingMusicListData(): Promise<WakeupSongMusicLists> {
    const { data } = await dodamAxios.get("wakeup-song/pending");
    return data;
  }

  public async getWakeupSongMy(): Promise<WakeupSongMusicLists> {
    const { data } = await dodamAxios.get("wakeup-song/my");
    return data;
  }

  public async getWakeupSongTodayMusicData(
    date: string[]
  ): Promise<WakeupSongMusicLists> {
    const { data } = await dodamAxios.get(
      `wakeup-song/allowed?year=${date[0]}&month=${date[1]}&day=${date[2]}`
    );
    return data;
  }

  public async postApplyWakeupSong(wakeupSongUrl: string): Promise<Response> {
    const { data } = await dodamAxios.post("wakeup-song", {
      videoUrl: wakeupSongUrl,
    });
    return data;
  }

  public async wakeupSongAllow(id: number): Promise<Response> {
    const { data } = await dodamAxios.patch(`wakeup-song/allow/${id}`);
    return data;
  }

  public async wakeupSongRefuse(id: number): Promise<Response> {
    const { data } = await dodamAxios.patch(`wakeup-song/deny/${id}`);
    return data;
  }

  public async deleteMyWakeupSong(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`wakeup-song/my/${id}`);
    return data;
  }
}

export default new WakeupSongRepository();
