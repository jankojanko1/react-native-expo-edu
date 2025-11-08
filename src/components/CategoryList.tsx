import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import VideoCard from "./VideoCard";
import type { YouTubeSearchItem } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/AppNavigator";
import { theme } from "@/theme/theme";

type Nav = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function CategoryList({
  category,
  videos = [],
}: {
  category: string;
  videos?: YouTubeSearchItem[];
}) {
  const nav = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <View style={styles.title_head}>
        <Text style={styles.header}>{category}</Text>
        <TouchableOpacity
          onPress={() => nav.navigate("Search", { query: category })}
        >
          <Text>Show more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        style={{ paddingHorizontal: 24 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VideoCard
            video={{
              id: item.id.videoId,
              title: item.snippet.title,
              data: item.snippet.publishedAt,
              thumbnail:
                item.snippet.thumbnails.medium?.url ??
                item.snippet.thumbnails.default?.url ??
                "",
            }}
          />
        )}
      />
      <View style={styles.spaceBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 32 },
  header: { fontSize: 16, fontWeight: "600" },
  spaceBar: {
    height: 2,
    backgroundColor: theme.themePrimary,
    width: "100%",
    marginTop: 16,
  },
  title_head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 12,
  },
});
