import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = ({ detailInfo, setDetailInfo }) => {

  const changeDetailInfo = (e) =>{
    const { name, value } = e.target;
    setDetailInfo({...detailInfo, [name]: value});
  }

  return (
    <MainField>
      <TextField options={[{ labelName: "会社名", text: "御中", name: "company", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "〒", fullWidth: true, name: "postalCode", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "住所", fullWidth: true, name: "address", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "ご担当者", text: "様", name: "rep", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "件名", fullWidth: true, name: "subject", onChange: (e)=>changeDetailInfo(e) }]} />
    </MainField>
  );
};

export default index;
