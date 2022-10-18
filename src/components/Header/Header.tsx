import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Header = () => {

  const { pathname } = useLocation();

  return (
    <S.HeaderContainer>
      <S.LinkWrap linkName={"/wakesong"} pathName={pathname}>
        <Link className="Link" to={`/wakesong`}>기상송 홈</Link>
      </S.LinkWrap>

      <S.LinkWrap linkName={"/mymusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/mymusicdetail`}>마이뮤직</Link>
      </S.LinkWrap>

      <S.LinkWrap linkName={"/todaymusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/todaymusicdetail`}>오늘의 기상송</Link>
      </S.LinkWrap>

      <S.LinkWrap linkName={"/pendingmusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/pendingmusicdetail`}>신청 현황</Link>
      </S.LinkWrap>

      {/* <S.LinkWrap linkName={"/dibsstorage"} pathName={pathname}>
        <Link className="Link" to={`/dibsstorage`}>보관함</Link>
      </S.LinkWrap> */}

    </S.HeaderContainer >
  );
};

export default Header;