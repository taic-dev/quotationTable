import React from "react";
import TextField from "./atoms/TextFileld";
import MainField from "./molecules/MainField";

const MainItemRight = () => {
  return (
    <MainField>
      <TextField labelName="見積もりNo." />
      <TextField labelName="見積もり日" />
      <TextField labelName="自社名" />
      <TextField labelName="〒" />
      <TextField labelName="住所" />
      <TextField labelName="電話番号" />
      <TextField labelName="FAX" />
      <TextField labelName="E-mail" />
      <TextField labelName="担当" />
    </MainField>
  );
};

export default MainItemRight;
