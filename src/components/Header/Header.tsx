import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const { pathname } = useLocation();

  return (
    <S.HeaderContainer>
      <S.LinkWrap linkName={"/"} pathName={pathname}>
        <Link className="Link" to={`/`}>홈</Link>
      </S.LinkWrap>
      <S.LinkWrap linkName={"/storage"} pathName={pathname}>
        <Link className="Link" to={`storage`}>보관함</Link>
      </S.LinkWrap>

    </S.HeaderContainer>
  );
};

export default Header;