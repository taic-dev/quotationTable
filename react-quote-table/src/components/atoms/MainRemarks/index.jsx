import React from 'react'
import { TextareaAutosize } from '@mui/material'
import styles from './index.module.css'

const index = () => {
  return (
    <TextareaAutosize
      className={styles.TextareaAutosize}
      placeholder="備考欄"
    />
  )
}

export default index
