import React, { useState } from "react";
import styles from "./index.module.css"
const StampImg = ({ detailInfo, setDetailInfo }) => {
  const [image, setImage] = useState("");

  const changeStampImg = (e) => {
    if (!e.target.files || !e.target.files[0]) return;
    if(!e.target.files?.[0].type.match("image.*")) return;

    const { name } = e.target;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result);
      setDetailInfo({...detailInfo, [name]: e.target?.result});
    }

    reader.readAsDataURL(e.target?.files[0])
  };

  return (
    <div className={styles["stamp-img-wrapper"]}>
      <img src={image} alt="判子画像" />
      <input type="file" name="stampImg" onChange={(e)=>changeStampImg(e)} />
    </div>
  );
};

export default StampImg;
