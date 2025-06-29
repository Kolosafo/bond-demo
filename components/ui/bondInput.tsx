import React from "react";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  _className?: string;
};

const BondInput = ({
  placeholder,
  value,
  onChangeText,
  _className,
  ...props
}: Props) => {
  return (
    <TextInput
      className={`w-full h-12 bg-[#EEEEEE] rounded-3xl px-4 text-base text-black mb-4 text-center shadow-sm ${_className}`}
      placeholder={placeholder}
      placeholderTextColor="#666666"
      value={value}
      onChangeText={onChangeText}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      }}
      {...props}
    />
  );
};

export default BondInput;
