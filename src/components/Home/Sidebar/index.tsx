import * as S from "./style";
import { Suspense } from "react";
import ApplyWakeupSong from "components/Common/ApplyWakeupSong";
import { DodamDivider, DodamErrorBoundary } from "@b1nd/dds-web";
import MyWakeupSong from "components/Common/MyWakeupSong";
import MyWakeupSongFallback from "components/Common/Fallback/MyWakeupSongFallback";

const Sidebar = () => {
  return (
    <S.Container>
      <ApplyWakeupSong />
      <DodamDivider type="Small" />
      <DodamErrorBoundary text="에러 발생" showButton={true}>
        <Suspense fallback={<MyWakeupSongFallback type="My" length={3} />}>
          <MyWakeupSong />
        </Suspense>
      </DodamErrorBoundary>
    </S.Container>
  );
};

export default Sidebar;
