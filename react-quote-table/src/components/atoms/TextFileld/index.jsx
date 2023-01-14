import React from "react";
import { TextField } from "@mui/material";
import styles from "./index.module.css";

const index = ({ labelName, text, option }) => {
  return (
    <div className={styles['main-textarea']}>
      <TextField 
        id="outlined-required"
        variant="standard" 
        label={labelName}
        />
      {text && <span>{ text }</span>}
    </div>
  );
};

export default index;
