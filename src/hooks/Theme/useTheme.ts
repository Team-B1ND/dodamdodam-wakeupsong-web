import { useCallback, useMemo } from "react";
import { THEME_KEY } from "constants/Theme/theme.constants";
import { ETheme } from "enum/theme.enum";
import { useRecoilState } from "recoil";
import { themeModeAtom } from "store/Theme/theme.store";

export const useThemes = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeModeAtom);

  const themeColor = useMemo((): ETheme => {
    return currentTheme === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
  }, [currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme =
      currentTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    window.localStorage.setItem(THEME_KEY, switchTheme);
    setCurrentTheme(switchTheme);
  }, [currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};
