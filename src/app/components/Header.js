import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from '@/app/components/Nav'
const Header = () => {
  return (
    <div>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image src="/next.svg" alt="" width={80} height={20} />
          </Link>
        </div>

        <Nav />
      </header>
    </div>
  );
};

export default Header;
