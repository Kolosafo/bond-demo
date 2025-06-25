import { TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "../ui/ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import LoadingActivity from "./LoadingActivity";
import { heightPercentageToDP } from "react-native-responsive-screen";
type Props = {
  title: string;
  onPress: () => void;
  _className?: string;
  _mainContClassName?: string;
  isLoading?: boolean;
  disabled?: boolean;
};
const BondButton = ({
  title,
  _className,
  isLoading,
  disabled,
  onPress,
  _mainContClassName,
}: Props) => {
  return (
    <TouchableOpacity
      className={`rounded-lg ${_mainContClassName}`}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      <LinearGradient
        colors={["#5D5858", "#000000"]}
        className={`rounded-full w-full items-center justify-center ${_className} `}
        style={{ height: heightPercentageToDP(4) }}
      >
        {isLoading ? (
          <LoadingActivity size={25} />
        ) : (
          <ThemedText className={"text-white text-center"}>{title}</ThemedText>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BondButton;
