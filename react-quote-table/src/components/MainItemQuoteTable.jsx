import React from "react";
import MainQuateTable from "./organisms/MainQuoteTable"
import TableHead from "./organisms/TableHead";
import TableBody from "./organisms/TableBody";
import TextField from "./atoms/TextFileld";
import MainButton from "./atoms/MainButton";
import { Table } from "@mui/material";

const MainItemQuoteTable = ({
  changeTableCell,
  addTableRow,
  deleteTableRow,
  totalPrice,
  allTableRow,
}) => {
  return (
    <MainQuateTable>
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
    </MainQuateTable>
  );
};

export default MainItemQuoteTable;
