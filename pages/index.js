import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import Card from "../components/card/card";

export default function Home() {
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

      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  );
}
