import React from "react";
import { View, Text, Image, } from "@react-pdf/renderer";
import styles from "./styles";

const index = ({ allInfo }) => {
  console.log(allInfo[2])
  return (
    <View style={styles.detailRight}>
      <View style={styles.detailNo}>
        {allInfo[0].stampImg && <Image style={styles.detailStampImg} src={ allInfo[0].stampImg } alt="判子画像" />}
        <Text style={styles.detailTextSmall}>No: {allInfo[0].no}</Text>
        <Text style={styles.detailTextSmall}>見積日: {allInfo[0].quoteDate}</Text>
      </View>
      <View style={styles.detailOwnCompanyInfo}>
        <Text style={styles.detailTextMiddle}>{allInfo[0].ownCompany}</Text>
        <Text style={styles.detailTextSmall}>&#12306;{allInfo[0].ownPostalCode}</Text>
        <Text style={styles.detailTextSmall}>{allInfo[0].ownAddress}</Text>
        <Text style={styles.detailTextSmall}>TEL: {allInfo[0].ownPhoneNumber}</Text>
        <Text style={styles.detailTextSmall}>FAX: {allInfo[0].ownFax}</Text>
        <Text style={styles.detailTextSmall}>Email: {allInfo[0].ownEmail}</Text>
      </View>
    </View>
  );
};

export default index;
