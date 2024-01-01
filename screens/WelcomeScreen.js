import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import { SIZES } from "../utils/constants/theme";
import LogoComponent from "../components/LogoComponent";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem("onboarded");
    navigation.push("Onboarding");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LogoComponent />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontFamily: "bold", fontSize: 24 }}>Just Errands</Text>
      </View>

      <View style={{ width: SIZES.width / 1.3 }}>
        <ButtonComponent
          loader={false}
          title={"Sign In"}
          onPress={() => navigation.navigate("login")}
          isValid={true}
          width={50}
          height={"100%"}
        />

        <ButtonComponent
          loader={false}
          title={"Sign Up"}
          onPress={() => navigation.navigate("signUp")}
          isValid={false}
          width={50}
          height={"100%"}
        />
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
