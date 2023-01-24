import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Box, AppBar } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "#fff" }}>
              お見積書 作成システム
            </Link>
          </Typography>
          <Link to="/pdf">
            <PictureAsPdfIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default index
