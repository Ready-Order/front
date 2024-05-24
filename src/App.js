import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import MenuPage from "./components/order/pages/MenuPage.jsx";
import IntroPage from "./components/intro/IntroPage.jsx";
import CartPage from "./components/order/pages/CartPage.jsx";
import LoginPage from "./components/users/pages/LoginPage.jsx";
import ManagementPage from "./components/store/pages/management/ManagementPage.jsx";
import ManagementMenuPage from "./components/store/pages/management/ManagementMenuPage.jsx";
import QRPage from "./components/store/pages/qr/QRPage.jsx";
import ManagementStatePage from "./components/store/pages/management/ManagementStatePage.jsx";
import RecipePage from "./components/order/pages/RecipePage.jsx";
import Header from "./shared/header/Header.jsx";
import ManagementCreateMenuRoot from "./components/store/pages/management/ManagementCreateMenuRoot.jsx";
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

        <Route path="/order/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/order/recipe" exact>
          <RecipePage />
        </Route>
        <Route path="/order/cart" exact>
          <CartPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
