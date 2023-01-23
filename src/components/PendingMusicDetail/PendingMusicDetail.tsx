import Title from "components/Common/Title";
import * as Style from "./PendingMusicDetail.style";
import { useGetPendingMusicList } from "queries/pendingMusic/pendingMusic.query";

const PendingMusicDetail = () => {
  const PendingMusicData = useGetPendingMusicList().data?.data;

  return (
    <Style.PendingMusicDetailWrapContainer>
      <Title titleMent={"신청 현황"} subTitleMent={"어떤 노래가 있는지 확인해보세요!"} />

      <Style.PendingMusicMusicWrap>

        {PendingMusicData?.length !== 0 ? PendingMusicData?.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <Style.MusicInfoContainer key={idx}>
              <Style.ApplyRanking>{idx + 1}</Style.ApplyRanking>
              <Style.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></Style.MusicThumbnailImg>
              <Style.VideoTitle>{item.videoTitle}</Style.VideoTitle>
              <Style.ChannelNameData>{item.channelTitle}</Style.ChannelNameData>
              <Style.ApplyDate>{createdDate}</Style.ApplyDate>
            </Style.MusicInfoContainer>
          )
        })
          :
          <Style.MusicNull>신청한 기상송이 없쓰껄</Style.MusicNull>
        }
      </Style.PendingMusicMusicWrap>
    </Style.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusicDetail;
