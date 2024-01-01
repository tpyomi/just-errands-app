import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../utils/constants/theme";

export default function LogoComponent() {
  return (
    <View>
      <View>
        <View style={styles.outerContainer}>
          <View style={styles.secondInnerCont}>
            <View style={styles.innerWrapper}>
              <Image
                source={require("../assets/go-basket-logo.png")}
                style={{
                  width: 100,
                  height: 100,
                  tintColor: COLORS.secondary,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  innerWrapper: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 999,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondInnerCont: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 999,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outerContainer: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    borderRadius: 999,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
