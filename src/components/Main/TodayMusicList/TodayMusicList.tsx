import * as Style from "./TodayMusicList.style";
import Title from "components/Common/Title";
import { Link } from "react-router-dom";
import { useGetTodayMusicData } from "queries/todayMusic/todayMusic.query";

const TodayMusicList = () => {
  const { data } = useGetTodayMusicData();
  const nowDate = new Date().getHours();

  return (
    <Style.TodayMusicListContainer>
      <Style.TitleContainer>
        {nowDate >= 16 ? (
          <Title
            titleMent={"내일의 기상송"}
            subTitleMent={"내일 나올 기상송은 어떤가요?"}
          />
        ) : (
          <Title
            titleMent={"오늘의 기상송"}
            subTitleMent={"오늘 나온 기상송은 어땠나요?"}
          />
        )}
        <Link className="seeMoreDetails" to={"/todaymusicdetail"}>
          더보기
        </Link>
      </Style.TitleContainer>

      <Style.TodayMusicListContents>
        {data?.data.length !== 0 ? (
          data?.data.slice(0, 4).map((item, idx) => {
            return (
              <Style.MusicContainer
                onClick={() => window.open(item.videoUrl)}
                key={idx + 1}
              >
                <Style.MusicThumbnailImg src={item.thumbnailUrl}>
                  <Style.MusicThumbnailTitle>
                    {item.videoTitle}
                  </Style.MusicThumbnailTitle>
                </Style.MusicThumbnailImg>
              </Style.MusicContainer>
            );
          })
        ) : (
          <Style.MusicNull>승인된 기상송이 없습니닷기릿</Style.MusicNull>
        )}
      </Style.TodayMusicListContents>
    </Style.TodayMusicListContainer>
  );
};

export default TodayMusicList;
