import * as NavStyle from "./Nav.style";
import DODAMLOGO from "assets/logo_img/Mask group.svg";
import ApplyMusic from "./ApplyMusic";
import MelonChart from "./MelonChart";
import ErrorBoundary from "components/Common/Errorboundary/Errordata";
import { Suspense } from "react";

const Nav = () => {
  return (
    <NavStyle.NavBarContainer>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavStyle.DodamLogo
            src={DODAMLOGO}
            alt="dodam_logo"
            onClick={() => (window.location.href = "http://dodam.b1nd.com")}
          />
          <ApplyMusic />
          <MelonChart />
        </Suspense>
      </ErrorBoundary>
    </NavStyle.NavBarContainer>
  );
};

export default Nav;
