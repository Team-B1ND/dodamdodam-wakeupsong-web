export interface MelonChartListsPrams {
  album: string;
  artist: string;
  name: string;
  rank: number;
  thumbnail: string;
}

export interface MelonChartListsResponse {
  data: MelonChartListsPrams[];
}

export interface MelonKeyword {
  artist: string;
  title: string;
}
