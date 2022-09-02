import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

import { getVideos } from "../lib/videos";

export async function getServerSideProps() {
  const videos = getVideos();
  return { props: { videos } };
}

export default function Home({ videos }) {
  //console.log(disneyVideos);
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Movies</title>
        <meta name="movies" content="It's a Netflix clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar username="keeganleary" />
      <Banner
        title="Clifford the Red Dog"
        subTitle="A very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={videos} size="large" />
        <SectionCards title="Disney" videos={videos} size="medium" />
        <SectionCards title="Disney" videos={videos} size="small" />
      </div>
    </div>
  );
}
