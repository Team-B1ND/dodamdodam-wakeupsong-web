import { ReactNode } from "react";
import { useThemes } from "hooks/Theme/useTheme";
import { DodamGlobalStyles } from "@b1nd/dds-web";
import { April_Fools_Day_Dark_Theme, April_Fools_Day_Light_Theme } from "style/theme";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useThemes();

  return (
    // <DodamThemeProvider theme={themeColor}>
    <ThemeProvider
      theme={
        themeColor === "LIGHT"
          ? April_Fools_Day_Light_Theme
          : April_Fools_Day_Dark_Theme
      }>
      <DodamGlobalStyles />
      {children}
    </ThemeProvider>
    // </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
