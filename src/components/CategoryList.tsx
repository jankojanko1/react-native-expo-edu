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
          <Text>Zobacz więcej →</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={videos}
        keyExtractor={(item) => item.id.videoId}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <VideoCard
            video={{
              id: item.id.videoId,
              title: item.snippet.title,
              thumbnail:
                item.snippet.thumbnails.medium?.url ??
                item.snippet.thumbnails.default?.url ??
                "",
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 32 },
  header: { fontSize: 16, fontWeight: "600" },
  title_head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
});
