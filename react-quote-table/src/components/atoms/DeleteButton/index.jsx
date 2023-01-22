import React from "react";
import BlockIcon from '@mui/icons-material/Block';
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";

const index = ({ allTableRow, setAllTableRow }) => {
  // 行の削除
  const deleteTableRow = (e) => {
    const parentId = e.target.closest("tr").id;
    setAllTableRow(allTableRow.filter((row,i) => i != parentId));
  };

  return allTableRow.length !== 1 ? <DoNotDisturbOnIcon onClick={(e) => deleteTableRow(e)} /> : <BlockIcon /> ;
};

export default index;
