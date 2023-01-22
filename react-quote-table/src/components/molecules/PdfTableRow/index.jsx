import React from "react";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles.js"

const PdfTableRow = ({ value, i }) => {
  return (
    <View style={styles.tableRow}>
      <View style={styles.tableColNo}>
        <Text style={styles.tableCell}>{i+1}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.workDetail}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.unitPrice}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.quantity}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>{value.price}</Text>
      </View>
    </View>
  );
};

export default PdfTableRow;
