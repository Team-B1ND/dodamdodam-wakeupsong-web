import * as Style from "../style";
import { useGetPendingMusicList } from "queries/pendingMusic/pendingMusic.query";

const PendingMusicDetailStore = () => {
  const PendingMusicData = useGetPendingMusicList({ suspense: true }).data
    ?.data;
  return (
    <Style.PendingMusicMusicWrap>
      {PendingMusicData?.length !== 0 ? (
        PendingMusicData?.map((item, idx) => {
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
        <Style.MusicNull>신청한 기상송이 없쓰껄</Style.MusicNull>
      )}
    </Style.PendingMusicMusicWrap>
  );
};

export default PendingMusicDetailStore;
