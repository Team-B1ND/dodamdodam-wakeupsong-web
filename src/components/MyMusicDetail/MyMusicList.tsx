import * as MyMusicDetailStyle from "./MyMusicDetail.style";
import { BsTrash } from "react-icons/bs";
import useDeleteMyMusic from "hooks/deleteMyMusic/useDeleteMyWakeupSong";
import { useGetMyAllWakeupSong } from "queries/myAllWakeupSong/myAllWakeupSong.query";

export default function MyMusicList() {
  const myData = useGetMyAllWakeupSong({ suspense: true }).data?.data;
  const { handleDeleteMyWakeupSong } = useDeleteMyMusic();
  return (
    <MyMusicDetailStyle.MyMusicListWrap>
      {myData?.length !== 0 ? (
        myData?.map((item, idx) => {
          const createdDate = item.createdAt.split(" ")[0];
          return (
            <MyMusicDetailStyle.MusicInfoContainer>
              <MyMusicDetailStyle.ApplyRanking>
                {idx + 1}
              </MyMusicDetailStyle.ApplyRanking>
              <MyMusicDetailStyle.MusicThumbnailImg
                onClick={() => window.open(item.videoUrl)}
                src={item.thumbnailUrl}
              ></MyMusicDetailStyle.MusicThumbnailImg>
              <MyMusicDetailStyle.VideoTitle>
                {item.videoTitle}
              </MyMusicDetailStyle.VideoTitle>
              <MyMusicDetailStyle.ChannelNameData>
                {item.channelTitle}
              </MyMusicDetailStyle.ChannelNameData>
              <MyMusicDetailStyle.ApplyDate>
                {createdDate}
              </MyMusicDetailStyle.ApplyDate>
              <BsTrash
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteMyWakeupSong(item.id)}
              />
            </MyMusicDetailStyle.MusicInfoContainer>
          );
        })
      ) : (
        <MyMusicDetailStyle.MusicNull>
          신청한 기상송이 없쓰껄
        </MyMusicDetailStyle.MusicNull>
      )}
    </MyMusicDetailStyle.MyMusicListWrap>
  );
}
