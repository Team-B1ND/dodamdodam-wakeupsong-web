import { useGetTodayMusicDataQuery } from "queries/wakeupSong/wakeupSong.query";
import * as S from "../style";

const TodayMusicStore = () => {
  const { data } = useGetTodayMusicDataQuery({ suspense: true });

  return (
    <S.TodayMusicWrap>
      {data?.data.length !== 0 ? (
        data?.data.slice(0, 4).map((item, idx) => {
          const createdDate = item.createdAt.split(" ")[0];
          return (
            <S.MusicInfoContainer key={idx}>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.MusicThumbnailImg
                onClick={() => window.open(item.videoUrl)}
                src={item.thumbnailUrl}
              ></S.MusicThumbnailImg>
              <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
              <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData>
              <S.ApplyDate>{createdDate}</S.ApplyDate>
            </S.MusicInfoContainer>
          );
        })
      ) : (
        <S.MusicNull>승인한 기상송이 없습니다</S.MusicNull>
      )}
    </S.TodayMusicWrap>
  );
};

export default TodayMusicStore;
