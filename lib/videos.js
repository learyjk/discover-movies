import videoData from "../data/videos.json";

export const getVideos = async (searchQuery) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = `https://youtube.googleapis.com/youtube/v3`;

    let url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${YOUTUBE_API_KEY}`;

    if (searchQuery) {
      url = `${BASE_URL}/search?part=snippet&maxResults=25&type=video&q=${searchQuery}&key=${YOUTUBE_API_KEY}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data?.error) {
      return [];
    }

    return data?.items.map((item) => {
      const id = item?.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id: id,
      };
    });
  } catch (e) {
    console.error(`Something went wrong getting videos: ${e}`);
    return [];
  }
};
