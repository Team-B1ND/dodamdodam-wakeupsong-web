import * as S from "../style";
import Title from "components/common/Title";
import { useGetTomorrowMusicDataQuery } from "queries/wakeupSong/wakeupSong.query";
import { Link } from "react-router-dom";

const TomorrowMusic = () => {
  const { data } = useGetTomorrowMusicDataQuery();

  return (
    <>
      <S.TitleContainer>
        <Title
          titleMent={"내일의 기상송"}
          subTitleMent={"내일 나올 기상송은 어떤가요?"}
        />
        <Link className="seeMoreDetails" to={"/todaymusic"}>
          더보기
        </Link>
      </S.TitleContainer>

      <S.MusicListContents>
        {data?.data.length !== 0 ? (
          data?.data.slice(0, 4).map((item, idx) => {
            return (
              <S.MusicContainer
                onClick={() => window.open(item.videoUrl)}
                key={idx + 1}>
                <S.MusicThumbnailImg src={item.thumbnail}>
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
      </S.MusicListContents>
    </>
  );
};

export default TomorrowMusic;
