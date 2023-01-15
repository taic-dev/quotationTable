import {
  Button,
  Table,
  TableBody,
  TableCell,

  TableRow,
} from "@mui/material";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import TextField from "./atoms/TextFileld";
import TableHead from "./organisms/TableHead";
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
        <TableBody>
          {allTableRow.map((value) => {
            return (
              <TableRow key={value.id} id={value.id}>
                <TableCell>{value.id + 1}</TableCell>
                <TableCell>
                  <TextField
                    options={[
                      {
                        labelName: "作業内容",
                        name: "content",
                        onChange: ()=>changeTableCell()
                      },
                    ]}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    options={[{
                        labelName: "単価",
                        defaultValue: "0",
                        type: "number",
                        name: "unitPrice",
                        onChange: ()=>changeTableCell()
                    }]}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    options={[{
                        labelName: "数量",
                        defaultValue: "0",
                        type: "number",
                        name: "quantity",
                        onChange: ()=>changeTableCell()
                    }]}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    options={[{
                        labelName: "金額",
                        InputProps: { readOnly: true },
                        name: "price",
                        value: value.price
                    }]}
                  />
                </TableCell>
                <TableCell>
                  <DoNotDisturbOnIcon
                    onClick={deleteTableRow}
                  ></DoNotDisturbOnIcon>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
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
