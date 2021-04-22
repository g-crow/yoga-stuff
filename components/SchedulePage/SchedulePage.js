import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button } from "@material-ui/core";
import Link from "next/link";

const SchedulePage = () => {
  const [registerMonday, setRegisterMonday] = useState(false);
  const [registerSunday, setRegisterSunday] = useState(false);
  const handleClickMonday = () => {
    console.log("clicked Monday");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upcoming Events 🗓️</h1>

      <div className={styles.event}>
        <h2 className={styles.eventDay}>Sunday, May 16th</h2>
        <p className={styles.eventTitle}>
          ✅ 11AM-12PM MDT<span className={styles.divider}>/</span>
          Zoom Yoga for Deciding to Fail Better
        </p>
        <p className={styles.eventDescription}>
          <a
            href="https://www.meetup.com/Deciding-To-Fail-Better/"
            target="_blank"
          >
            <span style={{ color: "#58a6ff", cursor: "pointer" }}>
              Deciding to Fail Better
            </span>
          </a>{" "}
          is Missoula's warm and welcoming community self-exploration group.
          This online class will be geared toward wellness interests
          expressed by its participants. The class will emphasize mindful
          breathing, full-body awareness, and postures to develop strength,
          mobility, and balance. All levels of ability and experience with yoga
          are welcome.
          <div className={styles.eventPrice}>Free</div>
        </p>
        <div className={styles.right}>
          <a
            href="https://www.meetup.com/Deciding-To-Fail-Better/events/277720426/"
            target="_blank"
          >
            <Button
              variant="outlined"
              color="primary"
              style={{
                color: "#f0f6fc",
                backgroundColor: "#383838",
                borderRadius: "20px",
                textTransform: "capitalize",
              }}
            >
              Register Here
            </Button>
          </a>
        </div>
      </div>

      {/* <div className={styles.event}>
        <h2 className={styles.eventDay}>Monday</h2>
        <p className={styles.eventTitle}>
          🧠 7-7:45PM MST<span className={styles.divider}>/</span>Yoga for
          Exploring the Nervous System
        </p>
        <p className={styles.eventDescription}>
          Inspired by Kendra Potter of{" "}
          <a href="https://sistermoonwellness.com/" target="_blank">
            <span className={styles.link}>Sistermoon Wellness</span>
          </a>{" "}
          (her wonderful class, "Yoga for Downregulating the Nervous System", is
          on Wednesday evenings). This practice is intended to tap into the
          benefits of the parasympathetic nervous system, our chill place. It’s
          about feeling intrinsically safe and turning off the activated
          “fight-or-flight” response. You’ll be invited to tune into the breath
          and become curious about the body.
          <div className={styles.eventPrice}>
            {" "}
            $10 suggested donation, all proceeds will be donated to the Trauma
            Research Foundation.
          </div>
        </p>
        <p className={styles.eventLocation}>
          Online event, register for details
        </p>
        <div className={styles.right}>
          <Link href="/register">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickMonday}
              style={{
                color: "#f0f6fc",
                backgroundColor: "#383838",
                borderRadius: "20px",
              }}
            >
              Register here
            </Button>
          </Link>
        </div>
      </div> */}

      {/* <div className={styles.event}>
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
          <div className={styles.eventPrice}>
            {" "}
            Free for Missoula residents. Thanks for helping me learn how to
            teach.
          </div>
        </p>
        <p className={styles.eventLocation}>
          Capacity limited, register for details
        </p>
        <div className={styles.right}>
          <Link href="/register">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickSunday}
              style={{
                color: "#f0f6fc",
                backgroundColor: "#383838",
                borderRadius: "20px",
              }}
            >
              Register here
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SchedulePage;
