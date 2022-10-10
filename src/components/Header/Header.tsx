import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { allowMusicInfo } from "store/reducer";
import { useRecoilValue, useResetRecoilState } from 'recoil';
import useWakeupSongAllow from "hooks/wakeupSongAllow/useWakeupSongAllow";
import { toast } from "react-toastify";

const Header = () => {

  const { pathname } = useLocation();
  const musicInfo = useRecoilValue(allowMusicInfo);
  const { setWakeupSongAllow } = useWakeupSongAllow();

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

      {/* <S.LinkWrap linkName={"/dibsstorage"} pathName={pathname}>
        <Link className="Link" to={`/dibsstorage`}>보관함</Link>
      </S.LinkWrap> */}

      <div style={{ marginTop: "50px" }} onClick={() => {
        musicInfo.id !== 0 ?
          setWakeupSongAllow(musicInfo)
          : toast.error("기상송 신청실패");
      }}>승인</div>

    </S.HeaderContainer >
  );
};

export default Header;