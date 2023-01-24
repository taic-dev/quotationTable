import React from "react";
import MainField from "../MainField";
import TextField from "../../atoms/TextFileld";
import StampImg from "../../atoms/StampImg";

const index = ({ detailInfo, setDetailInfo }) => {
  return (
    <MainField>
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "会社名",
            text: "御中",
            name: "company",
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
            name: "postalCode",
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
            name: "address",
            onChange: true,
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          { 
            labelName: "ご担当者", 
            text: "様", 
            name: "rep", 
            onChange: true 
          },
        ]}
      />
      <TextField
        detailInfo={detailInfo}
        setDetailInfo={setDetailInfo}
        options={[
          {
            labelName: "件名",
            fullWidth: true,
            name: "subject",
            onChange: true,
          },
        ]}
      />
      <StampImg detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
    </MainField>
  );
};

export default index;
