import * as S from "./style";
import Title from "components/common/Title";
import { useGetMyAllWakeupSongQuery } from "queries/wakeupSong/wakeupSong.query";
import { Link } from "react-router-dom";

const MyMusicList = () => {
  const myData = useGetMyAllWakeupSongQuery().data?.data.slice(0, 4);

  return (
    <S.MyMusicListContainer>
      <S.TitleContainer>
        <Title
          titleMent={"마이뮤직"}
          subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
        />
        <Link className="seeMoreDetails" to={"/mymusic"}>
          더보기
        </Link>
      </S.TitleContainer>

      <S.MyMusicListContents>
        {myData?.length !== 0 ? (
          myData?.map((item, idx) => {
            const createdDate = item.createdAt.split(" ")[0];
            return (
              <S.MyMusicContainer key={idx}>
                <S.MyMusicThumbnailImg
                  src={item.thumbnailUrl}
                  onClick={() => window.open(item.videoUrl)}
                />
                <S.MyMusicThumbnailTitle>
                  {item.videoTitle}
                </S.MyMusicThumbnailTitle>
                <S.CreatedDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.CreatedDateContainer>
              </S.MyMusicContainer>
            );
          })
        ) : (
          <S.MusicNull>신청한 기상송이 없습니다</S.MusicNull>
        )}
      </S.MyMusicListContents>
    </S.MyMusicListContainer>
  );
};

export default MyMusicList;
