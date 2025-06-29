import Svg, { Path } from "react-native-svg";

// Custom ArrowLeft SVG
export const ArrowLeft = ({ color = "#000", opacity = 1 }) => (
  <Svg width={30} height={30} viewBox="0 0 20 20" fill="none">
    <Path
      d="M13 5l-5 5 5 5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
    />
  </Svg>
);
