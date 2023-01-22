import React from "react";
import { Text, View } from "@react-pdf/renderer";

const index = ({ allInfo }) => {
  return (
    <>
      <Text>【備考欄】</Text>
      {allInfo[3].split("\n").map((v, i) => (
        <Text key={i}>{v}</Text>
      ))}
    </>
  );
};

export default index;
