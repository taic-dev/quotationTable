import React from "react";
import { uuid } from "../../../utils/uuid";
import { Button } from "@mui/material";
import styles from "./index.module.css";

const index = ({ allTableRow, setAllTableRow }) => {
  const addTableRow = () => {
    setAllTableRow([
      ...allTableRow,
      {
        id: allTableRow[allTableRow.length - 1].id + 1,
        workDetail: "",
        unitPrice: 0,
        quantity: 0,
        price: 0,
        uuid: uuid(),
      },
    ]);
  };

  return (
    <div className={styles["main-button"]}>
      <Button variant="outlined" onClick={addTableRow}>
        追加
      </Button>
    </div>
  );
};

export default index;
