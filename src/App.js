import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faLock,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faLock, faEdit, faPlus);

function App() {
  const MyHeader = () => {
    const location = useLocation();

    if (
      location.pathname !== "/admin" &&
      location.pathname !== "/admin/dashboard" &&
      location.pathname !== "/admin/customizeProducts" &&
      location.pathname !== "/admin/customizeProducts/additem" &&
      location.pathname !== "/admin/customizeProducts/deleteAll" &&
      location.pathname !== "/admin/customizeProducts/deleteOne" &&
      location.pathname !== "/admin/customizeProducts/deleteCategory" &&
      location.pathname !== "/admin/customizeProducts/updatePrice" &&
      location.pathname !== "/admin/updateFooter" &&
      location.pathname !== "/admin/updateBanners" &&
      location.pathname !== "/admin/customerDetails" &&
      location.pathname !== "/" &&
      location.pathname !== "/customer" &&
      location.pathname !== "/customizationPage" &&
      location.pathname !== "/signup/customer"
    ) {
      return <Header />;
    } else {
      return <></>;
    }
  };
  const MyFooter = () => {
    const location = useLocation();
    if (
      location.pathname !== "/admin" &&
      location.pathname !== "/admin/dashboard" &&
      location.pathname !== "/admin/customizeProducts" &&
      location.pathname !== "/admin/customizeProducts/additem" &&
      location.pathname !== "/admin/customizeProducts/deleteAll" &&
      location.pathname !== "/admin/customizeProducts/deleteOne" &&
      location.pathname !== "/admin/customizeProducts/deleteCategory" &&
      location.pathname !== "/admin/customizeProducts/updatePrice" &&
      location.pathname !== "/admin/updateFooter" &&
      location.pathname !== "/admin/updateBanners" &&
      location.pathname !== "/admin/customerDetails" &&
      location.pathname !== "/" &&
      location.pathname !== "/customer" &&
      location.pathname !== "/customizationPage" &&
      location.pathname !== "/signup/customer"
    ) {
      return <Footer />;
    } else {
      return <></>;
    }
  };
  return (
    <Router>
      <MyHeader />
      <Routes />
      <MyFooter />
    </Router>
  );
}

export default App;
