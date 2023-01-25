import React from "react";
import { TextareaAutosize } from "@mui/material";
import styles from "./index.module.css";

const index = ({ setRemarks }) => {
  const changeRemarks = (e) => setRemarks(e.target.value);

  return (
    <div className={styles.TextareaAutosizeWrapper}>
      <TextareaAutosize
        className={styles.TextareaAutosize}
        placeholder="備考欄"
        maxLength={150}
        onChange={(e) => changeRemarks(e)}
      />
    </div>
  );
};

export default index;
