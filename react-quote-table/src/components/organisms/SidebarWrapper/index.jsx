import React from 'react';
import styles from "./index.module.css";

const index = ({ children }) => {
  return (
    <div className={styles["sidebar-wrapper"]}>
      {children}
    </div>
  )
}

export default index
