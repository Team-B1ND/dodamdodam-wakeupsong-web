import * as Style from "./TodayMusicList.style";
import Title from "components/Common/Title";
import { Link } from "react-router-dom";
import { useGetTodayMusicData } from "querys/todayMusic/todayMusic.query";

const TodayMusicList = () => {

  const { data } = useGetTodayMusicData();

  return (
    <Style.TodayMusicListContainer>

      <Style.TitleContainer>
        <Title titleMent={"오늘의 기상송"} subTitleMent={"오늘 나온 기상송은 어땠나요?"} />
        {/* 오늘 승인한 기상송은 내일의 기상송이라고 표시 하고 그 다음날에 나오게 표시 해야함 */}
        <Link className="seeMoreDetails" to={"/todaymusicdetail"}>더보기</Link>
      </Style.TitleContainer>

      <Style.TodayMusicListContents>
        {data?.data ? data?.data.map((item, idx) => {
          return (
            <Style.MusicContainer onClick={() => window.open(item.videoUrl)} key={idx + 1}>
              <Style.MusicThumbnailImg src={item.thumbnailUrl} >
                <Style.MusicThumbnailTitle>{item.videoTitle}</Style.MusicThumbnailTitle>
              </Style.MusicThumbnailImg>
            </Style.MusicContainer>
          )
        }) : <Style.MusicNull>승인된 기상송이 없습니닷기릿</Style.MusicNull>
        }
      </Style.TodayMusicListContents>
    </Style.TodayMusicListContainer >
  );
};

export default TodayMusicList;
