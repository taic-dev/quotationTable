import React from "react";
import PdfTableHeader from "../../molecules/PdfTableHeader";
import PdfTableRow from "../../molecules/PdfTableRow";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";


const index = ({ allInfo, totalPrice }) => {
  return (
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
  );
};

export default index;