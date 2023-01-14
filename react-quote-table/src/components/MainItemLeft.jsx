import React from "react";
import TextField from "./atoms/TextFileld";
import MainField from "./molecules/MainField";

const MainItemLeft = () => {
  return (
    <MainField>
      <TextField labelName="会社名" text="御中" />
      <TextField labelName="ご担当者" text="様" />
      <TextField labelName="件名" option="fullWidth" />
      <p>下記の通り、お見積り申し上げます。</p>
      <TextField labelName="納期" />
      <TextField labelName="支払い条件" />
      <TextField labelName="有効期限" />
    </MainField>
  );
};

export default MainItemLeft;
