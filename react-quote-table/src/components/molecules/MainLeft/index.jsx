import React from 'react'
import MainField from '../MainField'
import TextField from '../../atoms/TextFileld'

const index = () => {
  return (
    <MainField>
      <TextField labelName="会社名" text="御中" />
      <TextField labelName="ご担当者" text="様" />
      <TextField labelName="件名" option="fullWidth" />
      <p>下記の通り、お見積り申し上げます。</p>
      <TextField labelName="納期" />
      <TextField labelName="支払い条件" />
      <TextField labelName="有効期限" />
    </MainField>
  )
}

export default index
