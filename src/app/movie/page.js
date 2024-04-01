import Link from "next/link";
import MovieCard from "../components/movieCard";
import styles from "@/app/styles/common.module.css";
const page = async () => {
  const url = process.env.RAPID_KEY;
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles;
  console.log(data);
  return (
    <section>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {mainData.map((elem) => (
            <MovieCard key={elem.id} {...elem} />
          ))}
        </div>
        <Link href="/movie/assdsd">Go to</Link>
      </div>
    </section>
  );
};

export default page;
