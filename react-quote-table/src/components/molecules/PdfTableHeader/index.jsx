import React from "react";
import { View, Text } from "@react-pdf/renderer";

const styles = {
  tableHeader: {
    flexDirection: "row",
    borderBottom: "1px",
  },
  tableHeaderColNo: {
    width: "10%",
  },
  tableHeaderCol: {
    width: "20%",
  },
  tableHeaderCell: {
    fontSize: "13px",
    fontFamily: "Nasu-Bold",
  },
};

const index = () => {
  return (
    <View style={styles.tableHeader}>
      <View style={styles.tableHeaderColNo}>
        <Text style={styles.tableHeaderCell}>No.</Text>
      </View>
      <View style={styles.tableHeaderCol}>
        <Text style={styles.tableHeaderCell}>作業内容</Text>
      </View>
      <View style={styles.tableHeaderCol}>
        <Text style={styles.tableHeaderCell}>単価</Text>
      </View>
      <View style={styles.tableHeaderCol}>
        <Text style={styles.tableHeaderCell}>数量</Text>
      </View>
      <View style={styles.tableHeaderCol}>
        <Text style={styles.tableHeaderCell}>金額</Text>
      </View>
    </View>
  );
};

export default index;
