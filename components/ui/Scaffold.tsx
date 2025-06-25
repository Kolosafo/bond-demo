import { View, StyleProp, ViewStyle, RefreshControlProps } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ThemedView } from "./ThemedView";

type Props = {
  children: React.ReactNode;
  _className?: string;
  style?: StyleProp<ViewStyle>;
  refreshControlComp?: React.ReactElement<
    RefreshControlProps,
    string | React.JSXElementConstructor<any>
  >;
  nestedScrollEnabled?: boolean;
  scrollEnabled?: boolean;
};
const Scaffold = ({
  children,
  _className,
  style,
  refreshControlComp,
  nestedScrollEnabled,
  scrollEnabled
}: Props) => {
  return (
    <View className="flex-1 bg-transparent" style={style}>
      <KeyboardAwareScrollView
        refreshControl={refreshControlComp}
        className=""
        nestedScrollEnabled={nestedScrollEnabled}
        scrollEnabled={scrollEnabled}
      >
        <ThemedView
          className={`w-full items-center flex-1 flex space-y-7 px-5 py-5 ${_className}`}
        >
          {children}
        </ThemedView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Scaffold;
