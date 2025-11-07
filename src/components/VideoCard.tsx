import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/AppNavigator";

type NavProp = NativeStackNavigationProp<RootStackParamList, "VideoDetail">;

export default function VideoCard({
  video,
}: {
  video: { id: string; title: string; thumbnail: string };
}) {
  const nav = useNavigation<NavProp>();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => nav.navigate("VideoDetail", { videoId: video.id })}
    >
      <Image source={{ uri: video.thumbnail }} style={styles.thumb} />
      <Text numberOfLines={2} style={styles.title}>
        {video.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 200, marginRight: 12 },
  thumb: { height: 120, width: "100%", borderRadius: 8 },
  title: { marginTop: 8, fontWeight: "600" },
});
