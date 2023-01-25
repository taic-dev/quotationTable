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
      <TextField options={[{ labelName: "見積もりNo.", fullWidth: true, name: "no" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "見積もり日", fullWidth: true , name: "quoteDate" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "自社名", fullWidth: true , name: "ownCompany" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "〒", fullWidth: true , name: "ownPostalCode" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "住所", fullWidth: true , name: "ownAddress" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "電話番号", fullWidth: true , name: "ownPhoneNumber" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "FAX", fullWidth: true , name: "ownFax" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "E-mail", fullWidth: true , name: "ownEmail" , onChange: (e)=>changeDetailInfo(e) }]} />
      <TextField options={[{ labelName: "担当", fullWidth: true , name: "ownRep" , onChange: (e)=>changeDetailInfo(e) }]} />
    </MainField>
  );
};

export default index;