import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MutualInterestDots = ({
  _className,
  gradientClassName,
  interestsCount,
  whiteDots,
}: {
  _className?: string;
  gradientClassName?: string;
  interestsCount: number;
  whiteDots?: boolean;
}) => {
  const firstGradient = whiteDots ? "#fff" : "#CFA6F6";
  const secondGradient = whiteDots ? "#fff" : "#240909";
  return (
    <View className={`flex-row space-x-1.5 items-center ${_className}`}>
      {[...Array(10)].map((_, index) => (
        <View
          key={index}
          style={{
            width: wp(3.7),
            height: wp(3.7),
            borderColor: whiteDots ? "white" : "black",
          }}
          className="rounded-full overflow-hidden border"
        >
          {index < interestsCount ? (
            <LinearGradient
              colors={[firstGradient, secondGradient]}
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
