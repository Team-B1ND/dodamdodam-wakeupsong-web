import * as Style from "./MusicList.style";
import Title from "components/Common/Title";
import useWakeupSongPendingMusicListData from "hooks/wakeupSongPending/wakeupSongPending";
import { useRecoilState } from "recoil";
import { allowMusicInfo } from "store/reducer";
import { Link } from "react-router-dom";
import useWakeupSongAllow from "hooks/wakeupSongAllow/useWakeupSongAllow";
import { toast } from "react-toastify";
import { useMemo } from "react"
import { useGetMyPermission } from "querys/permission/permission.query";

const MusicList = () => {

  const [musicInfo, setMusicInfo] = useRecoilState(allowMusicInfo);
  const { getWakeupSongPendingMusic, pendingMusicListData } = useWakeupSongPendingMusicListData();
  const PlayedDate = new Date().toISOString().split("T")[0];
  const { setWakeupSongAllow, setWakeupSongRefuse, isPermission } = useWakeupSongAllow();
  const { data } = useGetMyPermission();

  useMemo(() => {
    getWakeupSongPendingMusic();
  }, [])

  return (
    <Style.MusicListContainer>

      <Style.TitleContainer>
        <Title titleMent={"신청 현황"} subTitleMent={"어떤 노래가 있는지 확인해보세요!"} />
        <Link className="seeMoreDetails" to={"/pendingmusicdetail"}>더보기</Link>
      </Style.TitleContainer>


      <Style.MusicListWrapper >
        {pendingMusicListData && pendingMusicListData.map((item, idx) => {
          const createdDate = item.createdDate.split(" ")[0];

          return (
            <Style.MusicContainer key={idx} onClick={() => {
              setMusicInfo({ id: item.id, playedDate: PlayedDate });
            }}>
              <Style.MusicTumbnailImg src={item.thumbnailUrl} onClick={() => window.open(item.videoUrl)} />

              <Style.TitleWrap>
                <Style.TitleTopContainer>
                  <Style.ApplyRanking>{idx + 1}</Style.ApplyRanking>
                </Style.TitleTopContainer>

                <Style.VideoTitle>{item.videoTitle}</Style.VideoTitle>
                <Style.CreatedDateContainer>
                  <div className="applyDay">신청일</div>
                  <div style={{ color: "#a1a1a1" }}>{createdDate}</div>
                </Style.CreatedDateContainer>
              </Style.TitleWrap>
            </Style.MusicContainer>
          )
        })}
      </Style.MusicListWrapper>
      {data?.data.find(isPermission) &&
        <Style.ApplyBtnContainer>
          <Style.AllowBtn onClick={() => {
            musicInfo.id !== 0 ?
              setWakeupSongAllow(musicInfo)
              : toast.error("기상송 승인 실패");
          }}>승인</Style.AllowBtn>
          <Style.RefuseBtn onClick={() => {
            console.log(musicInfo);
            musicInfo.id !== 0 ?
              setWakeupSongRefuse(musicInfo)
              : toast.error("기상송 거절 실패");
          }}>거절</Style.RefuseBtn>
        </Style.ApplyBtnContainer>
      }
    </Style.MusicListContainer >
  );
};

export default MusicList;
