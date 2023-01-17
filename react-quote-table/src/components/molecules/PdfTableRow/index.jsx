import React from "react";
import { View, Text } from "@react-pdf/renderer";

const styles = {
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "20%",
  },
  tableColNo: {
    width: "10%",
  },
  tableCell: {
    fontSize: "12px",
    fontFamily: "Nasu-Regular",
    margin: "5px",
  },
}

const PdfTableRow = ({ value }) => {
  return (
    <View style={styles.tableRow} key={value.id}>
      <View style={styles.tableColNo}>
        <Text style={styles.tableCell}>{value.id + 1}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.content}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.unitPrice}円</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.quantity}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.price}円</Text>
      </View>
    </View>
  );
};

export default PdfTableRow;
