import * as Style from "./Nav.style";
import DODAMLOGO from "assets/logo_img/Mask group.svg";
import ApplyMusic from "./ApplyMusic";
import MelonChart from "./MelonChart";

const Nav = () => {
  return (
    <Style.NavBarContainer>
      <Style.DodamLogo src={DODAMLOGO} alt="dodam_logo" />
      <ApplyMusic />
      <MelonChart />
    </Style.NavBarContainer>
  );
};

export default Nav;