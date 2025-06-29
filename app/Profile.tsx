import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Entypo from "@expo/vector-icons/Entypo";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ThemedText } from "@/components/ui/ThemedText";
import InterestItem from "@/components/ui/InterestItem";
import { useRouter } from "expo-router";

const Profile = ({
  onPress,
  onProfilePress,
}: {
  onPress?: () => void;
  onProfilePress?: () => void;
}) => {
  const { textThemeColor } = useTheme();
  const router = useRouter();
  const ImageWithFadeBg = () => (
    <>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        }}
        className="h-full w-full absolute opacity-50"
        resizeMode="cover"
      />
      <View className="bg-white/50 h-full w-full absolute" />
    </>
  );
  return (
    <LinearGradient colors={["#F1FBF0", "#E0F5DD"]}>
      <KeyboardAwareScrollView className="">
        <View
          className={`h-[95vh] w-[101%] self-center border-2 border-[${textThemeColor}] rounded-t-[35px] px-6 border-b-0 items-center py-5`}
        >
          <TouchableOpacity onPress={onPress}>
            <Image
              className={``}
              style={{ width: hp(6), height: hp(6) }}
              resizeMode="contain"
              source={require("../assets/images/chevron-down.png")}
            />
          </TouchableOpacity>

          <View className="flex-row mt-1.5 items-center">
            <View
              className="border-2 rounded-full self-end -mb-10 items-center justify-center overflow-hidden -mr-6"
              style={{ height: hp(10), width: hp(10) }}
            >
              <ImageWithFadeBg />
              <Entypo name="plus" size={40} color="black" />
            </View>
            <TouchableOpacity
              className="border-4 rounded-full overflow-hidden"
              style={{ height: hp(20), width: hp(20) }}
              onPress={() => router.push("/silverMatch")}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                }}
                className="h-full w-full"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View
              className="border-2 rounded-full self-end -mb-10 items-center justify-center overflow-hidden -ml-6"
              style={{ height: hp(10), width: hp(10) }}
            >
              <ImageWithFadeBg />
              <Entypo name="plus" size={40} color="black" />
            </View>
          </View>
          <View className="mt-2 items-center w-full h-full">
            <Text className="text-2xl">🤓</Text>
            <ThemedText style={{ fontSize: hp(2.5) }} className="font-bold">
              Olly Henson 25
            </ThemedText>
            <View className="flex-row items-center space-x-2 -mt-1">
              <Image
                source={require("../assets/images/LocationIcon.png")}
                resizeMode="contain"
                className="self-end mt-2"
                style={{ width: hp(2.2) }}
              />
              <ThemedText className="text-xs">Los Angeles, CA</ThemedText>
            </View>
            <View className="flex-row items-center justify-between w-full">
              <View className="w-[35%] h-[3px] bg-black" />
              <ThemedText style={{ fontSize: hp(1.8) }} className="font-bold">
                Interests
              </ThemedText>
              <View className="w-[35%] h-[3px] bg-black" />
            </View>
            <View className="items-center mt-4">
              {[
                "Travel",
                "University of Abuja",
                "Umbrella Academy",
                "Party",
                "Eating Pasta on the roof top with friends",
                "University of Abuja",
                "Umbrella Academy",
                "Party",
                "Eating Pasta With Friends",
                "Travel",
                "Going to Palominos",
              ].map((item, index) => (
                <InterestItem
                  //   gradientBg={index / 2 === 1}
                  key={index}
                  text={item}
                />
              ))}
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity className="absolute bottom-10 right-6">
        <Image
          style={{ width: hp(3) }}
          resizeMode="contain"
          source={require("../assets/images/EditIcon.png")}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Profile;
