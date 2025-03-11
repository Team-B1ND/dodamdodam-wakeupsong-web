import * as S from "./style";
import ApproveWakeupSong from "components/Common/ApproveWakeupSong";
import WakeupSongList from "components/Common/WakeupSongList";
import useMelonChart from "hooks/MelonChart/useMelonChart";
import useDecisionWakeupSong from "hooks/DecisionWakeupSong/useDecisionWakeupSong";

const Main = () => {
  const { ...melonChart } = useMelonChart();
  const { ...decisionWakeupSong } = useDecisionWakeupSong();

  return (
    <S.Container>
      <ApproveWakeupSong />
      <S.Wrap>
        <WakeupSongList
          title="멜론 차트"
          description="인기가 많은 노래들을 모아봤어요!"
          wakeupSongList={melonChart.melonChart}
          melonChartInfo={melonChart.melonChartInfo}
          isHideToolTip={melonChart.isHideToolTip}
          handleClickMelonChart={melonChart.handleClickMelonChart}
          handleClickMelonChartApply={melonChart.handleClickMelonChartApply}
        />
        <WakeupSongList
          title="신청 현황"
          description="어떤 노래가 있는지 확인해보세요!"
          musicInfoId={decisionWakeupSong.musicInfoId}
          wakeupSongList={decisionWakeupSong.pendingWakeupSong}
          isBroadcastClubMember={decisionWakeupSong.isBroadcastClubMember}
          handleClickWakeupSong={decisionWakeupSong.handleClickWakeupSong}
          hanldeWakeupSongAllow={decisionWakeupSong.hanldeWakeupSongAllow}
          hanldeWakeupSongDeny={decisionWakeupSong.hanldeWakeupSongDeny}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
