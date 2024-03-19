import * as S from "../style";
import { BsTrash } from "react-icons/bs";
import useDeleteMyMusic from "hooks/deleteMyMusic/useDeleteMyWakeupSong";
import { useGetMyAllWakeupSongQuery } from "queries/wakeupSong/wakeupSong.query";

export default function MyMusicDetailList() {
  const myData = useGetMyAllWakeupSongQuery({ suspense: true }).data?.data;
  const { handleDeleteMyWakeupSong } = useDeleteMyMusic();
  return (
    <S.MyMusicListWrap>
      {myData?.length !== 0 ? (
        myData?.map((item, idx) => {
          const createdDate = item.createdAt.split(" ")[0];
          return (
            <S.MusicInfoContainer>
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
              <S.MusicThumbnailImg
                onClick={() => window.open(item.videoUrl)}
                src={item.thumbnailUrl}
              ></S.MusicThumbnailImg>
              <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
              <S.ChannelNameData>{item.channelTitle}</S.ChannelNameData>
              <S.ApplyDate>{createdDate}</S.ApplyDate>
              <BsTrash
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteMyWakeupSong(item.id)}
              />
            </S.MusicInfoContainer>
          );
        })
      ) : (
        <S.MusicNull>신청한 기상송이 없습니다</S.MusicNull>
      )}
    </S.MyMusicListWrap>
  );
}
