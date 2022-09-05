import Link from "next/link";
import Card from "./card";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          console.log(video);
          return (
            <Link key={idx} href={`/video/${video.id.videoId}`}>
              <Card
                key={idx}
                id={video.id.videoId}
                imgUrl={video.snippet.thumbnails.high.url}
                size={size}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
