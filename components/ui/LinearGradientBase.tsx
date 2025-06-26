import { StyleProp, ViewStyle } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type props = {
  colors: readonly [string, string, ...string[]];
  _className?: string;
  style?: StyleProp<ViewStyle>;
};
const LinearGradientBase = ({ colors, _className, style }: props) => {
  return (
    <LinearGradient
      colors={colors}
      className={_className}
      style={style}
    ></LinearGradient>
  );
};

export default LinearGradientBase;
