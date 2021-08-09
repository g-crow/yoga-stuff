import styles from "./AboutPage.module.css";
import Image from "next/image";
import profilePic from "../../public/profile_crop.jpg";
import headstand from "../../public/headstand_tuffit.jpeg";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={profilePic}
          height={125}
          width={125}
          className={styles.img}
        />
      </div>
      <div className={styles.main}>
        <h1 className={styles.title}> Hey, I’m Genevieve 👋</h1>
        <div className={styles.content}>
          I'm a yoga instructor based in Missoula, Montana. I’ve been practicing
          yoga for a little over a decade. I completed a 200-hr training with
          <a href="https://sistermoonwellness.com/" target="_blank">
            <span className={styles.link}> Sistermoon Wellness</span>
          </a>{" "}
          in 2021.
        </div>

        <div className={styles.content}>
          I’m also a software engineer, writer, doodler, bullet journaler, and
          advocate for food system reform. My practice has been informed by many
          teachers of various trades, circus arts, the eightfold path described
          in Patañjali's <i>Yoga Sūtras</i>, the Ashtanga method of K. Pattabhi
          Jois, and a growing personal understanding of and resistance to the
          “attention economy.”
        </div>

        <div className={styles.content}>
          {" "}
          The fox represents playfulness, patience, and the centrality of
          interpersonal connection. In <i>The Little Prince</i>, the fox is an
          advocate for the sort of relationship that blossoms slowly, through
          honed attention and consistent effort. My yoga practice is rooted in
          these same qualities. We practice on our mats in large part to step
          off of them gracefully, and with the ability to be of service.
        </div>
        <div className={styles.content}>
          Feel free to connect at{" "}
          <a href="mailto: genevieve@hey.com.">
            <span className={styles.link}>genevieve@hey.com</span>
          </a>{" "}
          💫
        </div>
      </div>
      <Image
        src={headstand}
        className={styles.imgSecondary}
        height={983}
        width={1404}
      />
    </div>
  );
};

export default AboutPage;
