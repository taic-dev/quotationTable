import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../../templates/Main";
import Pdf from "../../Pdf";

const Page = () => {
  const [allInfo, setAllInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            setAllInfo={setAllInfo}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          ></Main>
        </Route>
        <Route exact path="/pdf">
          <Pdf allInfo={allInfo} totalPrice={totalPrice}></Pdf>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Page;
