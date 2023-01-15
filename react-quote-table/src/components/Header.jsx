import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Toolbar, Typography, Button, Box, AppBar } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import React, { useState } from "react";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
  );
};

export default Header;
