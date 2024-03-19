import { useGetPendingMusicListQuery } from "queries/wakeupSong/wakeupSong.query";
import * as S from "../style";

const PendingMusicDetailList = () => {
  const PendingMusicData = useGetPendingMusicListQuery({ suspense: true }).data
    ?.data;
  return (
    <S.PendingMusicMusicWrap>
      {PendingMusicData?.length !== 0 ? (
        PendingMusicData?.map((item, idx) => {
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
        <S.MusicNull>신청한 기상송이 없습니다</S.MusicNull>
      )}
    </S.PendingMusicMusicWrap>
  );
};
export default PendingMusicDetailList;
