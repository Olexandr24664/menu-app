import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import Header from "./Header";
import MainPage from "./pages/Main";
import OrderPage from "./pages/Order";
import { SidebarProvider } from "./context/menuSidebarContext";
import DimmerMenu from "./components/DimmerMenu";
import ProductPage from "./pages/Product";
import { ToastContainer } from "react-toastify";
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
      <SidebarProvider>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/product/:productid">
            <ProductPage />
          </Route>
          <Route exact path="/order">
            <OrderPage />
          </Route>
        </Switch>
        <Responsive as={renderMBFMenu} {...Responsive.onlyMobile} />
        <Responsive as={DimmerMenu} {...Responsive.onlyMobile} />
      </SidebarProvider>
      <ToastContainer
        style={{ marginBottom: "30px" }}
        enableMultiContainer
        autoClose={2000}
        containerId={"global"}
      />
    </React.Fragment>
  );
};

export default App;
