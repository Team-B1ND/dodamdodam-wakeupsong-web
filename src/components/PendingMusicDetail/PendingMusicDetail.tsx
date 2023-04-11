import Title from "components/Common/Title";
import * as Style from "./PendingMusicDetail.style";
import ErrorBoundary from "../Common/Errorboundary/Errordata";
import { Suspense } from "react";
import PendingMusicList from "./PendingMusicList";

const PendingMusicDetail = () => {
  return (
    <Style.PendingMusicDetailWrapContainer>
      <Title
        titleMent={"신청 현황"}
        subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
      />
      <ErrorBoundary fallback={<div>error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <PendingMusicList />
        </Suspense>
      </ErrorBoundary>
    </Style.PendingMusicDetailWrapContainer>
  );
};

export default PendingMusicDetail;
