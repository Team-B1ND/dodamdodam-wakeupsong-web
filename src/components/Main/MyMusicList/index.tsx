import * as Style from "./style";
import Title from "components/Common/Title";
import { useGetMyAllWakeupSongQuery } from "queries/wakeupSong/wakeupSong.query";
import { Link } from "react-router-dom";

const MyMusicList = () => {
  const myData = useGetMyAllWakeupSongQuery().data?.data.slice(0, 4);

  return (
    <Style.MyMusicListContainer>
      <Style.TitleContainer>
        <Title
          titleMent={"마이뮤직"}
          subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
        />
        <Link className="seeMoreDetails" to={"/mymusicdetail"}>
          더보기
        </Link>
      </Style.TitleContainer>

      <Style.MyMusicListContents>
        {myData?.length !== 0 ? (
          myData?.map((item, idx) => {
            const createdDate = item.createdAt.split(" ")[0];
            return (
              <Style.MyMusicContainer key={idx}>
                <Style.MyMusicThumbnailImg
                  src={item.thumbnailUrl}
                  onClick={() => window.open(item.videoUrl)}
                />
                <Style.MyMusicThumbnailTitle>
                  {item.videoTitle}
                </Style.MyMusicThumbnailTitle>
                <Style.CreatedDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </Style.CreatedDateContainer>
              </Style.MyMusicContainer>
            );
          })
        ) : (
          <Style.MusicNull>신청한 기상송이 없쓰껄</Style.MusicNull>
        )}
      </Style.MyMusicListContents>
    </Style.MyMusicListContainer>
  );
};

export default MyMusicList;
