import * as S from "./MyMusicList.style";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMyData";
import Title from "components/Common/Title";

const MyMusicList = () => {

  const { myData } = useWakeupSongMyData();

  return (
    <S.MyMusicListContainer>
      <Title titleMent={"내가 신청한 기상송"} subTitleMent={""} />

      <S.MyMusicListContents>
        {myData && myData.map((item, idx) => {
          return (
            <S.MyMusicContainer key={idx}>
              <S.MyMusicThumbnailImg src={item.thumbnailUrl} alt={item.videoTitle} />
              <S.MyMusicThumbnailTitle>{item.videoTitle}</S.MyMusicThumbnailTitle>
            </S.MyMusicContainer>
          )
        })}
      </S.MyMusicListContents>
    </S.MyMusicListContainer>
  );
};

export default MyMusicList;
