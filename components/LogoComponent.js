import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS } from "../utils/constants/theme";

export default function LogoComponent({ width, height }) {
  return (
    <View>
      <View>
        <View style={styles.outerContainer(width, height)}>
          <View style={styles.secondInnerCont(width, height)}>
            <View style={styles.innerWrapper(width, height)}>
              <Image
                source={require("../assets/go-basket-logo.png")}
                style={{
                  width: width,
                  height: height,
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
  innerWrapper: (width, height) => ({
    width: width,
    height: height,
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
  }),
  secondInnerCont: (width, height) => ({
    width: width + 100,
    height: height + 100,
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
  }),
  outerContainer: (width, height) => ({
    width: width + 200,
    height: height + 200,
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
  }),
});
