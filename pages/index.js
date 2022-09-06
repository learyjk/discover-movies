import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

import { getPopularVideos, getVideos } from "../lib/videos";
import { startFetchMyQuery } from "../lib/db/hasura";
//import videos from "../data/videos.json";
//import disneyVideos from "../data/disneyVideos.json";

export async function getServerSideProps() {
  const disneyVideos = await getVideos(`Disney Trailers`);
  const productivityVideos = await getVideos(`Productivity`);
  const travelVideos = await getVideos(`Travel`);
  const popularVideos = await getPopularVideos();
  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  startFetchMyQuery();
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Movies</title>
        <meta name="movies" content="It's a Netflix clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner
        videoId="4zH5iYM4wJo"
        title="Clifford the Red Dog"
        subTitle="A very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Travel" videos={travelVideos} size="small" />
        <SectionCards
          title="Productivity"
          videos={productivityVideos}
          size="medium"
        />
        <SectionCards title="Popular" videos={popularVideos} size="large" />
      </div>
    </div>
  );
}
