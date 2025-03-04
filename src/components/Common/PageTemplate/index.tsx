import { ReactNode } from "react";
import { PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { useThemes } from "hooks/Theme/useTheme";

interface Props {
  children: ReactNode;
}

const PageTemplagte = ({ children }: Props) => {
  const { themeColor, handleTheme } = useThemes();

  return (
    <PageTemplateContainer>
      <DodamNavBar
        location="wakesong"
        currentTheme={themeColor}
        handleTheme={handleTheme}
        logout={() => console.log("로그아웃")}
      />
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
