import React from 'react';
import SidebarTableHead from "../../molecules/SidebarTableHead";
import SidebarTableBody from "../../molecules/SidebarTableBody";
import styles from "./index.module.css";

const index = ({ allTableRow }) => {
  return (
    <table>
      <SidebarTableHead />
      <SidebarTableBody allTableRow={allTableRow} />
    </table>
  )
}

export default index
