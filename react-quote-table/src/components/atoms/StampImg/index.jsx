import React, { useState } from "react";
import Button from '@mui/material/Button';
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
      <img src={image ? image : `${process.env.PUBLIC_URL}/img/no_image.png` } alt="判子画像" />
      <Button component="label" variant="outlined" sx={{ width: "100%" }}>
        判子を選択
        <input type="file" accept="image/*" name="stampImg" onChange={(e)=>changeStampImg(e)} hidden />
      </Button>
    </div>
  );
};

export default StampImg;
