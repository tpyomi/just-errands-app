import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../utils/constants/theme";

export default function ButtonComponent({
  title,
  onPress,
  isValid,
  loader,
  width,
  height,
}) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.btnStyle(!isValid ? null : COLORS.primary, width, height)}
      >
        {!loader ? (
          <Text
            style={styles.btnTxt(!isValid ? COLORS.black : COLORS.lightWhite)}
          >
            {title}
          </Text>
        ) : (
          <ActivityIndicator />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnTxt: (bkgColor) => ({
    fontFamily: "bold",
    color: bkgColor,
    fontSize: 18,
  }),
  btnStyle: (backgroundColor, width, height) => ({
    height: height,
    width: width,
    marginVertical: 5,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
  }),
});
