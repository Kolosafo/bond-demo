import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MutualInterestDots = ({
  _className,
  gradientClassName,
  interestsCount,
}: {
  _className?: string;
  gradientClassName?: string;
  interestsCount: number;
}) => {
  return (
    <View className={`flex-row space-x-2 items-center ${_className}`}>
      {[...Array(10)].map((_, index) => (
        <View
          key={index}
          style={{ width: wp(4), height: wp(4) }}
          className="rounded-full overflow-hidden border border-black"
        >
          {index < interestsCount ? (
            <LinearGradient
              colors={["#CFA6F6", "#240909"]}
              className={`${gradientClassName}`}
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
            />
          ) : (
            <View
              style={{ width: "100%", height: "100%", borderRadius: 999 }}
              className="bg-transparent"
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default MutualInterestDots;
