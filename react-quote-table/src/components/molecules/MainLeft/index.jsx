import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = () => {
  return (
    <MainField>
      <TextField options={[{ labelName: "会社名", text: "御中" }]} />
      <TextField options={[{ labelName: "ご担当者", text: "様" }]} />
      <TextField options={[{ labelName: "件名", fullWidth: true  }]} />
      <p>下記の通り、お見積り申し上げます。</p>
      <TextField options={[{ labelName: "納期", fullWidth: true  }]} />
      <TextField options={[{ labelName: "支払い条件", fullWidth: true  }]} />
      <TextField options={[{ labelName: "有効期限", fullWidth: true  }]} />
    </MainField>
  );
};

export default index;
