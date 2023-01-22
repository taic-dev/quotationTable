import React from "react";
import styles from "./index.module.css";

const index = ({ allTableRow }) => {
  return (
    <tbody>
      {allTableRow.map((v, i) => (
        <tr className={styles["table-row"]} key={v.uuid}>
          <td>{i+1}</td>
          <td>{v.workDetail}</td>
          <td>{v.unitPrice}</td>
          <td>{v.quantity}</td>
          <td>{v.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default index;
