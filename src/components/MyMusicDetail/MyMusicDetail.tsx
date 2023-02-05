import Title from "components/Common/Title";
import * as MyMusicDetailStyle from "./MyMusicDetail.style";
import { BsTrash } from "react-icons/bs";
import useDeleteMyMusic from "hooks/deleteMyMusic/useDeleteMyWakeupSong";
import ErrorBoundary from "components/Common/Errorboundary/Errordata";
import { Suspense } from "react";
import MyMusicList from "./MyMusicList";
// import { MyMusiceList } from "./MyMusicList";
// import { ErrorBoundary } from "react-error-boundary";
// import { Errordata } from "../Common/Errorboundary/Errordata";

const MyMusicStore = () => {
  const { deleteMyWakeupSong } = useDeleteMyMusic();

  return (
    <MyMusicDetailStyle.MyMusicDetailWrapContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />
      <ErrorBoundary fallback={<div>error ...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <MyMusicList />
        </Suspense>
      </ErrorBoundary>
    </MyMusicDetailStyle.MyMusicDetailWrapContainer>
  );
};

export default MyMusicStore;
