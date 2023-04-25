import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button, Typography } from "@material-ui/core";

const Event = ({
  day,
  emoji,
  description,
  time,
  title,
  location,
  price,
  url,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.event}>
      <h2 className={styles.eventDay}>{day}</h2>
      <p className={styles.eventTitle}>
        {emoji} {time}
        <span className={styles.divider}>|</span>
        {title} @ {location} |{" "}
        <span
          onClick={() => handleClick()}
          style={{
            cursor: "pointer",
            display: "inline-block",
            color: "#58a6ff",
          }}
        >
          {showDetails ? "hide" : "show"} class description
        </span>
      </p>
      {showDetails && (
        <>
          <p className={styles.eventDescription}>
            {description}
            <div className={styles.eventPrice}>{price}</div>
          </p>
          <div>
            <a href={url} target="_blank">
              <Button
                variant="outlined"
                color="primary"
                style={{
                  color: "#f0f6fc",
                  backgroundColor: "#383838",
                  borderRadius: "20px",
                }}
              >
                Register here
              </Button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

const SchedulePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Classes</h1>
      <Typography
        variant="h6"
        className={styles.subtitle}
        style={{ paddingBottom: "10px" }}
      >
        I'm taking a break from a regular teaching schedule these days. You
        can still find me subbing in a few Missoula studios, dates listed below:
      </Typography>
      <Event
        day="Thursday, May 4th"
        title="Yoga"
        location="Inner Harmony Yoga"
        description="An all-around, balanced flow suitable for all levels. We'll move through a series of postures designed to loosen, strengthen, and balance the body; just the right intensity for a mid-day, mid-week pick-me-up."
        price="$14 drop-in. Memberships available."
        url="http://yogainmissoula.com/Schedule/Schedule.html"
        time="Noon-1:00PM"
      />
      <Event
        day="Wednesday, May 10th"
        title="Vinyasa Flow"
        location="Freestone Climbing Center"
        description="This Ashtanga-inspired flow focuses on full-body mobility with special
        attention paid to the spine. We'll stretch and strengthen major muscle groups, with the understanding that strength is not rigid; strength
        is knowing your center and wrapping yourself around it. The sequence
        incorporates traditional yoga asanas along with drills specifically geared
        toward climbers (hello, shoulders and hip flexors!)."
        price="$19 drop-in. Memberships available."
        url="https://freestoneclimbing.com/calendar/"
        time="7-8:30PM"
      />
      <Typography
        variant="h6"
        className={styles.subtitle}
        style={{ paddingTop: "20px" }}
      >
        Offerings in the works I'm excited to unveil soon: SUP yoga experiences
        on Flathead Lake, August 2023; a three-week inversion intensive at several
        Missoula studios, sometime this fall - stay tuned for details!
      </Typography>
    </div>
  );
};

export default SchedulePage;
