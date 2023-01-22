import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../../templates/Main";
import Header from "../../organisms/Header";
import Pdf from "../../templates/Pdf";

const Page = () => {
  const [allInfo, setAllInfo] = useState([]);

  console.log(allInfo)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main
            allInfo={allInfo}
            setAllInfo={setAllInfo}
          />
        </Route>
        <Route exact path="/pdf">
          <Header />
          <Pdf 
            allInfo={allInfo}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Page;
