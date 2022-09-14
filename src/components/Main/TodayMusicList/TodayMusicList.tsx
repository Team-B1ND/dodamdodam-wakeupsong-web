import * as S from "./TodayMusicList.style";
import useWakeupSongTodayData from "hooks/wakeupSongToday/useWakeupSongTodayData";
import Title from "components/Common/Title";

const TodayMusicList = () => {

  const { todaySongData } = useWakeupSongTodayData();

  return (
    <S.TodayMusicListContainer>
      <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />

      <S.TodayMusicListContents>
        {todaySongData && todaySongData.map((item, idx) => {
          return (
            <S.MusicContainer onClick={() => window.open(item.videoUrl)} key={idx + 1}>
              <S.MusicThumbnailImg src={item.thumbnailUrl} alt={item.videoTitle} />
              <S.MusicThumbnailTitle>{item.videoTitle}</S.MusicThumbnailTitle>
            </S.MusicContainer>
          )
        })}
      </S.TodayMusicListContents>
    </S.TodayMusicListContainer >
  );
};

export default TodayMusicList;
