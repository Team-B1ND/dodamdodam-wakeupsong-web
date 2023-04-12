import Title from "components/Common/Title";
import * as MyMusicDetailStyle from "./MyMusicDetail.style";
import ErrorBoundary from "components/Common/Errorboundary/Errordata";
import { Suspense } from "react";
import MyMusicList from "./MyMusicList";
import Loading from "components/Common/Loading/Loading";

const MyMusicStore = () => {
  return (
    <MyMusicDetailStyle.MyMusicDetailWrapContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />
      <ErrorBoundary fallback={<div>error ...</div>}>
        <Suspense fallback={<Loading />}>
          <MyMusicList />
        </Suspense>
      </ErrorBoundary>
    </MyMusicDetailStyle.MyMusicDetailWrapContainer>
  );
};

export default MyMusicStore;
