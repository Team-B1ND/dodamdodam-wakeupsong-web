import customAxios from "lib/axios/customAxios";
import { WakeupSongMyMusicLists } from "types/wakeupSong/wakeupSongMy";

class wakeupSongRepository {
  // public async getWakeupSongListData(): Promise<WakeupSongMyMusicLists>{
  // const { data } = await customAxios.get(); 남은 기상송들 가져오는 로직
  // return data;
  // }

  public async getWakeupSongMyData(): Promise<WakeupSongMyMusicLists> {
    const { data } = await customAxios.get("/wakeup-song/my");
    return data;
  }

  public async getWakeupSongTodayMusicData(
    date: string[]
  ): Promise<WakeupSongMyMusicLists> {
    const { data } = await customAxios.get(
      `/wakeup-song/allowed?year=${date[0]}&month=${date[1]}&day=${date[2]}`
    );
    console.log(data);

    return data;
  }
}

export default new wakeupSongRepository();
