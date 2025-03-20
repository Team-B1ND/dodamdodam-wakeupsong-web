import { useGetTodayMusicDataQuery } from "queries/WakeupSong/wakeupSong.query";
import * as S from "./style";
import Video from "components/Common/Video/index";

const TodayWakeupSong = () => {
  const { data: TodayData } = useGetTodayMusicDataQuery({ suspense: true });

  return (
    <S.Container>
      <S.ContentTitle>오늘의 기상송</S.ContentTitle>
      <S.VideoWrap>
        {TodayData?.data.length === 0 ? (
          <S.NullVideo>승인된 기상송이 없습니다</S.NullVideo>
        ) : (
          TodayData?.data
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

export default TodayWakeupSong;
