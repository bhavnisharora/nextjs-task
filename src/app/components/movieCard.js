import Styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (elem) => {
  const { id, type, title, synopsis } = elem.jawSummary;
  return (
    <div className={Styles.card}>
      <div className={Styles.card_image}>
        <img
          src={elem.jawSummary.backgroundImage.url}
          alt={title}
          width={260}
          height={200}
        />
      </div>
      <div className={Styles.card_data}>
        <h2>{title.substring(0, 18)}</h2>
        <p>{`${synopsis.substring(0, 66)}...`}</p>

        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
