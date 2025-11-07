import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  initial?: string;
  onSearch: (query: string) => void;
};

export default function SearchBar({ initial = "", onSearch }: Props) {
  const [query, setQuery] = useState(initial);
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Szukaj wideo..."
        onSubmitEditing={() => onSearch(query)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSearch(query)}>
        <Text style={styles.buttonText}>Szukaj</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 12 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    marginLeft: 8,
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
});
