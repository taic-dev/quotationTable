import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = () => {
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

export default index;
