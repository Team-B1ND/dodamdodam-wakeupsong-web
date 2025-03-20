import * as S from "./style";
import Video from "components/Common/Video";
import { useGetMyAllWakeupSongQuery } from "queries/WakeupSong/wakeupSong.query";
import VideoEmpty from "components/Common/Empty/VideoEmpty";

const MyWakeupSong = () => {
  const { data: MyData } = useGetMyAllWakeupSongQuery({ suspense: true });

  return (
    <S.Container>
      <S.Title>내가 신청한 기상송</S.Title>
      <S.VideoWrap>
        {MyData?.data.length === 0 ? (
          <VideoEmpty type="My" />
        ) : (
          MyData?.data.map((video) => {
            const createVideo = video.createdAt.replaceAll("-", ".");
            return (
              <Video
                key={video.id}
                id={video.id}
                type="My"
                title={video.videoTitle}
                label={video.channelTitle}
                date={createVideo}
                img={video.thumbnail}
                url={video.videoUrl}
                isDelete={true}
              />
            );
          })
        )}
      </S.VideoWrap>
    </S.Container>
  );
};

export default MyWakeupSong;
