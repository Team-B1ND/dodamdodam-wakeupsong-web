import * as S from "./TodayMusicList.style";
import useWakeupSongTodayData from "hooks/wakeupSongToday/useWakeupSongTodayData";
import Title from "components/Common/Title";
import { Link } from "react-router-dom";

const TodayMusicList = () => {

  const { todaySongData } = useWakeupSongTodayData();

  return (
    <S.TodayMusicListContainer>

      <S.TitleContainer>
        <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />
        {/* 오늘 승인한 기상송은 내일의 기상송이라고 표시 하고 그 다음날에 나오게 표시 해야함 */}
        <Link className="seeMoreDetails" to={"/todaymusicdetail"}>더보기</Link>
      </S.TitleContainer>

      <S.TodayMusicListContents>
        {todaySongData.length !== 0 ? todaySongData.map((item, idx) => {
          return (
            <S.MusicContainer onClick={() => window.open(item.videoUrl)} key={idx + 1}>
              <S.MusicThumbnailImg src={item.thumbnailUrl} >
                <S.MusicThumbnailTitle>{item.videoTitle}</S.MusicThumbnailTitle>
              </S.MusicThumbnailImg>
              {/* <S.BookmarkPlusContainer>
                <BsFillBookmarkPlusFill />
              </S.BookmarkPlusContainer> */}
            </S.MusicContainer>
          )
        }) : <S.MusicNull>승인된 기상송이 없습니닷기릿</S.MusicNull>
        }
      </S.TodayMusicListContents>
    </S.TodayMusicListContainer >
  );
};

export default TodayMusicList;
