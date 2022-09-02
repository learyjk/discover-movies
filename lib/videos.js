import videoData from "../data/videos.json";

export const getVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=disney%20trailer&key=${YOUTUBE_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data?.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
};
