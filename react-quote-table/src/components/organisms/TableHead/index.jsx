import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>No.</TableCell>
        <TableCell>作業内容</TableCell>
        <TableCell>単価</TableCell>
        <TableCell>数量</TableCell>
        <TableCell>金額</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default index;
