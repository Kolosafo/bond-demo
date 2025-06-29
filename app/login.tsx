import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import BondButton from "@/components/ui/BondButton";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import BondInput from "@/components/ui/bondInput";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLogin = () => {
    setIsLoading(true);
    // Add your login logic here
    setTimeout(() => {
      setIsLoading(false);
      router.push("/Home")
    }, 2000);
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
    console.log("Navigate to sign up");
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log("Forgot password");
  };

  return (
    <View className="flex-1 bg-white items-center px-8 pt-16">
      {/* Bond Logo Text */}
      <Text
        className="font-light text-black mb-8 tracking-wider"
        style={{ fontSize: hp(8) }}
      >
        bond
      </Text>

      {/* Icon */}
      <View className="mb-6">
        <Image
          source={require("@/assets/images/icon.png")}
          className="w-[221px] h-[221px]"
          resizeMode="contain"
        />
      </View>

      {/* Tagline */}
      <ThemedText
        className="text-gray-600 mb-12 text-center"
        style={{ fontSize: hp(2.2) }}
      >
        For Friends, Not Followers
      </ThemedText>

      {/* Input Fields */}
      <View className="w-full mb-8">
        <BondInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <BondInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      {/* Login Button */}
      <View className="w-3/5 mb-6">
        <BondButton
          title="Log in"
          onPress={handleLogin}
          isLoading={isLoading}
          _className="px-8"
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <ThemedText
          className="text-gray-600 mb-16"
          style={{ fontSize: hp(1.2) }}
        >
          Forgot Password?
        </ThemedText>
      </TouchableOpacity>

      {/* Sign Up Section */}
      <TouchableOpacity
        className="items-center absolute bottom-16"
        onPress={handleSignUp}
      >
        <TouchableOpacity>
          <Image
            className={`transform rotate-180 mb-2`}
            style={{ width: hp(6), height: hp(6) }}
            resizeMode="contain"
            source={require("../assets/images/chevron-down.png")}
          />
        </TouchableOpacity>
        <ThemedText className="text-gray-600" style={{ fontSize: hp(1.5) }}>
          Tap to Sign up
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}
