import customAxios from "lib/axios/customAxios";
import { WakeupSongMusicLists } from "types/wakeupSong/wakeupSongMy";

class wakeupSongRepository {
  public async getWakeupSongPendingMusicListData(): Promise<WakeupSongMusicLists> {
    const { data } = await customAxios.get("wakeup-song/pending");
    return data;
  }

  public async getWakeupSongMyData(): Promise<WakeupSongMusicLists> {
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

  public async postApplyWakeupSong(wakeupSongUrl: string) {
    // 신청헸다는 것을 status로 유저에게 알려주기 alert으로
    const { status } = await customAxios.post(`wakeup-song`, {
      videoUrl: wakeupSongUrl,
    });
    console.log(status);
  }
}

export default new wakeupSongRepository();
