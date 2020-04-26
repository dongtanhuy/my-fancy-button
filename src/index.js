import React from "react";
import styles from "./styles.module.css";

export const MyFancyButton = ({
  text,
  type = "default",
  disabled,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[type]} `}
    >
      {text}
    </button>
  );
};
