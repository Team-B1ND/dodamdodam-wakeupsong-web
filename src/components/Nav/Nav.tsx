import * as S from "./Nav.style";
import DODAMLOGO from "assets/logo_img/Mask group.svg";
import ApplyMusic from "./ApplyMusic";
import MelonChart from "./MelonChart";

const Nav = () => {
  return (
    <S.NavBarContainer>
      <S.DodamLogo src={DODAMLOGO} alt="dodam_logo" />
      <ApplyMusic />
      <MelonChart />
    </S.NavBarContainer>
  );
};

export default Nav;