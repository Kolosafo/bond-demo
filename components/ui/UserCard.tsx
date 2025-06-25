import { View, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ThemedText } from "./ThemedText";
import MutualInterestDots from "./MutualInterestDots";
import { AppColors } from "@/constants/enum";

export type UserType = {
  name: string;
  emoji: string;
  mutualInterestsCount: number;
  profileImg: string | any;
  accountType: "premium" | "free";
  _className?: string;
};
const UserCard = ({
  name,
  emoji,
  mutualInterestsCount,
  profileImg,
  accountType,
  _className,
}: UserType) => {
  return (
    <View
      style={{
        backgroundColor:
          accountType === "premium" ? AppColors.BondYellow : AppColors.BondGray,
        height: hp(12),
        width: "100%",
      }}
      className={`rounded-full flex-row p-2 ${_className}`}
    >
      <View className="w-[25%] h-full rounded-full border border-black mr-1.5 overflow-hidden">
        <Image resizeMode="cover" source={{ uri: profileImg }} className="w-full h-full" />
      </View>
      <View className="justify-around ">
        <View className="pb-4 border-b w-[112%] border-black">
          <ThemedText className="font-bold">
            {name} {emoji}
          </ThemedText>
        </View>
        <MutualInterestDots interestsCount={mutualInterestsCount} />
      </View>
    </View>
  );
};

export default UserCard;
