import React from "react";

import PdfTableRow from "./molecules/PdfTableRow";

import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Nasu-Regular",
  src: "./fonts/Nasu-Regular.ttf",
});

Font.register({
  family: "Nasu-Bold",
  src: "./fonts/Nasu-Bold.ttf",
});

const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  wrapper: {
    margin: "50px",
  },
  title: {
    fontFamily: "Nasu-Bold",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "50px",
  },
  totalPrice: {
    fontFamily: "Nasu-Bold",
    borderBottom: "1px",
    marginBottom: "50px",
  },
  table: {
    width: "auto",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottom: "1px",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderCol: {
    width: "20%",
  },
  tableHeaderColNo: {
    width: "10%",
  },
  tableHeaderCell: {
    fontSize: "13px",
    fontFamily: "Nasu-Bold",
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
});

const Pdf = ({ allInfo, totalPrice }) => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4">
          <View style={styles.wrapper}>
            <Text style={styles.title}>お見積書</Text>
            <Text style={styles.totalPrice}>合計金額：{totalPrice}円</Text>
            <View style={styles.table}>
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
              {allInfo.map((value) => {
                return (
                  <PdfTableRow value={value} />
                );
              })}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
