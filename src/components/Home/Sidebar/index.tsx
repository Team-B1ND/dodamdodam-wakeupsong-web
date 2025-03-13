import * as S from "./style";
import ApplyWakeupSong from "components/Common/ApplyWakeupSong";
import { DodamDivider } from "@b1nd/dds-web";
import MyWakeupSong from "components/Common/MyWakeupSong";

const Sidebar = () => {
  return (
    <S.Container>
      <ApplyWakeupSong />
      <DodamDivider type="Small" />
      <MyWakeupSong />
    </S.Container>
  );
};

export default Sidebar;
