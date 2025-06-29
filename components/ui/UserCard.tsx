import { View, Image } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ThemedText } from "./ThemedText";
import MutualInterestDots from "./MutualInterestDots";
import { AppColors } from "@/constants/enum";

export type UserType = {
  name: string;
  emoji: string;
  mutualInterestsCount: number;
  profileImg: string | any;
  accountType: "premium" | "free" | "dark" | "light";
  _className?: string;
  whiteDots?: boolean;
};
const UserCard = ({
  name,
  emoji,
  mutualInterestsCount,
  profileImg,
  accountType,
  _className,
  whiteDots,
}: UserType) => {
  return (
    <View
      style={{
        backgroundColor:
          accountType === "premium"
            ? AppColors.BondYellow
            : accountType === "dark"
            ? "#000"
            : accountType === "light"
            ? "#1F1F1F"
            : AppColors.BondGray,
        height: hp(12),
        width: "100%",
      }}
      className={`rounded-full flex-row p-2 ${_className}`}
    >
      <View className="w-[25%] h-full rounded-full border border-black mr-1.5 overflow-hidden">
        <Image
          resizeMode="cover"
          source={{ uri: profileImg }}
          className="w-full h-full"
        />
      </View>
      <View className="justify-around ">
        <View
          className={`w-[112%] ${
            accountType !== "dark" && accountType !== "light"
              ? "pb-4 border-b border-black"
              : ""
          } `}
        >
          <ThemedText
            style={{
              color:
                accountType === "dark" || accountType === "light"
                  ? "#fff"
                  : undefined,
            }}
            className="font-bold"
          >
            {name} {emoji}
          </ThemedText>
        </View>
        {accountType === "dark" ||
          (accountType === "light" && (
            <View
              className="w-[110%] rounded-full"
              style={{
                height: hp(0.8),
                backgroundColor:
                  accountType === "light" ? "#fff" : AppColors.BondYellow,
              }}
            ></View>
          ))}

        <MutualInterestDots
          whiteDots={whiteDots}
          interestsCount={mutualInterestsCount}
        />
      </View>
    </View>
  );
};

export default UserCard;
