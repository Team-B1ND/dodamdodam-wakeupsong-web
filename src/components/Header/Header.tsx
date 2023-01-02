import * as HeaderStyle from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Header = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nowDate = new Date().getHours();

  return (
    <HeaderStyle.HeaderContainer>
      <HeaderStyle.LinkWrap onClick={() => navigate("/")} linkName={"/"} pathName={pathname}>
        <div className="Link">기상송 홈</div>
      </HeaderStyle.LinkWrap>

      <HeaderStyle.LinkWrap onClick={() => navigate("/mymusicdetail")} linkName={"/mymusicdetail"} pathName={pathname}>
        <div className="Link">마이뮤직</div>
      </HeaderStyle.LinkWrap>

      <HeaderStyle.LinkWrap onClick={() => navigate("/todaymusicdetail")} linkName={"/todaymusicdetail"} pathName={pathname}>
        {
          nowDate >= 16 ?
            <div className="Link" >내일의 기상송</div> :
            <div className="Link">오늘의 기상송</div>
        }
      </HeaderStyle.LinkWrap>

      <HeaderStyle.LinkWrap onClick={() => navigate("/pendingmusicdetail")} linkName={"/pendingmusicdetail"} pathName={pathname}>
        <div className="Link" >신청 현황</div>
      </HeaderStyle.LinkWrap>

    </HeaderStyle.HeaderContainer >
  );
};

export default Header;