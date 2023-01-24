import React from "react";
import { TextField } from "@mui/material";
import styles from "./index.module.css";

const Index = ({ options, detailInfo, setDetailInfo }) => {
  const handleChangeTest = () => {
    console.log("test");
  }

  const changeDetailInfo = (e) =>{
    const { name, value } = e.target;
    setDetailInfo({...detailInfo, [name]: value});
  }
  
  return (
    <div className={styles["main-textarea"]}>
      <TextField
        id="outlined-required"
        variant="standard"
        label={options[0].labelName && options[0].labelName}
        value={options[0].value && options[0].value}
        defaultValue={options[0].defaultValue && options[0].defaultValue}
        type={options[0].type && options[0].type}
        name={options[0].name && options[0].name}
        fullWidth={options[0].fullWidth && true}
        onChange={(e)=>{
          handleChangeTest();
          options[0].onChange && changeDetailInfo(e);
        }}
      />
      {options[0].text && <span>{options[0].text}</span>}
    </div>
  );
};

export default Index;
