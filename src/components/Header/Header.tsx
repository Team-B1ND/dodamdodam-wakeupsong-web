import * as Style from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Header = () => {

  const { pathname } = useLocation();

  return (
    <Style.HeaderContainer>
      <Style.LinkWrap linkName={"/wakesong"} pathName={pathname}>
        <Link className="Link" to={`/wakesong`}>기상송 홈</Link>
      </Style.LinkWrap>

      <Style.LinkWrap linkName={"/mymusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/mymusicdetail`}>마이뮤직</Link>
      </Style.LinkWrap>

      <Style.LinkWrap linkName={"/todaymusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/todaymusicdetail`}>오늘의 기상송</Link>
      </Style.LinkWrap>

      <Style.LinkWrap linkName={"/pendingmusicdetail"} pathName={pathname}>
        <Link className="Link" to={`/pendingmusicdetail`}>신청 현황</Link>
      </Style.LinkWrap>

    </Style.HeaderContainer >
  );
};

export default Header;