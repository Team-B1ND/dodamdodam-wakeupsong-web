import { useGetTomorrowMusicDataQuery } from "queries/WakeupSong/wakeupSong.query";
import * as S from "./style";
import Video from "components/Common/Video/index";
import VideoEmpty from "components/Common/Empty/VideoEmpty";

const TomorrowWakeupSong = () => {
  const { data: TomorrowData } = useGetTomorrowMusicDataQuery({
    suspense: true,
  });

  return (
    <S.Container>
      <S.ContentTitle>내일의 기상송</S.ContentTitle>
      <S.VideoWrap>
        {TomorrowData?.data.length === 0 ? (
          <VideoEmpty type="All" />
        ) : (
          TomorrowData?.data
            .slice(0, 3)
            .map((video) => (
              <Video
                key={video.id}
                type="All"
                title={video.videoTitle}
                label={video.channelTitle}
                img={video.thumbnail}
                url={video.videoUrl}
              />
            ))
        )}
      </S.VideoWrap>
    </S.Container>
  );
};

export default TomorrowWakeupSong;
