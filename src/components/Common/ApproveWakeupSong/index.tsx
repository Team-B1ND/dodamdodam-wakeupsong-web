import * as S from "./style";
import Video from "components/Common/Video/index";
import { useGetTomorrowMusicDataQuery } from "queries/WakeupSong/wakeupSong.query";

const ApproveWakeupSong = () => {
  const { data: TomorrowData } = useGetTomorrowMusicDataQuery();

  return (
    <S.Container>
      <S.Title>기상송</S.Title>
      <S.ContentWrap>
        <S.ContentTitle>내일의 기상송</S.ContentTitle>
        <S.VideoWrap>
          {TomorrowData?.data.map((video) => (
            <Video
              key={video.id}
              title={video.videoTitle}
              label={video.channelTitle}
              img={video.thumbnail}
              url={video.videoUrl}
            />
          ))}
        </S.VideoWrap>
      </S.ContentWrap>
    </S.Container>
  );
};

export default ApproveWakeupSong;
