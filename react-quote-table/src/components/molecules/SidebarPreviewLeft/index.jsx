import React from 'react'
import styles from "./index.module.css"

const index = ({ allInfo, totalPrice }) => {
  return (
    <div className={styles["preview-left"]}>
      <div className={styles["preview-company"]}>
        <p>{allInfo[0].company}</p>
      </div>
      <div className={styles["preview-margin-top"]}>
        <p>〒 {allInfo[0].postalCode}</p>
        <p className={styles["preview-address"]}>{allInfo[0].address}</p>
      </div>
      <div className={styles["preview-margin-top"]}>
        <p>{allInfo[0].rep} 様</p>
      </div>
      <div className={styles["preview-subject"]}>
        <p>{allInfo[0].subject}</p>
      </div>
      <div className={styles["preview-quote"]}>
        <p>下記の通りお見積りを申し上げます。</p>
        <div className={styles["preview-total-price"]}>
          <p>見積り金額</p>
          <p>¥{totalPrice}-</p>
        </div>
      </div>
    </div>
  )
}

export default index
