import React, { useEffect, useState } from "react";
import styles from "../styles/debounce.module.css";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    let timer;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setDebouncedText(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.debounceContainer}>
      <h1>Debounce</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className={styles.debounceInput}
      />
      <div className={styles.display}>
        <h3>{debouncedText}</h3>
      </div>
    </div>
  );
};

export default Debounce;
