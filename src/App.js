import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MenuPage from "./components/order/pages/MenuPage.jsx";
import IntroPage from "./components/intro/IntroPage.jsx";
import CartPage from "./components/order/pages/CartPage.jsx";
import LoginPage from "./components/users/pages/LoginPage.jsx";
import ManagementPage from "./components/store/pages/management/ManagementPage.jsx";
import ManagementMenuPage from "./components/store/pages/management/ManagementMenuPage.jsx";
import QRPage from "./components/store/pages/qr/QRPage.jsx";
import ManagementStatePage from "./components/store/pages/management/ManagementStatePage.jsx";
import BillPage from "./components/order/pages/BillPage.jsx";
// import Header from "./shared/header/Header.jsx";
import PosPage from "./components/pos/PosPage.jsx";
import ManagementCreateMenuRoot from "./components/store/pages/management/ManagementCreateMenuRoot.jsx";
import MenuDetailPage from "./components/order/pages/MenuDetailPage.jsx";
import { CartProvider } from "./components/order/components/CartContext.js";

import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); //3 seconds

    return () => clearTimeout(timer);
  }, []);

  const isLoggedInHandler = () => {
    setIsLoggedIn(true);
  };
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            {showIntro ? (
              <IntroPage />
            ) : isLoggedIn ? (
              <Redirect to="/main" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/login" exact>
            <LoginPage
              isLoggedIn={isLoggedIn}
              isLoggedInHandler={isLoggedInHandler}
            />
          </Route>
          <Route path="/main">
            <ManagementPage />
          </Route>
          <Route path="/:id/pos" exact>
            <PosPage />
          </Route>
          <Route path="/store/state" exact>
            <ManagementStatePage />
          </Route>
          <Route path="/store/menu" exact>
            <ManagementMenuPage />
          </Route>
          <Route path="/store/menu/create" exact>
            <ManagementCreateMenuRoot />
          </Route>
          <Route path="/store/qr" exact>
            <QRPage />
          </Route>

          <Route path="/order/menu/:tableNum" exact>
            <MenuPage />
          </Route>
          <Route path="/order/menu/:tableNum/:id" exact>
            <MenuDetailPage />
          </Route>

          <Route path="/orders/:tableNum/bill" exact>
            <BillPage />
          </Route>
          <Route path="/order/cart/:tableNum" exact>
            <CartPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
