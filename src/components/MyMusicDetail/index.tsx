import Title from "components/Common/Title";
import * as S from "./style";
import ErrorBoundary from "components/Common/Errorboundary";
import { Suspense } from "react";
import MyMusicDetailList from "./MyMusicDetailList";
import Loading from "components/Common/Loading";

const MyMusicStore = () => {
  return (
    <S.MyMusicDetailWrapContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />
      <ErrorBoundary fallback={<div>error ...</div>}>
        <Suspense fallback={<Loading />}>
          <MyMusicDetailList />
        </Suspense>
      </ErrorBoundary>
    </S.MyMusicDetailWrapContainer>
  );
};

export default MyMusicStore;
