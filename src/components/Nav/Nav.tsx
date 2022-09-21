import * as S from "./Nav.style";
import DODAMLOGO from "assets/logo_img/dodamdodam 6.svg";
import ApplyMusic from "./ApplyMusic";

const Nav = () => {
  return (
    <S.NavBarContainer>
      <S.DodamLogo src={DODAMLOGO} alt="dodam_logo" />
      <ApplyMusic />
    </S.NavBarContainer>
  );
};

export default Nav;