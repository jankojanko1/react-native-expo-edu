import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import AppIcon from "../../assets/app-icon.svg";
import Logo from "../../assets/logo.svg";
import { theme, GlobalFont } from "@/theme/theme";

interface Props {
  onContinue: () => void;
}

const PreloadScreen: React.FC<Props> = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 64 }}>
        <Logo />
      </View>
      <View>
        <AppIcon width={100} height={100} />
      </View>

      <View style={styles.loginContainer}>
        <Text style={[GlobalFont.CustomFont, styles.title]}>
          Welcome to the best Youtube-based learning application.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onContinue}>
          <Text style={[GlobalFont.CustomFont, styles.buttonText]}>
            Log in as guest
          </Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <Text style={[GlobalFont.CustomFont, styles.separator]}>
            By continuing you agree with
          </Text>
          <View style={styles.linkFlex}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://example.com/terms")}
            >
              <Text style={styles.link}>Terms and Conditions</Text>
            </TouchableOpacity>
            <Text style={styles.separator}>and</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://example.com/privacy")}
            >
              <Text style={styles.link}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: theme.theme,
    zIndex: 50,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 64,
  },
  loginContainer: {
    flexDirection: "column",
    gap: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
    letterSpacing: 0.01,
    color: theme.themeSecondary,
  },
  button: {
    backgroundColor: theme.themePrimary,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: theme.themeSecondary,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  linksContainer: {
    alignItems: "center",
  },
  link: {
    color: theme.themePrimary,
    textDecorationLine: "underline",
    fontSize: 13,
  },
  linkFlex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },
  separator: {
    color: theme.themeSecondary,
  },
});

export default PreloadScreen;
