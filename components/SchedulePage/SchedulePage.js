import React, { useState } from "react";
import styles from "./SchedulePage.module.css";
import { Button } from "@material-ui/core";
import Link from "next/link";

const SchedulePage = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Classes 🗓️</h1>

      <div className={styles.event}>
        <h2 className={styles.eventDay}>Friday</h2>
        <p className={styles.eventTitle}>
          🧗‍♂️ 7:30-8:30AM<span className={styles.divider}>/</span>Vinyasa + Hatha Flow
        </p>
        <p className={styles.eventTitle}>
          Location: Freestone Climbing Center, 1200 Shakespeare St, Missoula, MT
          59802
        </p>
        <p className={styles.eventDescription}>
          “Strength is not rigid. Strength is knowing your center and wrapping
          yourself around it.” <br />
          <br />
          This ashtanga-inspired flow will focus on full-body mobility with special attention paid to the spine, plus balance and core strength. We'll incorporate
          traditional yoga asanas with drills specifically geared toward
          climbers (hello, shoulders and hip flexors!).
          <div className={styles.eventPrice}>
            {" "}
            Free for Freestone Climbing members. Drop-in rates available.
          </div>
        </p>
        <div>
          <a href="https://freestoneclimbing.com/calendar/" target="_blank">
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
