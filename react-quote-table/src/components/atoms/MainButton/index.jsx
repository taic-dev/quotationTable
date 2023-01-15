import React from "react";
import { Button } from "@mui/material";
import styles from "./index.module.css"

const index = ({ addTableRow }) => {
  return (
    <div className={styles["main-button"]}>
      <Button variant="outlined" onClick={addTableRow}>
        追加
      </Button>
    </div>
  );
};

export default index;
