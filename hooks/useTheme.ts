import { useThemeColor } from "./useThemeColor";

export function useTheme() {
  const themedStyle = useThemeColor(
    { light: undefined, dark: undefined },
    "background"
  );
  const themedIcon = useThemeColor(
    { light: undefined, dark: undefined },
    "icon"
  );
  const themedText = useThemeColor(
    { light: undefined, dark: undefined },
    "text"
  );

  return {
    currentTheme: themedStyle.themeColorStandard,
    backgroundThemeColor: themedStyle.custom,
    iconThemeColor: themedIcon.custom,
    textThemeColor: themedText.custom,
  };
}
