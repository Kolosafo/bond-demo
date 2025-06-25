import { View, StyleProp, ViewStyle, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import { ThemedView } from "./ThemedView";

type Props = {
  children: React.ReactNode;
  _className?: string;
  style?: StyleProp<ViewStyle>;
};
const NoScrollScaffold = ({ children, _className, style }: Props) => {
  return (
    <View className="flex-1 bg-transparent" style={style}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={0}
      >
        <ThemedView
          className={`w-full items-center flex-1 flex space-y-7 px-5 py-5 ${_className}`}
        >
          {children}
        </ThemedView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default NoScrollScaffold;
