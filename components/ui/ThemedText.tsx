import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { heightPercentageToDP } from "react-native-responsive-screen";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  fontFamily?: "Futura" | "Avenir";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  fontFamily = "Futura",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color: color.custom, fontSize: heightPercentageToDP(1.6) },
        { fontFamily },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    // fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  defaultSemiBold: {
    // fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    // fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    // fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    // fontSize: 16,
    color: "#0a7ea4",
  },
});
