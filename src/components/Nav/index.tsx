import * as S from "./style";
import DODAMLOGO from "assets/logo_img/Mask group.svg";
import ApplyMusic from "./ApplyMusic";
import MelonChart from "./MelonChart";
import ErrorBoundary from "../Common/Errorboundary";
import { Suspense } from "react";

const Nav = () => {
  return (
    <S.NavBarContainer>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <S.DodamLogo
            src={DODAMLOGO}
            alt="dodam_logo"
            onClick={() => (window.location.href = "http://dodam.b1nd.com")}
          />
          <ApplyMusic />
          <MelonChart />
        </Suspense>
      </ErrorBoundary>
    </S.NavBarContainer>
  );
};

export default Nav;
