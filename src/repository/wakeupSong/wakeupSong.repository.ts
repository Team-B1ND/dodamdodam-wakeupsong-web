import customAxios from "lib/axios/customAxios";
import { Response } from "types/util/response.type";
import { Allow } from "repository/wakeupSong/wakeupSong.Param";
import { WakeupSongMusicLists } from "types/wakeupSongMy/wakeupSongMy.type.";

class wakeupSongRepository {
  public async getWakeupSongPendingMusicListData(): Promise<WakeupSongMusicLists> {
    const { data } = await customAxios.get("wakeup-song/pending");
    return data;
  }

  public async getWakeupSongMy(): Promise<WakeupSongMusicLists> {
    const { data } = await customAxios.get("wakeup-song/my");
    return data;
  }

  public async getWakeupSongTodayMusicData(
    date: string[]
  ): Promise<WakeupSongMusicLists> {
    const { data } = await customAxios.get(
      `wakeup-song/allowed?year=${date[0]}&month=${date[1]}&day=${date[2]}`
    );
    return data;
  }

  public async postApplyWakeupSong(wakeupSongUrl: string): Promise<Response> {
    const { data } = await customAxios.post(`wakeup-song`, {
      videoUrl: wakeupSongUrl,
    });
    return data;
  }

  public async wakeupSongAllow(musicInfo: Allow): Promise<Response> {
    const { data } = await customAxios.patch("wakeup-song/allow", {
      id: musicInfo.id,
      playedDate: musicInfo.playedDate,
    });
    return data;
  }

  public async wakeupSongDibs(wakeupSongUrl: string): Promise<Response> {
    const { data } = await customAxios.post("wakeup-song/dibs", {
      videoUrl: wakeupSongUrl,
    });
    return data;
  }
}

export default new wakeupSongRepository();
