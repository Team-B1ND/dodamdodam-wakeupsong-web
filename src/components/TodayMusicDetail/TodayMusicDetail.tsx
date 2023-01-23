import Title from "components/Common/Title";
import * as Style from "./TodayMusicDetail.style";
import { useGetTodayMusicData } from "queries/todayMusic/todayMusic.query";

const TodayMusicDetail = () => {

  const { data } = useGetTodayMusicData();
  const nowDate = new Date().getHours();

  return (
    <Style.TodayMusicDetailWrapContainer>
      {
        nowDate >= 16 ?
          <Title titleMent={"내일의 기상송"} subTitleMent={"내일 나올 기상송은 어떤가요?"} /> :
          <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />
      }

      <Style.TodayMusicWrap>
        {data?.data.length !== 0 ? data?.data.slice(0, 4).map((item, idx) => {
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
          <Style.MusicNull>승인한 기상송이 없쓰껄</Style.MusicNull>
        }
      </Style.TodayMusicWrap>
    </Style.TodayMusicDetailWrapContainer>
  );
};

export default TodayMusicDetail;
