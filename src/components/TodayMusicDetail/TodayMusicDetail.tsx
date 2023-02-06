import Title from "components/Common/Title";
import * as Style from "./TodayMusicDetail.style";
import { useGetTodayMusicData } from "queries/todayMusic/todayMusic.query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import TodayMusicList from "./TodayMusicList";

const TodayMusicDetail = () => {
  const { data } = useGetTodayMusicData();
  const nowDate = new Date().getHours();

  return (
    <Style.TodayMusicDetailWrapContainer>
      {nowDate >= 16 ? (
        <Title
          titleMent={"내일의 기상송"}
          subTitleMent={"내일 나올 기상송은 어떤가요?"}
        />
      ) : (
        <Title
          titleMent={"오늘의 기상송"}
          subTitleMent={"오늘 나온 기상송은 어땠나요?"}
        />
      )}

      <ErrorBoundary fallback={<div>error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <TodayMusicList />
        </Suspense>
      </ErrorBoundary>
    </Style.TodayMusicDetailWrapContainer>
  );
};

export default TodayMusicDetail;
