import React from "react";
import PdfDetailInfoLeft from "../../molecules/PdfDetailInfoLeft";
import PdfDetailInfoRight from "../../molecules/PdfDetailInfoRight";
import PdfTableHead from "../../molecules/PdfTableHead";
import PdfTableRow from "../../molecules/PdfTableRow";
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

const index = ({ allInfo }) => {

  if(allInfo.length === 0) return <p>loading...</p>

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>お見積書</Text>
      <View style={styles.detail}>
        <PdfDetailInfoLeft allInfo={allInfo} />
        <PdfDetailInfoRight allInfo={allInfo} />
      </View>
      <View>
        <PdfTableHead />
        {allInfo[1].map((value, i) => {
          return <PdfTableRow value={value} i={i} key={value.uuid} />;
        })}
      </View>
    </View>
  );
};

export default index;
