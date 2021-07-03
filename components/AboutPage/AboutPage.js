import styles from "./AboutPage.module.css";
import Image from "next/image";
import profilePic from "../../public/profile_crop.jpg";

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
      <h1 className={styles.title}> Hey, I’m Genevieve 👋</h1>
      <div className={styles.content}>
        I'm a 200-hr certifid yoga instructor. I trained with{" "}
        <a href="https://sistermoonwellness.com/" target="_blank">
          <span className={styles.link}>Sistermoon Wellness</span>
        </a>{" "}
        in 2021.
      </div>

      <div className={styles.content}>
        I’m also a software engineer, writer, doodler, bullet journaler, and
        advocate for food system reform. I’ve been practicing yoga for a little
        over a decade. My practice has been informed by many teachers, circus
        arts, chaos, the eightfold path described in Patañjali's{" "}
        <i>Yoga Sūtras</i>, the Ashtanga method of K. Pattabhi Jois, a growing
        personal understanding of and resistance to the “attention economy,” and
        the fox character in <i>The Little Prince</i>.
      </div>

      <div className={styles.content}>
        {" "}
        The fox represents playfulness, patience, and the centrality of
        interpersonal connection.
      </div>

      <div className={styles.content}>
        My yoga practice is rooted in those same qualities. Yoga is so much
        about playing with our own bodies in space, curiosity, sensuousness,
        silliness, discovery. Yoga is also about persistence, consistency, and
        staying stable through discomfort. The interoception yoga
        hones—awareness of the body from inside of it—is vital not only as it
        helps us relate to ourselves and our physical bodies, but as it helps us
        relate to the outside world. Self-compassion and compassion for others
        cannot be separated. We practice on our mats in large part to step off
        of them gracefully, and with the ability to be of service.
      </div>
      <div className={styles.content}>
        Feel free to connect at{" "}
        <a href="mailto: genevieve@hey.com.">
          <span className={styles.link}>genevieve@hey.com</span>
        </a>{" "}
        💫
      </div>
    </div>
  );
};

export default AboutPage;
