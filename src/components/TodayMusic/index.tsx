import Title from "components/common/Title";
import * as S from "./style";
import ErrorBoundary from "components/common/Errorboundary";
import { Suspense } from "react";
import Loading from "components/common/Loading";
import TodayMusicStore from "./TodayMusicStore";

const TodayMusic = () => {
  const nowDate = new Date().getHours();

  return (
    <S.TodayMusicContainer>
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
          <TodayMusicStore />
        </Suspense>
      </ErrorBoundary>
    </S.TodayMusicContainer>
  );
};

export default TodayMusic;
