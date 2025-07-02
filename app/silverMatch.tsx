import { ArrowLeft } from "@/assets/svg/arrowLeft";
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
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";


const TravieImg = require("../assets/images/Tracie.png");

// Import chat and talk images
const chatImg = require("../assets/images/chat.png");
const talkImg = require("../assets/images/talk.png");
const locationImg = require("../assets/images/location.png");

const SilverMatch = () => {
  const interestData = [
    { text: "Travel", gradientBg: true },
    { text: "Stanford University", gradientBg: true },
    { text: "The Umbrella Academy", gradientBg: false },
    { text: "Comedy", gradientBg: true },
    { text: "Burno Mars", gradientBg: true },
    { text: "Imagine Dragon", gradientBg: false },
    { text: "Joe Rogan Experience", gradientBg: false },
    { text: "Football", gradientBg: false },
    { text: "Rick & Morty", gradientBg: false },
    { text: "Conemporary Art", gradientBg: true },
  ];
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Main card container */}
      <View
        style={{
          height: hp("85%"),
          borderRadius: wp("12%"),
          marginHorizontal: wp("5%"),
          marginTop: hp("2%"),
          backgroundColor: "#E5E4E2",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: hp("0.5%"),
          },
          shadowOpacity: 0.15,
          shadowRadius: wp("3%"),
          elevation: 8,
          paddingHorizontal: wp("6%"),
          paddingTop: hp("2.5%"),
          paddingBottom: hp("1.5%"),
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Close button */}
          <View style={{ alignItems: "flex-end", marginBottom: hp("2%") }}>
            <LinearGradient
              colors={["#FF0000", "#8C0000"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ borderRadius: wp("3%") }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "transparent",
                  borderRadius: wp("3%"),
                  paddingHorizontal: wp("3%"),
                  paddingVertical: hp("0.5%"),
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: hp("1.5%"),
                    fontWeight: "500",
                  }}
                >
                  Report
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/* Profile section */}
          <View
            style={{
              alignItems: "center",
              marginBottom: hp("3%"),
              marginTop: -hp("3%"),
            }}
          >
            {/* Numbers and profile image */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: hp("2%"),
                gap: wp("5%"),
              }}
            >
              {/* Left number circle with profile image */}
              <View
                style={{
                  width: wp("20%"),
                  height: wp("20%"),
                  borderRadius: wp("10%"),
                  borderWidth: 2,
                  borderColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  marginRight: -wp("12%"),
                  marginBottom: 0,
                  overflow: "hidden",
                }}
              >
                {/* Background profile image with low opacity */}
                <View style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.1 }}>
                  <Image source={TravieImg} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                </View>
                {/* Number text */}
                <Text
                  style={{
                    fontSize: hp("3%"),
                    fontWeight: "bold",
                    color: "#000",
                    zIndex: 1,
                  }}
                >
                  1
                </Text>
              </View>

              {/* Profile image */}
              <View
                style={{
                  width: wp("45%"),
                  height: wp("45%"),
                  borderRadius: wp("22.5%"),
                  borderWidth: 4,
                  borderColor: "#000",
                  overflow: "hidden",
                  backgroundColor: "#000",
                  position: "relative",
                  zIndex: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={TravieImg} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
              </View>

              {/* Right number circle with profile image */}
              <View
                style={{
                  width: wp("20%"),
                  height: wp("20%"),
                  borderRadius: wp("10%"),
                  borderWidth: 2,
                  borderColor: "#000",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                  marginLeft: -wp("12%"),
                  marginBottom: 0,
                  overflow: "hidden",
                }}
              >
                {/* Background profile image with low opacity */}
                <View style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.1 }}>
                  <Image source={TravieImg} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                </View>
                {/* Number text */}
                <Text
                  style={{
                    fontSize: hp("3%"),
                    fontWeight: "bold",
                    color: "#000",
                    zIndex: 1,
                  }}
                >
                  3
                </Text>
              </View>
            </View>

            {/* Emoji */}
            <Text style={{ fontSize: hp("3%"), marginBottom: hp("1%") }}>
              🐱
            </Text>

            {/* Name and age */}
            <Text
              style={{
                fontSize: hp("3%"),
                fontWeight: "bold",
                color: "#000",
                marginBottom: hp("1%"),
              }}
            >
              Tracie Jones 24
            </Text>

            {/* Location */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: hp("1%"),
              }}
            >
              <Image
                source={locationImg}
                style={{
                  width: wp("4%"),
                  height: wp("4%"),
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  fontSize: hp("1.5%"),
                  color: "#000",
                  marginLeft: wp("1%"),
                }}
              >
                Austin, TX
              </Text>
            </View>

            {/* Mutual interests header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 0,
                width: "100%",
                justifyContent: "center",
                marginLeft: wp("1%"),
                gap: wp("1%"),
              }}
            >
              {/* Left line and arrows */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ marginRight: -wp("5.5%") }}>
                  <ArrowLeft color="#000" opacity={0.3} />
                </View>
                <View style={{ marginRight: -wp("4%") }}>
                  <ArrowLeft color="#000" opacity={1} />
                </View>
                <View
                  style={{
                    backgroundColor: "#000",
                    height: hp("0.4%"),
                    width: wp("9%"),
                  }}
                />
              </View>
              {/* Text */}
              <Text
                style={{
                  fontSize: hp("2.2%"),
                  fontWeight: "600",
                  color: "#000",
                  marginHorizontal: wp("2%"),
                }}
              >
                5 Mutual Interests
              </Text>
              {/* Right line and arrows */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#000",
                    height: hp("0.4%"),
                    width: wp("9%"),
                  }}
                />
                <View style={{ marginLeft: -wp("4%") }}>
                  <ArrowRight color="#000" opacity={1} />
                </View>
                <View style={{ marginLeft: -wp("5.5%") }}>
                  <ArrowRight color="#000" opacity={0.3} />
                </View>
              </View>
            </View>
          </View>

          {/* Interest tags */}
          <View
            style={{
              alignItems: "center",
              flex: 1,
              flexShrink: 1,
              flexGrow: 1,
              marginTop: -hp("2.5%"),
            }}
          >
            {interestData.map((interest, index) => (
              <InterestItem
                key={index}
                text={interest.text}
                gradientBg={interest.gradientBg}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Bottom navigation with Say Hi button */}
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          bottom: hp("4%"),
          left: 0,
          right: 0,
          paddingHorizontal: wp("8%"),
        }}
      >
        <TouchableOpacity onPress={() => router.push("/GoldMatch")}>
          <Image
            style={{
              transform: [{ rotate: "90deg" }],
              marginBottom: hp("2%"),
              width: hp("6%"),
              height: hp("6%"),
            }}
            resizeMode="contain"
            source={require("../assets/images/chevron-down.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: wp("2%"),
            marginBottom: hp("1.5%"),
          }}
        >
          <Text
            style={{
              fontSize: hp("2%"),
              fontWeight: "600",
              color: "#000",
              marginBottom: hp("1.5%"),
            }}
          >
            Say Hi!
          </Text>
          <View
            style={{
              width: wp("10%"),
              height: wp("10%"),
              borderRadius: wp("5%"),
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Chat icon as background */}
            <Image
              source={chatImg}
              style={{
                position: "absolute",
                width: wp("12%"),
                height: wp("12%"),
                top: -hp("0.5%"),
                left: wp("1%"),
                resizeMode: "contain",
              }}
            />
            {/* Talk icon overlayed in center */}
            <Image
              source={talkImg}
              style={{
                position: "absolute",
                width: wp("7%"),
                height: wp("7%"),
                top: hp("0.5%"),
                left: wp("3%"),
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SilverMatch;
