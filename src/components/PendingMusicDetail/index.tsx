import Title from "components/Common/Title";
import * as S from "./style";
import ErrorBoundary from "../Common/Errorboundary";
import Loading from "components/Common/Loading";
import PendingMusicDetailStore from "./PendingMusicDetailStore";
import { Suspense } from "react";

const PendingMusicDetail = () => {
  return (
    <S.PendingMusicDetailWrapContainer>
      <Title
        titleMent={"신청 현황"}
        subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
      />

      <ErrorBoundary fallback={<div>error...</div>}>
        <Suspense fallback={<Loading />}>
          <PendingMusicDetailStore />
        </Suspense>
      </ErrorBoundary>
    </S.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusicDetail;
