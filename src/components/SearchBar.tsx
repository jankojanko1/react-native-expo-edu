import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import SearchIcon from "../../assets/icons/search-icon.svg";
import IconSettings from "../../assets/icons/settings-icon.svg";
import { theme, GlobalFont } from "@/theme/theme";

type Props = {
  initial?: string;
  onSearch: (query: string) => void;
};

export default function SearchBar({ initial = "", onSearch }: Props) {
  const [query, setQuery] = useState(initial);
  return (
    <View style={styles.container}>
      <View style={{ position: "relative", flex: 1, height: 40 }}>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search videos"
          onSubmitEditing={() => onSearch(query)}
          style={[GlobalFont.CustomFont, styles.input]}
        />
        <SearchIcon
          width={24}
          height={24}
          color="#000"
          style={{ position: "absolute", zIndex: 10, left: 8, top: 8 }}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <IconSettings />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginBottom: 12,
    marginTop: 64,
    padding: 24,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: theme.themePrimary,
    borderRadius: 16,
    paddingHorizontal: 10,
    height: 40,
    paddingLeft: 38,
  },
  button: {
    marginLeft: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
