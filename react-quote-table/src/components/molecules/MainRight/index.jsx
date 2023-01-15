import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = () => {
  return (
    <MainField>
      <TextField options={[{ labelName: "見積もりNo.", fullWidth: true }]} />
      <TextField options={[{ labelName: "見積もり日", fullWidth: true  }]} />
      <TextField options={[{ labelName: "自社名", fullWidth: true  }]} />
      <TextField options={[{ labelName: "〒", fullWidth: true  }]} />
      <TextField options={[{ labelName: "住所", fullWidth: true  }]} />
      <TextField options={[{ labelName: "電話番号", fullWidth: true  }]} />
      <TextField options={[{ labelName: "FAX", fullWidth: true  }]} />
      <TextField options={[{ labelName: "E-mail", fullWidth: true  }]} />
      <TextField options={[{ labelName: "担当", fullWidth: true  }]} />
    </MainField>
  );
};

export default index;
