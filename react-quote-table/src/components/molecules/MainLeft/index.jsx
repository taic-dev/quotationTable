import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = ({ detailInfo, setDetailInfo }) => {

  const changeDetailInfo = (e) =>{
    const { name, value } = e.target;
    setDetailInfo({...detailInfo, [name]: value});
  }

  console.log(detailInfo);
  return (
    <MainField>
      <TextField options={[{ labelName: "会社名", text: "御中", name: "company", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "ご担当者", text: "様", name: "rep", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "件名", fullWidth: true, name: "subject", onChange: (e)=>changeDetailInfo(e) }]} />
      <p>下記の通り、お見積り申し上げます。</p>
      <TextField options={[{ labelName: "納期", fullWidth: true, name: "dueDate", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "支払い条件", fullWidth: true, name: "paymentCriteria", onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "有効期限", fullWidth: true, name: "expirationDate", onChange: (e)=>changeDetailInfo(e) }]} />
    </MainField>
  );
};

export default index;
