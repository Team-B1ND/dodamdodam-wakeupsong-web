import * as S from "../style";
import {
  useGetTodayMusicDataQuery,
  useGetTomorrowMusicDataQuery,
} from "queries/wakeupSong/wakeupSong.query";
import { useRecoilValue } from "recoil";
import { WakeupSongDate } from "store/reducer";

const ApproveMusicStore = () => {
  const date = useRecoilValue(WakeupSongDate);
  const { data: todayData } = useGetTodayMusicDataQuery({ suspense: true });
  const { data: tomorrowData } = useGetTomorrowMusicDataQuery({ suspense: true });

  const data = (date === "today" ? todayData : tomorrowData);

  return (
    <S.ApproveMusicWrap>
      {data?.data.length !== 0 ? (
        data?.data.slice(0, 4).map((item, idx) => {
          const createdDate = item.createdAt.split(" ")[0];
          return (
            <S.MusicInfoContainer key={idx}>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.MusicThumbnailImg
                onClick={() => window.open(item.videoUrl)}
                src={item.thumbnail}></S.MusicThumbnailImg>
              <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
              <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData>
              <S.ApplyDate>{createdDate}</S.ApplyDate>
            </S.MusicInfoContainer>
          );
        })
      ) : (
        <S.MusicNull>승인한 기상송이 없습니다</S.MusicNull>
      )}
    </S.ApproveMusicWrap>
  );
};

export default ApproveMusicStore;
