import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_SECRET_KEY || "";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const mockVideos = [
  {
    id: { videoId: "abc123" },
    snippet: {
      title: "1",
      description: "123",
      channelTitle: "Kanal 1",
      publishedAt: "2022-08-12",
      thumbnails: {
        medium: { url: "https://via.placeholder.com/320x180" },
      },
    },
  },
  {
    id: { videoId: "def456" },
    snippet: {
      title: "2",
      description: "221",
      channelTitle: "Kanal 2",
      publishedAt: "2022-07-10T12",
      thumbnails: {
        medium: { url: "https://via.placeholder.com/320x180" },
      },
    },
  },
];

export const fetchVideosByQuery = async (query: string) => {
  if (!API_KEY) {
    console.warn("YT API key not set");
    return mockVideos;
  }

  try {
    const res = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 4,
        key: API_KEY,
      },
    });
    return res.data.items;
  } catch (e) {
    console.error("YT API error, returning mock data:", e);
    return mockVideos; // fallback na mock
  }
};

export const fetchVideoDetails = async (videoId: string) => {
  if (!API_KEY) {
    console.warn("YT API key not set, using mock video details");
    return mockVideos[0];
  }

  try {
    const res = await axios.get(`${BASE_URL}/videos`, {
      params: { part: "snippet", id: videoId, key: API_KEY },
    });
    return res.data.items[0];
  } catch (e) {
    console.error("Vid info error, returning mock video:", e);
    return mockVideos[0];
  }
};
