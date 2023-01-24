import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Box, AppBar } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const index = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1, height: "56px" }}>
            <Link to="/" style={{ color: "#fff" }}>
              <img style={{ width: "95px" }} src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="ロゴ画像"  />
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
