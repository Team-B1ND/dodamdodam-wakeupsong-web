import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { allowMusicInfo } from "store/reducer";
import { useRecoilValue } from 'recoil';
import useWakeupSongAllow from "hooks/wakeupSongAllow/wakeupSongAllow";

const Header = () => {

  const { pathname } = useLocation();
  const musicInfo = useRecoilValue(allowMusicInfo);
  const { setWakeupSongAllow } = useWakeupSongAllow();

  return (
    <S.HeaderContainer>
      <S.LinkWrap linkName={"/"} pathName={pathname}>
        <Link className="Link" to={`/`}>홈</Link>
      </S.LinkWrap>
      <S.LinkWrap linkName={"/storage"} pathName={pathname}>
        <Link className="Link" to={`storage`}>보관함</Link>
      </S.LinkWrap>

      <div onClick={() => { musicInfo ? setWakeupSongAllow(musicInfo) : window.alert("승인할 노래를 선택해 주세요.") }}>승인</div>

    </S.HeaderContainer>
  );
};

export default Header;