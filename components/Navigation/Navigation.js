import styles from "./Navigation.module.css";
import foxBlue from "../../public/fox_blue.svg";
import Link from "next/link";
import Image from 'next/image'

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <Link href="/">
        <div className={styles.siteTitle}>
          <Image src={foxBlue} height={20} width={20} className={styles.logo} />
          <h1 className={styles.title}>yoga with genevieve</h1>
        </div>
      </Link>
      <div className={styles.links}>
        <code className={styles.code}>
          <Link href="/about">
            <span className={styles.link}>about</span>
          </Link>{" "}
          /{" "}
          <Link className={styles.link} href="/schedule">
            <span className={styles.link}>schedule</span>
          </Link>
        </code>
      </div>
    </div>
  );
};

export default Navigation;
