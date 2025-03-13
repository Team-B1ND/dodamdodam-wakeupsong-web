import { PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { useThemes } from "hooks/Theme/useTheme";
import useLogout from "hooks/Auth/useLogout";
import { Outlet } from "react-router-dom";

const PageTemplate = () => {
  const { themeColor, handleTheme } = useThemes();
  const { handleClickLogout } = useLogout();

  return (
    <PageTemplateContainer>
      <DodamNavBar
        location="wakesong"
        currentTheme={themeColor}
        handleTheme={handleTheme}
        logout={handleClickLogout}
      />
      <Outlet />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
