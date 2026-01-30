import { useState } from "react";
import { items } from "../constants/accordian";
import styles from "../styles/accordian.module.css";

const Accordian = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleAccordianClick = (id: number) => {
    if (id === active) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className={styles.accordianContainer}>
      {items.map((ele, index) => {
        return (
          <div className={styles.accordian}>
            <div
              className={styles.accordianHeader}
              onClick={() => handleAccordianClick(index)}
            >
              <h3>{ele.title}</h3>
              <span>{active === index ? "^" : "V"}</span>
            </div>
            {active === index ? (
              <div className={styles.accordianBody}>
                <p>{ele.content}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
