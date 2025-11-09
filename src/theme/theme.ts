import { StyleSheet } from "react-native";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export const theme = {
  theme: "#8D99AE",
  themePrimary: "#2B2D42",
  themeSecondary: "#FFFFFF",
};

export const GlobalFont = StyleSheet.create({
  CustomFont: {
    fontFamily: String(Poppins_400Regular),
  },
  CustomFont600: {
    fontFamily: String(Poppins_600SemiBold),
  },
});
