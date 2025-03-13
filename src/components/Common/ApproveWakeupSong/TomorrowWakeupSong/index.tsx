import { useGetTomorrowMusicDataQuery } from "queries/WakeupSongs/wakeupSong.query";
import * as S from "./style";
import Video from "components/Common/Video/index";

const TomorrowWakeupSong = () => {
  const { data: TomorrowData } = useGetTomorrowMusicDataQuery();

  return (
    <S.Container>
      <S.ContentTitle>내일의 기상송</S.ContentTitle>
      <S.VideoWrap>
        {TomorrowData?.data.length === 0 ? (
          <S.NullVideo>승인된 기상송이 없습니다</S.NullVideo>
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
