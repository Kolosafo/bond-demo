import { ArrowRight } from "@/assets/svg/arrowRight";
import InterestItem from "@/components/ui/InterestItem";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

// Import chat and talk images
const chatImg = require("../assets/images/chat.png");
const talkImg = require("../assets/images/talk.png");
const locationImg = require("../assets/images/location.png");

const GoldMatch = () => {
  const interestData = [
    { text: "Travel", gradientBg: true },
    { text: "University of California", gradientBg: true },
    { text: "The Umbrella Academy", gradientBg: true },
    { text: "Gaming", gradientBg: true },
    { text: "Bruno Mars", gradientBg: true },
    { text: "Imagine Dragons", gradientBg: true },
    { text: "Joe Rogan Experience", gradientBg: true },
    { text: "Political", gradientBg: false },
    { text: "Rick & Morty", gradientBg: true },
    { text: "Contemporary Art", gradientBg: true },
  ];

  const profileImageUri =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Main card container */}
      <View
        className="flex-1 bg-yellow-300 rounded-[50px]"
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 130,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8,
          paddingHorizontal: 24,
          paddingTop: 20,
          paddingBottom: 10,
        }}
      >
        {/* Close button */}
        <View className="items-end mb-5">
          <LinearGradient
            colors={["#FF0000", "#8C0000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ borderRadius: 12 }}
          >
            <TouchableOpacity
              className="bg-transparent rounded-xl"
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
              }}
            >
              <Text className="text-white text-xs font-medium">Report</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* Profile section */}
        <View className="items-center mb-8" style={{ marginTop: -40 }}>
          {/* Numbers and profile image */}
          <View
            className="flex-row items-center justify-center mb-4"
            style={{ gap: 20 }}
          >
            {/* Left number circle with profile image */}
            <View
              className="w-20 h-20 rounded-full border-2 border-black justify-center items-center relative overflow-hidden"
              style={{
                zIndex: 2,
                marginRight: -48,
                marginBottom: 0,
              }}
            >
              {/* Background profile image with low opacity */}
              <Image
                source={{ uri: profileImageUri }}
                className="w-full h-full absolute"
                style={{
                  resizeMode: "cover",
                  opacity: 0.5,
                }}
              />
              {/* White overlay */}
              <View
                className="absolute w-full h-full bg-white"
                style={{ opacity: 0.85 }}
              />
              {/* Number text */}
              <Text
                className="text-2xl font-bold text-black"
                style={{ zIndex: 1 }}
              >
                2
              </Text>
            </View>

            {/* Profile image */}
            <View
              className="rounded-full border-4 border-black overflow-hidden bg-pink-600 relative"
              style={{
                width: 180,
                height: 180,
                zIndex: 20,
              }}
            >
              <Image
                source={{ uri: profileImageUri }}
                className="w-full h-full"
                style={{ resizeMode: "cover" }}
              />
            </View>

            {/* Right number circle with profile image */}
            <View
              className="w-20 h-20 rounded-full border-2 border-black justify-center items-center relative overflow-hidden"
              style={{
                zIndex: 2,
                marginLeft: -48,
                marginBottom: 0,
              }}
            >
              {/* Background profile image with low opacity */}
              <Image
                source={{ uri: profileImageUri }}
                className="w-full h-full absolute"
                style={{
                  resizeMode: "cover",
                  opacity: 0.5,
                }}
              />
              {/* White overlay */}
              <View
                className="absolute w-full h-full bg-white"
                style={{ opacity: 0.85 }}
              />
              {/* Number text */}
              <Text
                className="text-2xl font-bold text-black"
                style={{ zIndex: 1 }}
              >
                3
              </Text>
            </View>
          </View>

          {/* Emoji */}
          <Text className="text-2xl mb-1">😊</Text>

          {/* Name and age */}
          <Text className="text-2xl font-bold text-black mb-1">
            Malina Perez 23
          </Text>

          {/* Location */}
          <View className="flex-row items-center mb-1">
            <Image
              source={locationImg}
              className="w-4 h-4"
              style={{ resizeMode: "contain" }}
            />
            <Text className="text-xs text-black ml-1">San Diego, CA</Text>
          </View>

          {/* Mutual interests header */}
          <View
            className="flex-row items-center mb-0 w-full justify-center"
            style={{
              marginLeft: 50,
              gap: 2,
            }}
          >
            {/* Left line */}
            <View className="bg-black" style={{ height: 3, width: 36 }} />
            {/* Text */}
            <Text className="text-xl font-semibold text-black mx-2">
              9 Mutual Interests
            </Text>
            {/* Right line and arrows */}
            <View className="flex-row items-center justify-center">
              <View className="bg-black" style={{ height: 3, width: 36 }} />
              <View style={{ marginLeft: -16 }}>
                <ArrowRight color="#000" opacity={1} />
              </View>
              <View style={{ marginLeft: -22 }}>
                <ArrowRight color="#000" opacity={0.3} />
              </View>
            </View>
          </View>
        </View>

        {/* Interest tags */}
        <View className="items-center flex-1" style={{ marginTop: -20 }}>
          {interestData.map((interest, index) => (
            <InterestItem
              key={index}
              text={interest.text}
              gradientBg={interest.gradientBg}
            />
          ))}
        </View>
      </View>

      {/* Bottom navigation with Say Hi button */}
      <View
        className="absolute flex-row justify-between items-center"
        style={{
          bottom: 30,
          left: 0,
          right: 0,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image
            className="transform rotate-90 mb-5"
            style={{ width: hp(6), height: hp(6) }}
            resizeMode="contain"
            source={require("../assets/images/chevron-down.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center"
          style={{
            gap: 8,
            marginBottom: 10,
          }}
        >
          <Text
            className="text-lg font-semibold text-black"
            style={{ marginBottom: 15 }}
          >
            Say Hi!
          </Text>
          <View className="w-10 h-10 rounded-full justify-center items-center relative">
            {/* Chat icon as background */}
            <Image
              source={chatImg}
              className="absolute"
              style={{
                width: 48,
                height: 48,
                top: -10,
                left: 6,
                resizeMode: "contain",
              }}
            />
            {/* Talk icon overlayed in center */}
            <Image
              source={talkImg}
              className="absolute"
              style={{
                width: 30,
                height: 30,
                top: -6,
                left: 15,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GoldMatch;
