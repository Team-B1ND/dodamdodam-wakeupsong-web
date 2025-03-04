import { ReactNode } from "react";
import { PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { useThemes } from "hooks/Theme/useTheme";
import useLogout from "hooks/Auth/useLogout";

interface Props {
  children: ReactNode;
}

const PageTemplagte = ({ children }: Props) => {
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
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
