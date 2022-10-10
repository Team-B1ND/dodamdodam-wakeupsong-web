import * as S from "./Header.style";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { allowMusicInfo } from "store/reducer";
import { useRecoilValue } from 'recoil';
import useWakeupSongAllow from "hooks/wakeupSongAllow/useWakeupSongAllow";

const Header = () => {

  const { pathname } = useLocation();
  const musicInfo = useRecoilValue(allowMusicInfo);
  const { setWakeupSongAllow } = useWakeupSongAllow();

  return (
    <S.HeaderContainer>
      <S.LinkWrap linkName={"/"} pathName={pathname}>
        <Link className="Link" to={`/`}>기상송 홈</Link>
      </S.LinkWrap>

      <S.LinkWrap linkName={"/mymusicstore"} pathName={pathname}>
        <Link className="Link" to={`/mymusicstore`}>마이뮤직</Link>
      </S.LinkWrap>

      <S.LinkWrap linkName={"/storage"} pathName={pathname}>
        <Link className="Link" to={`/storage`}>보관함</Link>
      </S.LinkWrap>

      <div style={{ marginTop: "50px" }} onClick={() => { musicInfo && setWakeupSongAllow(musicInfo) }}>승인</div>

    </S.HeaderContainer>
  );
};

export default Header;