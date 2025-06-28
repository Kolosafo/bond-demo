import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useTheme } from "@/hooks/useTheme";

const BottomProfileCard = ({ onPress }: { onPress: () => void }) => {
  const { textThemeColor } = useTheme();

  return (
    <View className="absolute bottom-0 bg-[#E0F5DD]/70">
      <View
        className={`h-[15vh] w-screen self-center border-2 border-[${textThemeColor}] rounded-t-[25px] px-6 border-b-0 items-center py-5`}
      >
        <TouchableOpacity className="relative items-center" onPress={onPress}>
          <View className="absolute -top-6 self-center">
            <Image
              className={``}
              style={{ width: hp(6), height: hp(6) }}
              resizeMode="contain"
              source={require("../../assets/images/chevronUp.png")}
            />
          </View>

          <View
            style={{ width: wp(16), height: wp(16) }}
            className="rounded-full overflow-hidden border-2"
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomProfileCard;
