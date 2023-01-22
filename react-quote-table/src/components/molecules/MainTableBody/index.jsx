import React from "react";
import TextField from "../../atoms/TextFileld";
import AddButton from "../../atoms/DeleteButton";
import { TableBody, TableCell, TableRow } from "@mui/material";

const MainTableBody = ({ allTableRow, setAllTableRow }) => {
  // セルに変更が加えられたら
  const changeTableCell = (e) => {
    const { name, value } = e.target;
    const parentId = e.target.closest("tr").id;

    setAllTableRow(
      [...allTableRow],
      (allTableRow[parentId][name] = value),
      (allTableRow[parentId].price =
        allTableRow[parentId].unitPrice * allTableRow[parentId].quantity)
    );
  };

  return (
    <TableBody>
      {allTableRow.map((value,i) => {
        return (
          <TableRow key={value.uuid} id={i}>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <TextField
                options={[
                  {
                    labelName: "作業内容",
                    name: "workDetail",
                    onChange: (e) => changeTableCell(e),
                  },
                ]}
              />
            </TableCell>
            <TableCell>
              <TextField
                options={[
                  {
                    labelName: "単価",
                    defaultValue: "0",
                    type: "number",
                    name: "unitPrice",
                    onChange: (e) => changeTableCell(e),
                  },
                ]}
              />
            </TableCell>
            <TableCell>
              <TextField
                options={[
                  {
                    labelName: "数量",
                    defaultValue: "0",
                    type: "number",
                    name: "quantity",
                    onChange: (e) => changeTableCell(e),
                  },
                ]}
              />
            </TableCell>
            <TableCell>
              <TextField
                options={[
                  {
                    labelName: "金額",
                    InputProps: { readOnly: true },
                    name: "price",
                    value: value.price,
                  },
                ]}
              />
            </TableCell>
            <TableCell>
              <AddButton
                allTableRow={allTableRow}
                setAllTableRow={setAllTableRow}
              />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default MainTableBody;
