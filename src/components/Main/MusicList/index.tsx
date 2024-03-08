import * as S from "./style";
import Title from "components/Common/Title";
import { useRecoilState } from "recoil";
import { allowMusicInfoIdAtom } from "store/reducer";
import { Link } from "react-router-dom";
import useWakeupSongAllow from "hooks/wakeupSongAllow/useWakeupSongAllow";
import { toast } from "react-toastify";
import { useGetMyPermission } from "queries/permission/permission.query";
import { useGetPendingMusicList } from "queries/pendingMusic/pendingMusic.query";

const MusicList = () => {
  const [musicInfoId, setMusicInfoId] = useRecoilState(allowMusicInfoIdAtom);
  // const PlayedDate = new Date().toISOString().split("T")[0];
  const { setWakeupSongAllow, setWakeupSongRefuse, isPermission } =
    useWakeupSongAllow();
  // const Permission = useGetMyPermission();
  const PendingMusicListData = useGetPendingMusicList().data?.data.slice(0, 16);

  return (
    <S.MusicListContainer>
      <S.TitleContainer>
        <Title
          titleMent={"신청 현황"}
          subTitleMent={"어떤 노래가 있는지 확인해보세요!"}
        />
        <Link className="seeMoreDetails" to={"/pendingmusicdetail"}>
          더보기
        </Link>
      </S.TitleContainer>

      <S.MusicListWrapper>
        {PendingMusicListData?.length !== 0 &&
          PendingMusicListData?.map((item, idx) => {
            const createdDate = item.createdAt.split(" ")[0];

            return (
              <S.MusicContainer key={idx} onClick={() => setMusicInfoId(0)}>
                <S.MusicTumbnailImg
                  src={item.thumbnailUrl}
                  onClick={() => window.open(item.videoUrl)}
                />

                <S.TitleWrap>
                  <S.TitleTopContainer>
                    <S.ApplyRanking>{idx + 1}</S.ApplyRanking>
                  </S.TitleTopContainer>

                  <S.VideoTitle>{item.videoTitle}</S.VideoTitle>
                  <S.CreatedDateContainer>
                    <div className="applyDay">신청일</div>
                    <div className="applyDate">{createdDate}</div>
                  </S.CreatedDateContainer>
                </S.TitleWrap>
              </S.MusicContainer>
            );
          })}
      </S.MusicListWrapper>
      {/* {Permission.data?.data.find(isPermission) && ( */}
      <S.ApplyBtnContainer>
        <S.AllowBtn
          onClick={() => {
            musicInfoId !== 0
              ? setWakeupSongAllow(musicInfoId)
              : toast.error("기상송 승인 실패");
          }}
        >
          승인
        </S.AllowBtn>
        <S.RefuseBtn
          onClick={() => {
            console.log(musicInfoId);
            musicInfoId !== 0
              ? setWakeupSongRefuse(musicInfoId)
              : toast.error("기상송 거절 실패");
          }}
        >
          거절
        </S.RefuseBtn>
      </S.ApplyBtnContainer>
      {/* )} */}
    </S.MusicListContainer>
  );
};

export default MusicList;
