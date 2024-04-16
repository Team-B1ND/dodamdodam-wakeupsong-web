export interface WakeupSongMusic {
  channelTitle: string;
  createdAt: string;
  id: number;
  playDate: string;
  status: "ALLOWED" | "PENDING" | "DENIED";
  thumbnail: string;
  videoId: string;
  videoTitle: string;
  videoUrl: string;
}

export interface WakeupSongMusicLists extends Response {
  data: WakeupSongMusic[];
}
