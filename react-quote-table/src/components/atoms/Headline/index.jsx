import React from "react";
import { Typography } from "@mui/material";

const index = ({ children, color }) => {
  return (
    <Typography
      sx={{
        fontSize: "25px",
        textAlign: "center",
      }}
      style={color && { ...color }}
      component="h2"
      variant="h2"
    >
      {children}
    </Typography>
  );
};

export default index;
