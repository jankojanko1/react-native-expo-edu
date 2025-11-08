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

interface Props {
  onContinue: () => void;
}

const PreloadScreen: React.FC<Props> = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <AppIcon width={100} height={100} />
      </View>

      <Text style={styles.title}>Welcome</Text>

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Log in as guest</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://example.com/terms")}
        >
          <Text style={styles.link}>Terms & Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://example.com/privacy")}
        >
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
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
    backgroundColor: "#fff",
    zIndex: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  link: {
    color: "#666",
    textDecorationLine: "underline",
    fontSize: 13,
  },
  separator: {
    color: "#aaa",
    marginHorizontal: 8,
  },
});

export default PreloadScreen;
