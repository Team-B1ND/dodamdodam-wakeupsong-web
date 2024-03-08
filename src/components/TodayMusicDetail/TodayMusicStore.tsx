import * as Style from "./TodayMusicDetail.style";
import { useGetTodayMusicData } from "queries/todayMusic/todayMusic.query";

const TodayMusicStore = () => {
  const { data } = useGetTodayMusicData({ suspense: true });
  return (
    <Style.TodayMusicWrap>
      {data?.data.length !== 0 ? (
        data?.data.slice(0, 4).map((item, idx) => {
          const createdDate = item.createdAt.split(" ")[0];
          return (
            <Style.MusicInfoContainer key={idx}>
              <Style.ApplyRanking>{idx + 1}</Style.ApplyRanking>
              <Style.MusicThumbnailImg
                onClick={() => window.open(item.videoUrl)}
                src={item.thumbnailUrl}
              ></Style.MusicThumbnailImg>
              <Style.VideoTitle>{item.videoTitle}</Style.VideoTitle>
              <Style.ChannelNameData>{item.channelTitle}</Style.ChannelNameData>
              <Style.ApplyDate>{createdDate}</Style.ApplyDate>
            </Style.MusicInfoContainer>
          );
        })
      ) : (
        <Style.MusicNull>승인한 기상송이 없쓰껄</Style.MusicNull>
      )}
    </Style.TodayMusicWrap>
  );
};

export default TodayMusicStore;
