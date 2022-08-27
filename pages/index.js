import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner/banner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Movies</title>
        <meta name="movies" content="It's a Netflix clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        title="Clifford the Red Dog"
        subTitle="A very cute dog"
        imgUrl="/static/clifford.webp"
      />
    </div>
  );
}
