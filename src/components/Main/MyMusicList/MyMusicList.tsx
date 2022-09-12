import * as S from "./MyMusicList.style";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMyData";

const MyMusicList = () => {

  const { myData } = useWakeupSongMyData();

  return (
    <S.MyMusicListContainer>
      <S.MyMusicListTitle>
        내가 신청한 기상송
      </S.MyMusicListTitle>

      <S.MyMusicListContents>
        {myData && myData.map((item, idx) => {
          return (
            <S.MyMusicContainer>
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
