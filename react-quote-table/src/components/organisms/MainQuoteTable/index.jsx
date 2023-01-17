import React from "react";
import TableHead from "../PdfTableHead";
import TableBody from "../PdfTableBody";
import TextField from "../../atoms/TextFileld";
import MainButton from "../../atoms/MainButton";
import { Table } from "@mui/material";
import styles from "./index.module.css";

const MainItemQuoteTable = ({
  changeTableCell,
  addTableRow,
  deleteTableRow,
  totalPrice,
  allTableRow,
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
        <TableHead />
        <TableBody
          allTableRow={allTableRow}
          changeTableCell={changeTableCell}
          deleteTableRow={deleteTableRow}
        />
      </Table>
      <MainButton addTableRow={addTableRow} />
    </div>
  );
};

export default MainItemQuoteTable;
