import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button } from "@material-ui/core";

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
      <Event
        day="Tuesday"
        title="Vinyasa Flow"
        location="Freestone Climbing Center"
        description="This Ashtanga-inspired flow focuses on full-body mobility with special
        attention paid to the spine. We'll stretch and strengthen major muscle groups, with the understanding that strength is not rigid; strength
        is knowing your center and wrapping yourself around it. The sequence
        incorporates traditional yoga asanas along with drills specifically geared
        toward climbers (hello, shoulders and hip flexors!)."
        price="$19 drop-in. Memberships available."
        url="https://freestoneclimbing.com/calendar/"
        time="5-6PM"
      />
    </div>
  );
};

export default SchedulePage;
