import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@/navigation/AppNavigator";
import { GlobalFont } from "@/theme/theme";

type NavProp = NativeStackNavigationProp<RootStackParamList, "VideoDetail">;

export default function VideoCard({
  video,
}: {
  video: { id: string; title: string; data: string; thumbnail: string };
}) {
  const nav = useNavigation<NavProp>();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => nav.navigate("VideoDetail", { videoId: video.id })}
    >
      <Image source={{ uri: video.thumbnail }} style={styles.thumb} />
      <Text numberOfLines={2} style={[GlobalFont.CustomFont, styles.title]}>
        {video.title}
      </Text>
      <Text numberOfLines={2} style={[styles.secTitle, GlobalFont.CustomFont]}>
        {formatPublishedDate(video.data)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 180, marginRight: 24 },
  thumb: { height: 120, width: "100%", borderRadius: 8 },
  title: { marginTop: 8, fontWeight: "500", fontSize: 12 },
  secTitle: {
    marginTop: 8,
    fontWeight: "400",
    fontSize: 10,
    textAlign: "right",
  },
});

export const formatPublishedDate = (isoString: string): string => {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
