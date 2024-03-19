import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nowDate = new Date().getHours();

  return (
    <S.HeaderContainer>
      <S.LinkWrap
        onClick={() => navigate("/")}
        linkName={"/"}
        pathName={pathname}
      >
        <div className="Link">기상송 홈</div>
      </S.LinkWrap>

      <S.LinkWrap
        onClick={() => navigate("/mymusicdetail")}
        linkName={"/mymusicdetail"}
        pathName={pathname}
      >
        <div className="Link">마이뮤직</div>
      </S.LinkWrap>

      <S.LinkWrap
        onClick={() => navigate("/todaymusicdetail")}
        linkName={"/todaymusicdetail"}
        pathName={pathname}
      >
        {nowDate >= 16 ? (
          <div className="Link">내일의 기상송</div>
        ) : (
          <div className="Link">오늘의 기상송</div>
        )}
      </S.LinkWrap>

      <S.LinkWrap
        onClick={() => navigate("/pendingmusicdetail")}
        linkName={"/pendingmusicdetail"}
        pathName={pathname}
      >
        <div className="Link">신청 현황</div>
      </S.LinkWrap>
    </S.HeaderContainer>
  );
};

export default Header;
