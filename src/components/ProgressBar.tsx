import React from "react";
import styles from "../styles/progressbar.module.css";

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles.outer}>
      <div
        className={styles.inner}
        style={{
          width: `${progress}%`,
          // transform: `translateX(${progress}-100%)`,
          // transition: "all 0.4s ease-in",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
