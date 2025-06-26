/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  return {
    custom: colorFromProps ?? Colors[theme][colorName],
    default: Colors[theme][colorName],
    themeColorStandard: theme,
    statusBar: theme === "dark" ? "light" : ("dark" as "dark" | "light"),
  };
}
