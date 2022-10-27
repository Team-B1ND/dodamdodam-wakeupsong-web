import Title from "components/Common/Title";
import useWakeupSongPendingMusicListData from "hooks/wakeupSongPending/wakeupSongPending";
import * as S from "./PendingMusicDetail.style";
import { useMemo } from "react";

const PendingMusicDetail = () => {
  const { pendingAllMusicListData, getWakeupSongPendingAllMusic } = useWakeupSongPendingMusicListData();

  useMemo(() => {
    getWakeupSongPendingAllMusic()
  }, [])

  return (
    <S.PendingMusicDetailWrapContainer>
      <Title titleMent={"신청 현황"} subTitleMent={"어떤 노래가 있는지 확인해보세요!"} />
      <S.PendingMusicMusicWrap>
        <S.InfoTitle>
          <S.MusicName>곡명</S.MusicName>
          <S.ChannelName>채널명</S.ChannelName>
          <S.ApplyDay>신청일</S.ApplyDay>
        </S.InfoTitle>
        {pendingAllMusicListData.length !== 0 ? pendingAllMusicListData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <S.MusicInfoContainer key={idx}>
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
      </S.PendingMusicMusicWrap>
    </S.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusicDetail;
