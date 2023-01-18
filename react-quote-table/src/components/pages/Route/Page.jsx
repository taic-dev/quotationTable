import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../../templates/Main";
import Header from "../../organisms/Header";
import Pdf from "../../templates/Pdf";

const Page = () => {
  const [allInfo, setAllInfo] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main
            setAllInfo={setAllInfo}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        </Route>
        <Route exact path="/pdf">
          <Header />
          <Pdf 
            allInfo={allInfo}
            totalPrice={totalPrice} 
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Page;
