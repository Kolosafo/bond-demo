import { View, Text, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ThemedView } from "../ui/ThemedView";
import { ThemedText } from "../ui/ThemedText";

const Header = () => {
  return (
    <ThemedView
      style={{ height: hp(10) }}
      className="border-[0.5px] -mt-10 w-screen flex-row justify-between px-6 items-end pb-2"
    >
      <View className="flex-row items-center -mb-1">
        <ThemedText style={{ fontSize: hp(2.5) }}>b</ThemedText>
        <Image
          style={{ width: hp(2.5), height: hp(2.5) }}
          source={require("../../assets/images/icon.png")}
          resizeMode="contain"
          className="-mt-1"
        />
        <ThemedText style={{ fontSize: hp(2.5) }}>nd</ThemedText>
      </View>
      <View className="flex-row items-center space-x-3">
        <Image
          source={require("../../assets/images/settingsIcon.png")}
          style={{ width: wp(6), height: wp(6) }}
          className=""
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/headerChatIcon.png")}
          style={{ width: wp(6), height: wp(6) }}
          className=""
          resizeMode="contain"
        />
      </View>
    </ThemedView>
  );
};

export default Header;
