import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HEADER_ITEMS } from "./constant";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      {HEADER_ITEMS.map((item, idx) => (
        <S.LinkWrap
          key={idx}
          onClick={() => navigate(item.link)}
          linkName={item.link}
          pathName={pathname}
        >
          <p>{item.title}</p>
        </S.LinkWrap>
      ))}
    </S.Container>
  );
};

export default Header;
