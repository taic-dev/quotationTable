import React from 'react'
import styles from './index.module.css'

const index = ({ remarks }) => {
  return (
    <div className={styles.remarks}>
      【備考欄】<br />
      {remarks.split('\n').map((v,i)=>(
        <p key={i}>{v}</p>
      ))}
    </div>
  )
}

export default index
