import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/AppNavigator";
import SearchBar from "@/components/SearchBar";
import { fetchVideosByQuery } from "@/api/youtube";
import VideoCard from "@/components/VideoCardSearch";
import type { YouTubeSearchItem } from "@/types/types";

type SearchRoute = RouteProp<RootStackParamList, "Search">;

export default function SearchScreen() {
  const route = useRoute<SearchRoute>();
  const initial = route.params?.query || "";
  const [query, setQuery] = useState(initial);
  const [videos, setVideos] = useState<YouTubeSearchItem[]>([]);

  const doSearch = async (q: string) => {
    setQuery(q);
    if (!q) {
      setVideos([]);
      return;
    }
    // const res = await fetchVideosByQuery(q, 20);
    const res = await fetchVideosByQuery(q);
    setVideos(res);
  };

  useEffect(() => {
    if (query) doSearch(query);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar initial={query} onSearch={doSearch} />
      <View
        style={{
          marginLeft: 24,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Text style={{ color: "#000", fontSize: 10 }}>
          {videos.length} results found for
        </Text>
        <Text style={{ color: "#000", fontWeight: 600, fontSize: 10 }}>
          {" "}
          "{query}"
        </Text>
      </View>
      {videos.length === 0 ? (
        <Text style={styles.empty}>Brak wyników</Text>
      ) : (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => (
            <VideoCard
              video={{
                id: item.id.videoId,
                title: item.snippet.title,
                data: item.snippet.publishedAt,
                // thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
                thumbnail:
                  item.snippet.thumbnails.medium?.url ??
                  item.snippet.thumbnails.default?.url ??
                  "",
              }}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: { marginTop: 48, textAlign: "center", color: "#666" },
});
