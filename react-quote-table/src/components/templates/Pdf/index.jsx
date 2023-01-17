import React from "react";
import PdfTableHeader from "../../molecules/PdfTableHeader";
import PdfTableRow from "../../molecules/PdfTableRow";

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
              <PdfTableHeader />
              {allInfo.map((value) => {
                return <PdfTableRow value={value} />;
              })}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Pdf;
