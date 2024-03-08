import { Response } from "types/util/response.type";

export interface WakeupSongMusic {
  channelTitle: string;
  createdAt: string;
  id: number;
  playDate: string;
  status: "ALLOWED" | "PENDING" | "DENIED";
  thumbnailUrl: string;
  videoId: string;
  videoTitle: string;
  videoUrl: string;
}

export interface WakeupSongMusicLists extends Response {
  data: WakeupSongMusic[];
}
