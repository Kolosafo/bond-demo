import { View, Text } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Scaffold from "@/components/ui/Scaffold";
import { ThemedText } from "@/components/ui/ThemedText";
import InterestItem from "@/components/ui/InterestItem";
import UserCard from "@/components/ui/UserCard";
import MatchCard from "@/components/matches/MatchCard";

const Welcome = () => {
  return (
    <Scaffold>
      <Text className="" style={{ fontSize: hp(3) }}>
        🥳
      </Text>
      <View className="items-center space-y-3">
        <ThemedText
          className="font-semibold"
          style={{ fontSize: hp(1.9), fontFamily: "Avenir" }}
        >
          Welcome to bond!
        </ThemedText>
        <ThemedText
          style={{ fontSize: hp(1.6), fontFamily: "Avenir" }}
          className="text-center leading-5"
        >
          The intimate social network with no followers, no posts no likes, no
          comments, no pressure... Just a place where you can genuinely meet and{" "}
          <ThemedText className="font-semibold">bond</ThemedText> with people
          with similar interests, one to one, its that simple.
        </ThemedText>
      </View>
      <View className="items-center space-y-3">
        <ThemedText style={{ fontSize: hp(1.7), fontFamily: "Avenir" }}>
          How it Works
        </ThemedText>
        <ThemedText
          className="leading-5 text-center"
          style={{ fontFamily: "Avenir" }}
        >
          You ist up to 1o of your interests, these can be updated at any time
          and can be anything! for example:
        </ThemedText>
      </View>
      <View className="items-center">
        {[
          "Travel",
          "University of Abuja",
          "Umbrella Academy",
          "Party",
          "Eating Pasta on the roof top with friends",
        ].map((item) => (
          <InterestItem key={item} text={item} />
        ))}
      </View>
      <ThemedText
        className="leading-5 text-center"
        style={{ fontFamily: "Avenir" }}
      >
        We show you people based on your location preferences who have similar
        interests with you in descending order, for example:
      </ThemedText>
      <View className="mb-3">
        <ThemedText
          className="leading-5 text-center"
          style={{ fontFamily: "Avenir" }}
        >
          People with up to 10 mutual interests are shown in gold*
        </ThemedText>
        <ThemedText
          className=""
          style={{ fontSize: hp(1), fontFamily: "Avenir" }}
        >
          *Only available on &apos;bond more&apos; paid subscription
        </ThemedText>
      </View>

      <View className="w-full items-center">
        <ThemedText
          className="leading-5 text-center w-[70%]"
          style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}
        >
          Emoji gives a quick glimpse of the users character or interest
        </ThemedText>
        <View className="flex-row items-center justify-between w-full px-10 relative">
          <ThemedText style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}>
            Light Mode
          </ThemedText>
          <View className="h-4 w-0.5 bg-black absolute left-[63%]"></View>
          <View className="w-2 h-2 bg-transparent"></View>
        </View>
        <UserCard
          _className="mb-4"
          name="Alice Johnson"
          emoji="😁"
          mutualInterestsCount={6}
          profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
          accountType="premium"
        />
        <View className="w-full items-center flex-row justify-center">
          <View className="w-[40%] h-0.5 bg-black relative">
            <View className="w-0.5 h-3.5 bg-black self-start absolute left-0 -top-3"></View>
            <View className="w-0.5 h-3.5 bg-black self-start absolute right-0 -top-3"></View>
            <View className="w-0.5 h-3.5 bg-black self-start absolute right-1/2 top-0"></View>
          </View>
          <View></View>
        </View>
        <ThemedText
          className="leading-5 text-center mt-3"
          style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}
        >
          Shaded circles indicate number of mutual interests
        </ThemedText>
      </View>
      <View className="w-full items-center">
        <View className="flex-row items-center justify-between w-full px-10 relative">
          <ThemedText style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}>
            Dark Mode
          </ThemedText>
        </View>
        <UserCard
          _className="mb-4"
          name="Alice Johnson"
          emoji="😁"
          mutualInterestsCount={6}
          profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
          accountType="dark"
          whiteDots
        />
      </View>
      <View className="w-full items-center">
        <ThemedText
          style={{ fontFamily: "Avenir", fontSize: hp(1.7) }}
          className="w-[60%] text-center"
        >
          And People with up to 5 mutual interests are shown in silver
        </ThemedText>
      </View>
      <View className="w-full items-center">
        <View className="flex-row items-center justify-between w-full px-10 relative">
          <ThemedText style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}>
            Light Mode
          </ThemedText>
        </View>
        <UserCard
          _className="mb-4"
          name="Alice Johnson"
          emoji="😁"
          mutualInterestsCount={6}
          profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
          accountType="free"
        />
      </View>
      <View className="w-full items-center">
        <View className="flex-row items-center justify-between w-full px-10 relative">
          <ThemedText style={{ fontFamily: "Avenir", fontSize: hp(1.4) }}>
            Dark Mode
          </ThemedText>
        </View>
        <UserCard
          _className="mb-4"
          name="Alice Johnson"
          emoji="😁"
          mutualInterestsCount={6}
          profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
          accountType="light"
          whiteDots
        />
      </View>
      <View className="w-full items-center">
        <ThemedText
          style={{ fontFamily: "Avenir", fontSize: hp(1.7) }}
          className="w-[70%] text-center"
        >
          Tap a user to view exact mutual interests and more about the person
        </ThemedText>
      </View>
      <View className="px-4 w-full">
        <MatchCard />
      </View>
    </Scaffold>
  );
};

export default Welcome;
