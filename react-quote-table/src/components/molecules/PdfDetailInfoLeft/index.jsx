import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

const index = ({ allInfo }) => {
  return (
    <View style={styles.detailLeft}>
      <View style={styles.detailCompany}>
        <Text style={styles.detailCompanyText}>
          {allInfo[0].company}
        </Text>
        <Text style={styles.detailTextSmall}>御中</Text>
      </View>
      <View style={styles.detailMarginTop}>
        <Text style={styles.detailTextSmall}>〒{allInfo[0].postalCode}</Text>
        <Text style={styles.detailTextSmall}>{allInfo[0].address}</Text>
      </View>
      <View style={styles.detailMarginTop}>
        <Text style={styles.detailTextSmall}>{allInfo[0].rep}様</Text>
      </View>
      <View style={styles.detailMarginTop}>
        <Text style={styles.detailCompanyText}>{allInfo[0].subject}</Text>
      </View>
      <View style={styles.detailQuote}>
        <Text style={styles.detailTextSmall}>下記の通りお見積りを申し上げます。</Text>
        <View style={styles.detailTotalPrice}>
          <Text style={styles.detailTotalPriceText}>見積もり金額</Text>
          <Text style={styles.detailMarginTop}>¥{allInfo[2].totalPrice}-</Text>
        </View>
      </View>
    </View>
  );
};

export default index;
