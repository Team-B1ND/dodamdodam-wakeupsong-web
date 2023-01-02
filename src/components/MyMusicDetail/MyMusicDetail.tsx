import Title from "components/Common/Title";
import useWakeupSongMyData from "hooks/wakeupSongMy/useWakeupSongMy";
import * as S from "./MyMusicDetail.style";
import { useMemo } from "react";

const MyMusicStore = () => {

  const { myAllData, getMyAllData } = useWakeupSongMyData();

  useMemo(() => {
    getMyAllData();
  }, [])

  return (
    <S.MyMusicDetailWrapContainer>
      <Title titleMent={"마이뮤직"} subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"} />
      <S.MyMusicListWrap>

        {myAllData.length !== 0 ? myAllData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <S.MusicInfoContainer>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></S.MusicThumbnailImg>
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
