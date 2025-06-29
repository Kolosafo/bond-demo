import { View } from "react-native";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useTheme } from "../../hooks/useTheme";
const BottomSheetBase = ({
  handleDismissModal,
  snapPoints,
  children,
  showModal,
  snapPointIndex,
}: {
  handleDismissModal: (val: boolean) => void;
  snapPoints: string[];
  children: React.ReactNode;
  showModal: boolean;
  snapPointIndex: number;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const { currentTheme } = useTheme();

  useEffect(() => {
    if (showModal) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [showModal]);
  return (
    showModal && (
      <BottomSheetModalProvider>
        <View className="flex-1 border-white">
          <StatusBar />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onDismiss={() => {
              handleDismissModal(false);
            }}
            index={snapPointIndex}
            snapPoints={snapPoints}
            onChange={(index: number) => {}}
            backgroundStyle={{
              borderRadius: 32,
              //   backgroundColor: currentTheme === "dark" ? "#404040" : "#fff",
            }}
            handleIndicatorStyle={{
              display: "none",
              //   backgroundColor: currentTheme === "dark" ? "#fff" : "#404040",
            }}
            style={{ flex: 1 }}
          >
            {children}
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    )
  );
};

export default BottomSheetBase;
