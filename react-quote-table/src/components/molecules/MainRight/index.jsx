import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";

const index = ({ detailInfo, setDetailInfo }) => {
  return (
    <MainField>
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "見積もりNo.",
            fullWidth: true,
            name: "no",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "見積もり日",
            fullWidth: true,
            name: "quoteDate",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "自社名",
            fullWidth: true,
            name: "ownCompany",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "〒",
            fullWidth: true,
            name: "ownPostalCode",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "住所",
            fullWidth: true,
            name: "ownAddress",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "電話番号",
            fullWidth: true,
            name: "ownPhoneNumber",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "FAX",
            fullWidth: true,
            name: "ownFax",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "E-mail",
            fullWidth: true,
            name: "ownEmail",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "担当",
            fullWidth: true,
            name: "ownRep",
            onChange: true,
          },
        ]}
      />
    </MainField>
  );
};

export default index;
