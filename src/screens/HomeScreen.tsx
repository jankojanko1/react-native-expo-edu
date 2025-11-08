import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import CategoryList from "@/components/CategoryList";
import SearchBar from "@/components/SearchBar";
import { fetchVideosByQuery } from "@/api/youtube";
import type { YouTubeSearchItem } from "@/types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import type { RootStackParamList } from "@/navigation/AppNavigator";
import PreloadScreen from "@/components/PreloadScreen";

type Nav = NativeStackNavigationProp<RootStackParamList, "Home">;

const CATEGORIES = ["React Native", "React", "TypeScript", "JavaScript"];

export default function HomeScreen() {
  const nav = useNavigation<Nav>();
  const [data, setData] = useState<Record<string, YouTubeSearchItem[]>>({});
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    (async () => {
      const out: Record<string, YouTubeSearchItem[]> = {};
      for (const cat of CATEGORIES) {
        // const res = await fetchVideosByQuery(cat, 8);
        const res = await fetchVideosByQuery(cat);
        out[cat] = res;
      }
      setData(out);
    })();
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <SearchBar onSearch={(q) => nav.navigate("Search", { query: q })} />
        <Text style={styles.title}>Kategorie</Text>
        {CATEGORIES.map((cat) => (
          <View key={cat}>
            <CategoryList category={cat} videos={data[cat]} />
            {/* <TouchableOpacity
            onPress={() => nav.navigate("Search", { query: cat })}
          >
            <Text style={styles.showMore}>Zobacz więcej →</Text>
          </TouchableOpacity> */}
          </View>
        ))}
      </ScrollView>
      {showWelcome && (
        <PreloadScreen onContinue={() => setShowWelcome(false)} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "800", marginBottom: 12 },
  showMore: { color: "#007AFF", marginVertical: 8, fontWeight: "600" },
});
