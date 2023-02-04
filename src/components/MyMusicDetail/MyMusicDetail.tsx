import Title from "components/Common/Title";
import * as MyMusicDetailStyle from "./MyMusicDetail.style";
import { BsTrash } from "react-icons/bs";
import useDeleteMyMusic from "hooks/deleteMyMusic/useDeleteMyWakeupSong";
import { useGetMyAllWakeupSong } from "queries/myAllWakeupSong/myAllWakeupSong.query";
import ErrorBoundary from "components/Common/Errorboundary/Errordata";
import { Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import { Errordata } from "../Common/Errorboundary/Errordata";

const MyMusicStore = () => {
  const { deleteMyWakeupSong } = useDeleteMyMusic();
  const myData = useGetMyAllWakeupSong().data?.data;

  return (
    <MyMusicDetailStyle.MyMusicDetailWrapContainer>
      <Title
        titleMent={"마이뮤직"}
        subTitleMent={"내가 신청한 기상송을 한눈에 보세요!"}
      />

      <MyMusicDetailStyle.MyMusicListWrap>
        {myData?.length !== 0 ? (
          myData?.map((item, idx) => {
            const createdDate = item.createdDate.split(" ")[0];
            return (
              <ErrorBoundary fallback={<div>error ...</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                  <MyMusicDetailStyle.MusicInfoContainer>
                    <MyMusicDetailStyle.ApplyRanking>
                      {idx + 1}
                    </MyMusicDetailStyle.ApplyRanking>
                    <MyMusicDetailStyle.MusicThumbnailImg
                      onClick={() => window.open(item.videoUrl)}
                      src={item.thumbnailUrl}
                    ></MyMusicDetailStyle.MusicThumbnailImg>
                    <MyMusicDetailStyle.VideoTitle>
                      {item.videoTitle}
                    </MyMusicDetailStyle.VideoTitle>
                    <MyMusicDetailStyle.ChannelNameData>
                      {item.channelTitle}
                    </MyMusicDetailStyle.ChannelNameData>
                    <MyMusicDetailStyle.ApplyDate>
                      {createdDate}
                    </MyMusicDetailStyle.ApplyDate>
                    <BsTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteMyWakeupSong(item.id)}
                    />
                  </MyMusicDetailStyle.MusicInfoContainer>
                </Suspense>
              </ErrorBoundary>
            );
          })
        ) : (
          <ErrorBoundary fallback={<div>error ...</div>}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <MyMusicDetailStyle.MusicNull>
                신청한 기상송이 없쓰껄
              </MyMusicDetailStyle.MusicNull>
            </Suspense>
          </ErrorBoundary>
        )}
      </MyMusicDetailStyle.MyMusicListWrap>
    </MyMusicDetailStyle.MyMusicDetailWrapContainer>
  );
};

export default MyMusicStore;
