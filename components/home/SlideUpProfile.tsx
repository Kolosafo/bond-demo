import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { Dimensions } from "react-native";
import Profile from "@/app/Profile";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const SlideUpProfile = ({ onClose }: { onClose: () => void }) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  useEffect(() => {
    // Animate in on mount
    translateY.value = withSpring(0, { damping: 20 });
  }, []);

  const handleDismiss = () => {
    // Slide back down
    translateY.value = withSpring(
      SCREEN_HEIGHT,
      { damping: 20 },
      (finished) => {
        if (finished) {
          runOnJS(onClose)(); // Notify parent to unmount AFTER animation
        }
      }
    );
  };
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 99,
        },
        animatedStyle,
      ]}
    >
      <Profile onPress={handleDismiss} />
    </Animated.View>
  );
};

export default SlideUpProfile;
