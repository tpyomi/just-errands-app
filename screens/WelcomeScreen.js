import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { SIZES } from "../utils/constants/theme";
import LogoComponent from "../components/LogoComponent";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };

  // Calculate LogoComponent size based on screen dimensions
  const logoSize = Math.min(width * 0.2, height * 0.2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LogoComponent width={logoSize} height={logoSize} />

      <View style={styles.appNameContainer}>
        <Text style={styles.appName}>Just Errands</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonComponent
          loader={false}
          title={"Sign In"}
          onPress={() => navigation.navigate("Login")}
          isValid={true}
          width={width / 1.3}
          height={50}
        />

        <ButtonComponent
          loader={false}
          title={"Sign Up"}
          onPress={() => navigation.navigate("Signup")}
          isValid={false}
          width={width / 1.3}
          height={50}
        />

        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appNameContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  appName: {
    fontFamily: "bold",
    fontSize: width > height ? 18 : 24,
  },
  buttonsContainer: {
    width: width > height ? height / 1.3 : width / 1.3,
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
