import * as NavStyle from "./Nav.style";
import DODAMLOGO from "assets/logo_img/Mask group.svg";
import ApplyMusic from "./ApplyMusic";
import MelonChart from "./MelonChart";

const Nav = () => {
  return (
    <NavStyle.NavBarContainer>
      <NavStyle.DodamLogo src={DODAMLOGO} alt="dodam_logo" onClick={() => window.location.href = "http://dodam.b1nd.com"} />
      <ApplyMusic />
      <MelonChart />
    </NavStyle.NavBarContainer>
  );
};

export default Nav;