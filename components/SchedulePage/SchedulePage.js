import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button, Typography, Box } from "@material-ui/core";
import aiYoga1 from "../../public/aiyoga1.png";
import aiYoga2 from "../../public/aiyoga2.png";
import aiYoga3 from "../../public/aiyoga3.png";
import headstand from "../../public/headstand_tuffit.jpeg";
import Image from "next/dist/client/image";

// const events = [
//   {
//     date: "Tuesday, May 2nd",
//     title: "Yoga for Climbers",
//     location: "Freestone Climbing Center",
//     time: "7-8:30PM",
//     description: `This Ashtanga-inspired flow focuses on full-body mobility with special
//     attention paid to the spine. We'll stretch and strengthen major muscle groups, with the understanding that strength is not rigid; strength
//     is knowing your center and wrapping yourself around it. The sequence
//     incorporates traditional yoga asanas along with drills specifically geared
//     toward climbers (hello, shoulders and hip flexors!).`,
//     url: "https://freestoneclimbing.com/calendar/",
//     img: aiYoga3,
//   },
//   {
//     date: "Thursday, May 4th",
//     title: "All Around Yoga",
//     location: "Inner Harmony Yoga",
//     time: "Noon-1:00PM",
//     description:
//       "A laid-back flow suitable for all levels. We'll move through a series of postures designed to loosen, strengthen, and find balance in the body.",
//     url: "http://yogainmissoula.com/Schedule/Schedule.html",
//     img: aiYoga1,
//   },
//   {
//     date: "Wednesday, May 10th",
//     title: "Yoga for Climbers",
//     location: "Freestone Climbing Center",
//     time: "7-8:30PM",
//     description: `This Ashtanga-inspired flow focuses on full-body mobility with special
//     attention paid to the spine. We'll stretch and strengthen major muscle groups, with the understanding that strength is not rigid; strength
//     is knowing your center and wrapping yourself around it. The sequence
//     incorporates traditional yoga asanas along with drills specifically geared
//     toward climbers (hello, shoulders and hip flexors!).`,
//     url: "https://freestoneclimbing.com/calendar/",
//     img: aiYoga2,
//   },
// ];

const EventTile = ({ imgSrc, title, link }) => {
  return (
    <Box
      sx={{
        height: "200px",
        width: "365px",
        minWidth: "200px",
        boxShadow: "0px 4px 4px rgb(0 0 0 / 8%)",
        borderRadius: "10px",
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "pointer",
        mb: { xs: 4, sm: 4, md: 2, lg: 0 },
      }}
    >
      <a href={link}>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            p: 1,
            color: "black",
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Typography sx={{ textAlign: "center" }}>{title}</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "10px",
            backgroundColor: "rgba(1, 160, 182, .5)",
            boxShadow: "0px 4px 4px rgb(0 0 0 / 8%)",
          }}
        />
      </a>
    </Box>
  );
};

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
        {title} @ {location} <span className={styles.divider}>|</span>
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
      <h1 className={styles.title}>Upcoming Classes</h1>
      <Event
        day="Tuesday, May 2nd"
        title="Yoga for Climbers"
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
      <Event
        day="Thursday, May 4th"
        title="All Around Yoga"
        location="Inner Harmony Yoga"
        description="A laid-back flow suitable for all levels. We'll move through a series of postures designed to loosen, strengthen, and find balance in the body."
        price="$14 drop-in. Memberships available."
        url="http://yogainmissoula.com/Schedule/Schedule.html"
        time="Noon-1:00PM"
      />
      <Event
        day="Wednesday, May 10th"
        title="Yoga for Climbers"
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
        style={{ paddingTop: "20px", paddingBottom: "25px" }}
      >
        Summer offerings I'm excited to unveil: SUP yoga on Flathead Lake,
        August 2023, and an inversion series! Stay tuned.
      </Typography>
      <Box style={{ borderRadius: "15px !important", marginTop: "10px" }}>
        <Image src={headstand} width="572" height="400" />
      </Box>
    </div>
  );
};

export default SchedulePage;
