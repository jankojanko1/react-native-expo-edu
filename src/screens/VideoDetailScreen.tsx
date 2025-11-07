import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Video from "react-native-video";
import { RouteProp, useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "@/navigation/AppNavigator";
import { fetchVideoDetails } from "@/api/youtube";
import type { YouTubeVideoDetail } from "@/types/types";

type Route = RouteProp<RootStackParamList, "VideoDetail">;

export default function VideoDetailScreen() {
  const route = useRoute<Route>();
  const { videoId } = route.params;
  const [video, setVideo] = useState<YouTubeVideoDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    (async () => {
      const v = await fetchVideoDetails(videoId);
      setVideo(v);
      setLoading(false);
    })();
  }, [videoId]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ width: "100%", height: 220, backgroundColor: "#000" }}>
        <Video
          source={{
            uri: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
          }}
          // style={{ width: "100%", height: 220 }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
          controls
          resizeMode="contain"
        />
      </View>
      <View style={styles.info}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={styles.title}>{video?.snippet?.title}</Text>
            <Text style={styles.channel}>{video?.snippet?.channelTitle}</Text>
            <Text style={styles.description}>
              {video?.snippet?.description}
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  info: { padding: 16 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  channel: { color: "#666", marginBottom: 10 },
  description: { color: "#333" },
});
