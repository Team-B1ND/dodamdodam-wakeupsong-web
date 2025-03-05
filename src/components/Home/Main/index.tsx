import * as S from "./style";
import ApproveWakeupSong from "components/Common/ApproveWakeupSong";
import WakeupSongList from "components/Common/WakeupSongList";
import useMelonChart from "hooks/MelonChart/useMelonChart";

const Main = () => {
  const { ...melonChart } = useMelonChart();

  return (
    <S.Container>
      <ApproveWakeupSong />
      <S.Wrap>
        <WakeupSongList
          title="멜론 차트"
          description="인기가 많은 노래들을 모아봤어요!"
          wakeupSongList={melonChart.melonChart}
          melonChartInfo={melonChart.melonChartInfo}
          handleClickWakeupSong={melonChart.handleClickWakeupSong}
          handleClickMelonChartApply={melonChart.handleClickMelonChartApply}
        />
        <WakeupSongList
          title="신청 현황"
          description="어떤 노래가 있는지 확인해보세요!"
          wakeupSongList={melonChart.melonChart}
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
