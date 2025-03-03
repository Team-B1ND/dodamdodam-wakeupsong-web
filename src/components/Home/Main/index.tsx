import * as S from "./style";
import ApproveWakeupSong from "components/Common/ApproveWakeupSong";
import WakeupSongList from "components/Common/WakeupSongList";

const Main = () => {
  return (
    <S.Container>
      <ApproveWakeupSong />
      <S.Wrap>
        <WakeupSongList
          title="멜론 차트"
          description="인기가 많은 노래들을 모아봤어요!"
        />
        <WakeupSongList
          title="신청 현황"
          description="어떤 노래가 있는지 확인해보세요!"
        />
      </S.Wrap>
    </S.Container>
  );
};

export default Main;
