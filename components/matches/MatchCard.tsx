import { View, Text, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ThemedText } from "../ui/ThemedText";

const MatchCard = () => {
  return (
    <View
      className="shadow w-full shadow-black border border-black items-center py-5"
      style={{ height: hp(75), backgroundColor: "#FFE974", borderRadius: 40 }}
    >
      <View className="relative w-full items-center">
        <View
          style={{ height: hp(18), width: hp(18) }}
          className="border border-black rounded-full z-20 bg-red-500"
        ></View>
        <View
          style={{ height: hp(10), width: hp(10) }}
          className="border border-black rounded-full absolute left-10 top-10 items-center justify-center bg-[#FFFFFF]"
        >
          <ThemedText
            className="font-extralight mr-4"
            style={{
              fontSize: 40,
              lineHeight: 45,
              fontFamily: "inter",
              fontWeight: 400,
            }}
          >
            2
          </ThemedText>
        </View>
        <View
          style={{ height: hp(10), width: hp(10) }}
          className="border border-black rounded-full absolute right-10 top-10 items-center justify-center bg-[#FFFFFF]"
        >
          <ThemedText
            className=" ml-4"
            style={{
              fontSize: 40,
              lineHeight: 45,
              fontFamily: "inter",
              fontWeight: 400,
            }}
          >
            3
          </ThemedText>
        </View>
      </View>
      <View className="mt-2 items-center">
        <Text style={{ fontSize: hp(3) }}>😎</Text>
        <Text style={{ fontSize: hp(2.2) }} className="font-bold mt-2">
          Malina Pérez 23
        </Text>
        <View className="flex-row items-center space-x-2 -mt-1">
          <Image
            source={require("../../assets/images/LocationIcon.png")}
            resizeMode="contain"
            className="self-end mt-2"
            style={{ width: hp(2.2) }}
          />
          <ThemedText className="text-xs">Los Angeles, CA</ThemedText>
        </View>
        <View className="flex-row items-center justify-between w-full px-4 -mt-3">
          <Image
            source={require("../../assets/images/leftArrow.png")}
            resizeMode="contain"
            className=""
            style={{ width: wp(15) }}
          />
          <ThemedText style={{ fontSize: hp(1.9) }} className="font-bold">
            8 Mutual Interests
          </ThemedText>
          <Image
            source={require("../../assets/images/rightArrow.png")}
            resizeMode="contain"
            className=""
            style={{ width: wp(15) }}
          />
        </View>
      </View>
    </View>
  );
};

export default MatchCard;
