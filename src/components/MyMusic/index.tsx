import Title from "components/common/Title";
import * as S from "./style";
import ErrorBoundary from "components/common/Errorboundary";
import { Suspense } from "react";
import MyMusicList from "./MyMusicList";
import Loading from "components/common/Loading";

const MyMusic = () => {
  return (
    <S.MyMusicDetailWrapContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />
      <ErrorBoundary fallback={<div>error ...</div>}>
        <Suspense fallback={<Loading />}>
          <MyMusicList />
        </Suspense>
      </ErrorBoundary>
    </S.MyMusicDetailWrapContainer>
  );
};

export default MyMusic;
