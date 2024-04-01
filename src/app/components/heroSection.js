import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import { Mulish } from "next/font/google";
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const heroSection = ({ title, imgUrl }) => {
  return (
    <div>
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi vero dolor officia numquam porro nobis.
              </p>

              <Link href="/movie">
                <button className={mulish.className}>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <img src={imgUrl} alt="netflix" height={500} width={500} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default heroSection;
