import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_SECRET_KEY || "";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchVideosByQuery = async (query: string) => {
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
    console.error("YT API error:", e);
    return [];
  }
};

export const fetchVideoDetails = async (videoId: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/videos`, {
      params: { part: "snippet", id: videoId, key: API_KEY },
    });
    return res.data.items[0];
  } catch (e) {
    console.error("Vid info error:", e);
    return null;
  }
};
