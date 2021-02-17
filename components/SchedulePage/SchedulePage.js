import styles from "./SchedulePage.module.css";

const SchedulePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Live Classes 📅</h1>

      <div className={styles.event}>
        <h2 className={styles.eventDay}>Monday</h2>
        <p className={styles.eventTitle}>
          🧠 7-7:30PM MST<span className={styles.divider}>/</span>Yoga for
          Downregulating the Nervous System
        </p>
        <p className={styles.eventDescription}>
          Inspired by Kendra Potter of{" "}
          <a href="https://sistermoonwellness.com/" rel="noopener">
            <span className={styles.link}>Sistermoon Wellness</span>
          </a>{" "}
          (her wonderful class of the same name is on Wednesday evenings). This
          practice is intended to tap into the benefits of the parasympathetic
          nervous system, our chill place. It’s about feeling intrinsically safe
          and turning off the activated “fight-or-flight” response. You’ll be
          invited to tune into the breath and become curious about the body.
          <div className={styles.eventPrice}>
            {" "}
            $10 suggested donation, all proceeds will be donated to the Trauma
            Research Foundation.
          </div>
        </p>
        <p className={styles.eventLocation}>
          Online event, Vimeo livestream link TBD
        </p>
      </div>

      <div className={styles.event}>
        <h2 className={styles.eventDay}>Sunday</h2>
        <p className={styles.eventTitle}>
          🌵 10-11AM MST<span className={styles.divider}>/</span>Yoga for
          Exploring the Spine
        </p>
        <p className={styles.eventDescription}>
          An ashtanga-inspired flow focusing on the five potential movements of
          the spine (flexion, extension, rotation, lateral & axial extension).
          Expect to explore range of motion in balances and backbends. This
          class is designed to build stability and muscle tone with this
          understanding: “Strength is not rigid. Strength is knowing your center
          and wrapping yourself around it.”
          <div className={styles.eventPrice}> Free for Missoula residents.</div>
        </p>
        <p className={styles.eventLocation}>
          Inquire for location to{" "}
          <a href="mailto: genevieve@hey.com.">
            <span className={styles.link}>genevieve@hey.com</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SchedulePage;
