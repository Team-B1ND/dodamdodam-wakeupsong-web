import Title from "components/common/Title";
import * as S from "./style";
import ErrorBoundary from "../common/Errorboundary";
import Loading from "components/common/Loading";
import PendingMusicStore from "./PendingMusicStore";
import { Suspense } from "react";

const PendingMusic = () => {
  return (
    <S.PendingMusicDetailWrapContainer>
      <Title
        titleMent={"신청 현황"}
        subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
      />

      <ErrorBoundary fallback={<div>error...</div>}>
        <Suspense fallback={<Loading />}>
          <PendingMusicStore />
        </Suspense>
      </ErrorBoundary>
    </S.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusic;
