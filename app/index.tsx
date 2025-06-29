import { View } from "react-native";
import React from "react";
import UserCard from "@/components/ui/UserCard";
import { DummyUsers } from "@/constants/dummyData";
import Scaffold from "@/components/ui/Scaffold";
import InterestItem from "@/components/ui/InterestItem";
import LoadingActivity from "@/components/ui/LoadingActivity";
import BondButton from "@/components/ui/BondButton";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <Scaffold _className="space-y-10">
      <LoadingActivity />
      <BondButton
        onPress={() => {
          router.push("/Home");
        }}
        title="Login"
        _mainContClassName="w-[30%] my-4"
      />
      <BondButton
        isLoading
        onPress={() => {}}
        title="Login"
        _mainContClassName="w-[30%] my-4"
      />
      {[
        "Travel",
        "University of Abuja",
        "Umbrella Academy",
        "Party",
        "Eating Pasta on the roof top with friends",
      ].map((item, index) => (
        <InterestItem gradientBg={index / 2 === 1} key={item} text={item} />
      ))}
      {DummyUsers.map((user, index) => (
        <UserCard _className="mb-4" {...user} key={index} />
      ))}
    </Scaffold>
  );
};

export default Index;
