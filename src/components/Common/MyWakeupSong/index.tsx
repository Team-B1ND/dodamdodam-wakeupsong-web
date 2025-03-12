import * as S from "./style";
import Video from "components/Common/Video";
import { useGetMyAllWakeupSongQuery } from "queries/WakeupSong/wakeupSong.query";

const MyWakeupSong = () => {
  const { data: MyData } = useGetMyAllWakeupSongQuery();

  return (
    <S.Container>
      <S.Title>내가 신청한 기상송</S.Title>
      <S.VideoWrap>
        {MyData?.data.length === 0 ? (
          <S.NullVideo>신청한 기상송이 없습니다</S.NullVideo>
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
