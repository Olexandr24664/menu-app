import React, { lazy, Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Responsive } from "semantic-ui-react";
import Header from "./Header";
import Main from "./pages/Main";
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
          <Main />
        </Route>
      </Switch>
      <Responsive as={renderMBFMenu} {...Responsive.onlyMobile} />
      {/* {renderMBFMenu()} */}
    </React.Fragment>
  );
};

export default App;
