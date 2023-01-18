import React from "react";
import TextField from "../../atoms/TextFileld";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { TableBody, TableCell, TableRow } from "@mui/material";

const index = ({ allTableRow, changeTableCell, deleteTableRow }) => {
  return (
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
                    onChange: () => changeTableCell(),
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
                    onChange: () => changeTableCell(),
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
                    onChange: () => changeTableCell(),
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
              <DoNotDisturbOnIcon onClick={deleteTableRow}></DoNotDisturbOnIcon>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default index;
