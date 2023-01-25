import { useEffect, useState } from "react";
import MainWrapper from "../../organisms/MainWrapper";
import MainQuoteTable from "../../organisms/MainQuoteTable";
import MainRemarks from "../../atoms/MainRemarks";
import SidebarWrapper from "../../organisms/SidebarWrapper";
import MainLeft from "../../molecules/MainLeft";
import MainRight from "../../molecules/MainRight";
import SidebarPreviewLeft from "../../molecules/SidebarPreviewLeft";
import SidebarPreviewRight from "../../molecules/SidebarPreviewRight";
import SidebarQuoteTable from "../../organisms/SidebarQuoteTable";
import SidebarRemarks from "../../atoms/SidebarRemarks";
import Headline from "../../atoms/Headline";
import { uuid } from "../../../utils/uuid";
import styles from "./index.module.css";

const Main = ({ allInfo, setAllInfo }) => {
  const [detailInfo, setDetailInfo] = useState({
    company: "",
    postalCode: "",
    address: "",
    rep: "",
    subject: "",
    stampImg: "",
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

  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    setTotalPrice(
      allTableRow.reduce((sum, row) => {
        return sum + row.price;
      }, 0)
    );

    setAllInfo([detailInfo, allTableRow, { totalPrice: totalPrice }, remarks]);
  }, [allTableRow, detailInfo, remarks]);

  if(allInfo.length === 0) return <p>loading...</p>

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Headline>見積書</Headline>
        <MainWrapper>
          <MainLeft detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
          <MainRight detailInfo={detailInfo} setDetailInfo={setDetailInfo} />
        </MainWrapper>
        <MainQuoteTable
          detailInfo={detailInfo} 
          setDetailInfo={setDetailInfo}
          totalPrice={totalPrice}
          allTableRow={allTableRow}
          setAllTableRow={setAllTableRow}
        />
        <MainRemarks setRemarks={setRemarks} />
      </main>
      <div className={styles.sidebar}>
        <Headline
          color={{
            color: "#fff",
            background: "#4169e1",
            fontWeight: "bold",
            padding: "5px 0",
          }}
        >
          お見積書
        </Headline>
        <SidebarWrapper>
          <SidebarPreviewLeft allInfo={allInfo} totalPrice={totalPrice} />
          <SidebarPreviewRight allInfo={allInfo} />
        </SidebarWrapper>
        <SidebarQuoteTable allTableRow={allTableRow} />
        <SidebarRemarks remarks={remarks} />
      </div>
    </div>
  );
};

export default Main;
