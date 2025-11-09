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

import PersonIcon from "../../assets/icons/person-icon.svg";
import { theme, GlobalFont } from "@/theme/theme";

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
      <View style={{ width: "100%", height: 230, backgroundColor: "#000" }}>
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
            <Text style={[GlobalFont.CustomFont600, styles.title]}>
              {video?.snippet?.title}
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View style={styles.personIcon}>
                <PersonIcon width={24} height={24} color="#FFF" />
              </View>
              <Text style={[GlobalFont.CustomFont, styles.channel]}>
                {video?.snippet?.channelTitle}
              </Text>
            </View>

            <View style={styles.gapInfo}></View>

            <View style={styles.descriptionAddon}>
              <Text
                style={[
                  GlobalFont.CustomFont600,
                  { fontWeight: 600, fontSize: 10, color: "#000" },
                ]}
              >
                Description
              </Text>
              <Text style={[GlobalFont.CustomFont, styles.description]}>
                {video?.snippet?.description}
              </Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  personIcon: {
    width: 48,
    height: 48,
    position: "relative",
    backgroundColor: theme.themePrimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    marginRight: 8,
  },
  gapInfo: { width: "100%", height: 2, backgroundColor: theme.themePrimary },
  descriptionAddon: { marginTop: 16 },
  info: { padding: 24 },
  title: { color: "#000", fontSize: 18, fontWeight: "600", marginVertical: 8 },
  channel: { color: "#000" },
  description: { color: "#000", fontSize: 12, fontWeight: 400, marginTop: 4 },
});
