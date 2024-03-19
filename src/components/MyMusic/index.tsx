import Title from "components/common/Title";
import * as S from "./style";
import ErrorBoundary from "components/common/Errorboundary";
import { Suspense } from "react";
import MyMusicStore from "./MyMusicStore";
import Loading from "components/common/Loading";

const MyMusic = () => {
  return (
    <S.MyMusicContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />
      <ErrorBoundary fallback={<div>error ...</div>}>
        <Suspense fallback={<Loading />}>
          <MyMusicStore />
        </Suspense>
      </ErrorBoundary>
    </S.MyMusicContainer>
  );
};

export default MyMusic;
