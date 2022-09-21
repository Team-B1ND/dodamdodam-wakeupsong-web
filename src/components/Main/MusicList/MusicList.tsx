import * as S from "./MusicList.style";
import Title from "components/Common/Title";
import useWakeupSongPendingMusicListData from "hooks/wakeupSongPending/wakeupSongPending";

const MusicList = () => {

  const { pendingMusicListData } = useWakeupSongPendingMusicListData();

  return (
    <S.MusicListContainer>
      <Title titleMent={"신청 현황"} subTitleMent={"어떤 노래가 있는지 확인해보세요!"} />

      <S.MusicListWrapper >
        {pendingMusicListData && pendingMusicListData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];

          return (
            <S.MusicContainer key={idx} onClick={() => window.open(item.videoUrl)} >
              <S.MusicTumbnailImg src={item.thumbnailUrl} />
              <S.ApplyRanking>{idx + 1}</S.ApplyRanking>

              <S.TitleWrap>
                <S.videoTitle>{item.videoTitle}</S.videoTitle>
                <S.CreatedDateContainer>
                  <div style={{ color: "#c5c5c5" }}>신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </S.CreatedDateContainer>
              </S.TitleWrap>
            </S.MusicContainer>
          )
        })}
      </S.MusicListWrapper>
    </S.MusicListContainer>
  );
};

export default MusicList;
