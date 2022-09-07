export interface WakeupSongMyMusic {
  applyingMember: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: string;
    role: "ADMIN" | "STUDENT";
    status: "ACTIVE" | "DEACTIVATED";
  };
  channelTitle: string;
  checkingMember: {
    email: string;
    id: string;
    joinDate: string;
    name: string;
    profileImage: string;
    role: "ADMIN" | "STUDENT";
    status: "ACTIVE" | "DEACTIVATED";
  };
  createdDate: string;
  duration: string;
  id: number;
  playDate: string;
  status: "ALLOWED" | "PENDING" | "DENIED";
  thumbnailUrl: string;
  videoId: string;
  videoTitle: string;
  videoUrl: string;
}

export interface WakeupSongMyMusicLists {
  data: WakeupSongMyMusic[];
}
