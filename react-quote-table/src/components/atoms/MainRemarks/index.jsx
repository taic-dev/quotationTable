import React from "react";
import { TextareaAutosize } from "@mui/material";
import styles from "./index.module.css";

const index = ({ setRemarks }) => {
  const changeRemarks = (e) => setRemarks(e.target.value);

  return (
    <TextareaAutosize
      className={styles.TextareaAutosize}
      placeholder="備考欄"
      onChange={(e) => changeRemarks(e)}
    />
  );
};

export default index;
