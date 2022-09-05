import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  console.log({ router });
  return <div>video page {router.query.id}</div>;
};

export default Video;
