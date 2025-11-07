export interface VideoSnippet {
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: {
    default?: { url: string };
    medium?: { url: string };
    high?: { url: string };
  };
}

export interface YouTubeSearchItem {
  id: { videoId: string };
  snippet: VideoSnippet;
}

export interface YouTubeVideoDetail {
  id: string;
  snippet: VideoSnippet;
}
