import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button } from "@material-ui/core";
import Link from "next/link";

const SchedulePage = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Events 🗓️</h1>

      <div className={styles.event}>
        <h2 className={styles.eventDay}>Friday</h2>
        <p className={styles.eventTitle}>
          🧗‍♂️ 7:30-8:30AM<span className={styles.divider}>/</span>Yoga for
          Climbers
        </p>
        <p className={styles.eventTitle}>
          Location: Freestone Climbing Center, 1200 Shakespeare St, Missoula, MT
          59802
        </p>
        <p className={styles.eventDescription}>
          “Strength is not rigid. Strength is knowing your center and wrapping
          yourself around it.” <br />
          <br />
          This ashtanga-inspired flow will focus on the five potential movements
          of the spine (flexion, extension, rotation, lateral & axial
          extension), plus balance and core strength! We'll incorporate
          traditional yoga asanas with drills specifically geared toward
          climbers (hello, shoulders and hip flexors!). Ultimately, the focus
          will be on full-body awareness, mobility, and balancing strength with
          mental fortitude.
          <div className={styles.eventPrice}>
            {" "}
            Free for Freestone Climbing members. Drop-in rates available.
          </div>
        </p>
        <div>
          <Link href="https://freestoneclimbing.com/calendar/">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClick()}
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
      </div>
    </div>
  );
};

export default SchedulePage;
