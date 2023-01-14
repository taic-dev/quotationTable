import React from 'react'
import TextField from "./atoms/TextFileld";

const MainItemRight = () => {
  return (
    <div className="main-item main-item__right">
        <TextField labelName="見積もりNo." />
        <TextField labelName="見積もり日" />
        <TextField labelName="自社名" />
        <TextField labelName="〒" />
        <TextField labelName="住所" />
        <TextField labelName="電話番号" />
        <TextField labelName="FAX" />
        <TextField labelName="E-mail" />
        <TextField labelName="担当" />
    </div>
  )
}

export default MainItemRight
