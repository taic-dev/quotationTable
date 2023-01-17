import React from "react";
import PdfTableWrapper from "../../organisms/PdfWrapper";

import {
  Document,
  Page,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Nasu-Regular",
  src: "./fonts/Nasu-Regular.ttf",
});

Font.register({
  family: "Nasu-Bold",
  src: "./fonts/Nasu-Bold.ttf",
});

const styles = {
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

const index = ({ allInfo, totalPrice }) => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4">
          <PdfTableWrapper
            allInfo={allInfo}
            totalPrice={totalPrice}
          />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default index;
