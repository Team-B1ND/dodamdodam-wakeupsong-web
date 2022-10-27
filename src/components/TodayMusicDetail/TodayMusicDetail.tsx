import Title from "components/Common/Title";
import useWakeupSongTodayData from "hooks/wakeupSongToday/useWakeupSongTodayData";
import * as S from "./TodayMusicDetail.style";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import useWakeupSongDibs from "hooks/wakeupSongDibs/useWakeupSongDibs";
import { useGetTodayMusicData } from "querys/todayMusic/todayMusic.query";

const TodayMusicDetail = () => {

  // const { todaySongData } = useWakeupSongTodayData();
  const { postWakeupSongDibs } = useWakeupSongDibs();
  const { data } = useGetTodayMusicData();


  return (
    <S.TodayMusicDetailWrapContainer>
      <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />
      <S.TodayMusicWrap>
        <S.InfoTitle>
          <S.MusicName>곡명</S.MusicName>
          <S.ChannelName>채널명</S.ChannelName>
          <S.ApplyDay>신청일</S.ApplyDay>
        </S.InfoTitle>
        {data?.data ? data?.data.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <S.MusicInfoContainer key={idx}>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></S.MusicThumbnailImg>
              <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
              <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData>
              <S.ApplyDate>{createdDate}</S.ApplyDate>
              {/* <BsFillBookmarkStarFill style={{ fontSize: "1.2rem", color: "#5c5c5c", cursor: "pointer" }} onClick={() => postWakeupSongDibs(item.videoUrl)} /> */}
            </S.MusicInfoContainer>
          )
        })
          :
          <S.MusicNull>신청한 기상송이 없쓰껄</S.MusicNull>
        }
      </S.TodayMusicWrap>
    </S.TodayMusicDetailWrapContainer>
  );
};

export default TodayMusicDetail;
