import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

const index = ({ allInfo }) => {
  console.log(allInfo[2])
  return (
    <View style={styles.detailRight}>
      <View style={styles.detailMarginLeft}>
        <Text style={styles.detailTextSmall}>No:{allInfo[0].no}</Text>
        <Text style={styles.detailTextSmall}>見積日:{allInfo[0].quoteDate}</Text>
      </View>
      <View style={styles.detailOwnCompanyInfo}>
        <Text style={styles.detailTextMiddle}>{allInfo[0].ownCompany}</Text>
        <Text style={styles.detailTextSmall}>&#12306;{allInfo[0].postalCode}</Text>
        <Text style={styles.detailTextSmall}>{allInfo[0].address}</Text>
        <Text style={styles.detailTextSmall}>TELL:{allInfo[0].phoneNumber}</Text>
        <Text style={styles.detailTextSmall}>FAX:{allInfo[0].fax}</Text>
        <Text style={styles.detailTextSmall}>Email:{allInfo[0].email}</Text>
      </View>
    </View>
  );
};

export default index;
