import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import Header from "./Header";
import MainPage from "./pages/Main";
import OrderPage from "./pages/Order";
const MobileBottomFixedMenu = lazy(() => import("./MobileBottomFixedMenu"));

const renderMBFMenu = () => {
  return (
    <Suspense fallback="Loading...">
      <MobileBottomFixedMenu />
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
      </Switch>
      <Responsive as={renderMBFMenu} {...Responsive.onlyMobile} />
    </React.Fragment>
  );
};

export default App;
