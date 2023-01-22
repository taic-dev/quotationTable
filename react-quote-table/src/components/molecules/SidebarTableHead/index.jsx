import React from "react";
import styles from "./index.module.css";

const index = () => {
  return (
    <thead className={styles["table-head"]}>
      <tr>
        <th className={styles["table-head-no"]}>No.</th>
        <th>作業内容</th>
        <th>単価</th>
        <th className={styles["table-head-quantity"]}>数量</th>
        <th>金額</th>
      </tr>
    </thead>
  );
};

export default index;
