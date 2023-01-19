import React from "react";
import MainTableHead from "../MainTableHead";
import MainTableBody from "../MainTableBody";
import TextField from "../../atoms/TextFileld";
import AddButton from "../../atoms/AddButton";
import { Table } from "@mui/material";
import styles from "./index.module.css";

const MainItemQuoteTable = ({
  
  totalPrice,
  allTableRow,
  setAllTableRow
}) => {
  return (
    <div className={styles["main-quote-table"]}>
      <TextField
        options={[
          {
            text: "円",
            labelName: "合計金額",
            defaultvalue: "0",
            value: totalPrice,
          },
        ]}
      />
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <MainTableHead />
        <MainTableBody allTableRow={allTableRow} setAllTableRow={setAllTableRow} />
      </Table>
      <AddButton allTableRow={allTableRow} setAllTableRow={setAllTableRow} />
    </div>
  );
};

export default MainItemQuoteTable;
