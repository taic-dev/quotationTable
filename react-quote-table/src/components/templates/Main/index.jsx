import { useEffect, useState } from "react";
import MainWrapper from "../../organisms/MainWrapper";
import MainQuoteTable from "../../organisms/MainQuoteTable";
import MainLeft from "../../molecules/MainLeft";
import MainRight from "../../molecules/MainRight";
import { uuid } from "../../../utils/uuid";
import { Typography } from "@mui/material";
import styles from "./index.module.css";

const Main = ({ setAllInfo }) => {
  const [detailInfo, setDetailInfo] = useState({
    company: "",
    postalCode: "",
    address: "",
    rep: "",
    subject: "",
    dueDate: "",
    no: "",
    quoteDate: "",
    ownCompany: "",
    ownPostalCode: "",
    ownAddress: "",
    ownPhoneNumber: "",
    ownFax: "",
    ownEmail: "",
    ownRep: "",
  });

  const [allTableRow, setAllTableRow] = useState([
    {
      id: 0,
      workDetail: "",
      unitPrice: 0,
      quantity: 0,
      price: 0,
      uuid: uuid(),
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      allTableRow.reduce((sum, row) => {
        return sum + row.price;
      }, 0)
    );

    setAllInfo([detailInfo, allTableRow, { totalPrice: totalPrice }]);
  }, [allTableRow, detailInfo]);

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Typography
          style={{ fontSize: "25px", textAlign: "center" }}
          component="h2"
          variant="h2"
        >
          お見積書
        </Typography>
        <MainWrapper>
          <MainLeft detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
          <MainRight detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
        </MainWrapper>
        <MainQuoteTable
          totalPrice={totalPrice}
          allTableRow={allTableRow}
          setAllTableRow={setAllTableRow}
        />
      </main>
      <div className={styles.sidebar}>
        <p>テキストテキストテキストテキスト</p>
      </div>
    </div>
  );
};

export default Main;
