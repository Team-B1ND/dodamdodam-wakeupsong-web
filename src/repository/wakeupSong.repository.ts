import customAxios from "lib/axios/customAxios";
import { WakeupSongMyMusicLists } from "types/wakeupSong/wakeupSongMy";

interface Props {
  data: string[];
}

class wakeupSongRepository {
  public async getWakeupSongMyData(): Promise<WakeupSongMyMusicLists> {
    const { data } = await customAxios.get("/wakeup-song/my");
    console.log(data);
    return data;
  }

  public async getWakeupSongTodayMusicData(
    date: any
  ): Promise<WakeupSongMyMusicLists> {
    const { data } = await customAxios.get(
      `/wakeup-song/allowed?year=${date[0]}&month=${date[1]}&day=${date[2]}`
    );
    console.log(data);
    return data;
  }
}

export default new wakeupSongRepository();
