import React from "react";
import { Button } from "@mui/material";

const index = ({ addTableRow }) => {
  return (
    <div className="main-button">
      <Button variant="outlined" onClick={addTableRow}>
        追加
      </Button>
    </div>
  );
};

export default index;
