import React from "react";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const demoString = "Kyle is cool";
  const truth = false;

  return (
    <div className={styles.dashboard}>
      <button>Click For Movies</button>
      <button>Click For Characters</button>
      <button onClick={() => {}}>Click for Quotes</button>
    </div>
  );
}
