import Title from "components/Common/Title";
import useWakeupSongPendingMusicListData from "hooks/wakeupSongPending/wakeupSongPending";
import * as Style from "./PendingMusicDetail.style";
import { useMemo } from "react";

const PendingMusicDetail = () => {
  const { pendingAllMusicListData, getWakeupSongPendingAllMusic } = useWakeupSongPendingMusicListData();

  useMemo(() => {
    getWakeupSongPendingAllMusic()
  }, [])

  return (
    <Style.PendingMusicDetailWrapContainer>
      <Title titleMent={"신청 현황"} subTitleMent={"어떤 노래가 있는지 확인해보세요!"} />

      <Style.PendingMusicMusicWrap>

        {pendingAllMusicListData.length !== 0 ? pendingAllMusicListData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];
          return (
            <Style.MusicInfoContainer key={idx}>
              <Style.ApplyRanking>{idx + 1}</Style.ApplyRanking>
              <Style.MusicThumbnailImg onClick={() => window.open(item.videoUrl)} src={item.thumbnailUrl}></Style.MusicThumbnailImg>
              <Style.VideoTitle>{item.videoTitle}</Style.VideoTitle>
              <Style.ChannelNameData>{item.channelTitle}</Style.ChannelNameData>
              <Style.ApplyDate>{createdDate}</Style.ApplyDate>
            </Style.MusicInfoContainer>
          )
        })
          :
          <Style.MusicNull>신청한 기상송이 없쓰껄</Style.MusicNull>
        }
      </Style.PendingMusicMusicWrap>
    </Style.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusicDetail;
