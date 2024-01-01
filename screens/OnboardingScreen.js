import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Welcome");
    setItem("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text>Done</Text>
    </TouchableOpacity>;
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        // DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#002C6C",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/onboarding1.json")}
                  style={styles.lottie}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Effortless Errands",
            subtitle:
              "Let us handle your tasks while you focus on what matters.",
          },
          {
            backgroundColor: "#E9CA90",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/onboarding2.json")}
                  style={styles.lottie}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Fast and Reliable",
            subtitle:
              "Our runners are ready to swiftly complete your errands with utmost reliability.",
          },
          {
            backgroundColor: "#6DAF80",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/onboarding4.json")}
                  style={styles.lottie}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Request with Ease",
            subtitle:
              "Simply tap and request errands with our user-friendly app. Your convenience, our priority",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: "white",
    // borderTopLeftRadius: "100%",
    // borderBottomLeftRadius: "100%",
  },
});
