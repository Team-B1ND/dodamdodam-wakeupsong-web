import Title from "components/Common/Title";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMy";
import * as S from "./MyMusicDetail.style";

const MyMusicStore = () => {

  const { myData } = useWakeupSongMyData();

  return (
    <S.MyMusicDetailWrapContainer>
      <Title titleMent={"마이뮤직"} subTitleMent={""} />
      <S.MyMusicListWrap>
        <S.InfoTitle>
          <S.MusicName>곡명</S.MusicName>
          <S.ChannelName>채널명</S.ChannelName>
          <S.ApplyDay>신청일</S.ApplyDay>
        </S.InfoTitle>
        {myData.length !== 0 ? myData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <S.MusicInfoContainer>
              <S.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></S.MusicThumbnailImg>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
              <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData>
              <S.ApplyDate>{createdDate}</S.ApplyDate>
            </S.MusicInfoContainer>
          )
        })
          :
          <S.MusicNull>신청한 기상송이 없쓰껄</S.MusicNull>
        }
      </S.MyMusicListWrap>
    </S.MyMusicDetailWrapContainer>
  );
};

export default MyMusicStore;
