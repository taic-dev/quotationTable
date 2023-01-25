import React from "react";
import { Text, View } from "@react-pdf/renderer";

const index = ({ allInfo }) => {

  return (
    <>
      <Text>【備考欄】</Text>
      {allInfo[3].split("\n").map((v, i) => (
        <View key={i} style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {Array.from(v).map((char) => <Text>{char}</Text>)}
        </View>
      ))}
    </>
  );
};

export default index;
