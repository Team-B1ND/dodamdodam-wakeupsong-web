import Title from "components/Common/Title";
import * as Style from "./style";
import ErrorBoundary from "components/Common/Errorboundary";
import { Suspense } from "react";
import Loading from "components/Common/Loading";
import TodayMusicDetailStore from "./TodayMusicDetailStore";

const TodayMusicDetail = () => {
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
        <Suspense fallback={<Loading />}>
          <TodayMusicDetailStore />
        </Suspense>
      </ErrorBoundary>
    </Style.TodayMusicDetailWrapContainer>
  );
};

export default TodayMusicDetail;
