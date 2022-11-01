import Title from "components/Common/Title";
import * as Style from "./TodayMusicDetail.style";
import { useGetTodayMusicData } from "querys/todayMusic/todayMusic.query";

const TodayMusicDetail = () => {

  const { data } = useGetTodayMusicData();

  return (
    <Style.TodayMusicDetailWrapContainer>
      <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />
      <Style.TodayMusicWrap>
        <Style.InfoTitle>
          <Style.MusicName>곡명</Style.MusicName>
          <Style.ChannelName>채널명</Style.ChannelName>
          <Style.ApplyDay>신청일</Style.ApplyDay>
        </Style.InfoTitle>
        {data?.data ? data?.data.map((item, idx) => {
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
      </Style.TodayMusicWrap>
    </Style.TodayMusicDetailWrapContainer>
  );
};

export default TodayMusicDetail;
