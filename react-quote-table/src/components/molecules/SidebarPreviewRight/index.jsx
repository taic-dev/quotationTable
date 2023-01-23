import React from 'react';
import styles from './index.module.css';

const index = ({ allInfo }) => {
  return (
    <div className={styles["preview-right"]}>
      <div className={styles["preview-own-no"]}>
        <img className={styles["preview-stamp-img"]} src={ allInfo[0].stampImg ? allInfo[0].stampImg : `${process.env.PUBLIC_URL}/img/no_image.png`} alt="判子画像" />
        <p>No: {allInfo[0].no}</p>
        <p>見積日: {allInfo[0].quoteDate}</p>
      </div>
      <div className={styles["preview-own-company-info"]}>
        <p className={styles["preview-oen-company-name"]}>{allInfo[0].ownCompany}</p>
        <p>&#12306; {allInfo[0].ownPostalCode}</p>
        <p className={styles["preview-oen-company-address"]}>{allInfo[0].ownAddress}</p>
        <p>TELL: {allInfo[0].ownPhoneNumber}</p>
        <p>FAX: {allInfo[0].ownFax}</p>
        <p>Email: {allInfo[0].ownEmail}</p>
        <p>担当: {allInfo[0].ownRep}</p>
      </div>
    </div>
  )
}

export default index
