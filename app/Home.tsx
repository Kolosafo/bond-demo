import { View, Text } from "react-native";
import React, { useState } from "react";
import Scaffold from "@/components/ui/Scaffold";
import Header from "@/components/home/Header";
import UserCard from "@/components/ui/UserCard";
import { DummyUsers } from "@/constants/dummyData";
import BottomProfileCard from "@/components/home/BottomProfileCard";
import { ThemedView } from "@/components/ui/ThemedView";
import SlideUpProfile from "@/components/home/SlideUpProfile";

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <ThemedView className="h-full w-full relative">
      <Header />
      <Scaffold _className="">
        <View className="w-full pt-30">
          {DummyUsers.map((user, index) => (
            <UserCard _className="mb-4" {...user} key={index} />
          ))}
        </View>
      </Scaffold>
      <BottomProfileCard
        onPress={() => {
          setShowProfile(true);
        }}
      />
      {showProfile && (
        <SlideUpProfile
          onClose={() => {
            setShowProfile(false);
          }}
        />
      )}
    </ThemedView>
  );
};

export default Home;
