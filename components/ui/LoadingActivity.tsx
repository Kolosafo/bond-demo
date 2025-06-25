import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  View,
  StyleSheet,
} from "react-native";

type SpinningImageProps = {
  size?: number;
};

const LoadingActivity = ({ size = 100 }: SpinningImageProps) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/icon.png")}
        style={{
          width: size,
          height: size,
          transform: [{ rotate }],
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingActivity;
