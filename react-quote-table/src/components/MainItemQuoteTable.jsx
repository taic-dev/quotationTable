import { Button, Table } from "@mui/material";

import TextField from "./atoms/TextFileld";
import TableHead from "./organisms/TableHead";
import TableBody from "./organisms/TableBody";
import React from "react";

const MainItemQuoteTable = ({
  changeTableCell,
  addTableRow,
  deleteTableRow,
  totalPrice,
  allTableRow,
}) => {
  return (
    <div className="main-quote-table">
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
      <div className="main-button">
        <Button variant="outlined" onClick={addTableRow}>
          追加
        </Button>
      </div>
    </div>
  );
};

export default MainItemQuoteTable;
