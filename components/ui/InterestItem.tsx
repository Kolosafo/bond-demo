import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { AppColors } from "@/constants/enum";
import { truncateString } from "@/utils/helpers";
import { LinearGradient } from "expo-linear-gradient";

const InterestItem = ({
  text,
  gradientBg,
}: {
  text: string;
  gradientBg?: boolean;
}) => {
  return gradientBg ? (
    <LinearGradient
      colors={["#CFA6F6", "#240909"]}
      className="px-10 py-0.5 rounded-full border-[0.5px] border-black mb-2"
    >
      <ThemedText className="text-white">{truncateString(text, 26)}</ThemedText>
    </LinearGradient>
  ) : (
    <ThemedView
      style={{ backgroundColor: AppColors.BondGray }}
      className="px-10 py-0.5 rounded-full border-[0.5px] border-black mb-2"
    >
      <ThemedText className="">{truncateString(text, 26)}</ThemedText>
    </ThemedView>
  );
};

export default InterestItem;
