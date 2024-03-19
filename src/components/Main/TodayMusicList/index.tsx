import * as S from "./style";
import Title from "components/Common/Title";
import { useGetTodayMusicDataQuery } from "queries/wakeupSong/wakeupSong.query";
import { Link } from "react-router-dom";

const TodayMusicList = () => {
  const { data } = useGetTodayMusicDataQuery();
  const nowDate = new Date().getHours();

  return (
    <S.TodayMusicListContainer>
      <S.TitleContainer>
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
      </S.TitleContainer>

      <S.TodayMusicListContents>
        {data?.data.length !== 0 ? (
          data?.data.slice(0, 4).map((item, idx) => {
            return (
              <S.MusicContainer
                onClick={() => window.open(item.videoUrl)}
                key={idx + 1}
              >
                <S.MusicThumbnailImg src={item.thumbnailUrl}>
                  <S.MusicThumbnailTitle>
                    {item.videoTitle}
                  </S.MusicThumbnailTitle>
                </S.MusicThumbnailImg>
              </S.MusicContainer>
            );
          })
        ) : (
          <S.MusicNull>승인된 기상송이 없습니다</S.MusicNull>
        )}
      </S.TodayMusicListContents>
    </S.TodayMusicListContainer>
  );
};

export default TodayMusicList;
