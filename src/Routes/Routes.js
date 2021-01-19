import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import checkout from '../CheckoutPage/CheckoutPage';
import Login from "../Login-Signup/Login";
import Customer from "../Login-Signup/customer/Customer";
import SearchItem from "../searchedItem/searchItems";
import Customersignup from "../Login-Signup/customer/Customersignup";
const HomePage = lazy(() => import("../Home Page/HomePage"));
const AllProduct = lazy(() => import("../components/AllProduct"));
const ProductPage = lazy(() => import("../Product Page/ProductPage"));
const Cart = lazy(() => import("../Cart Page/cart"));
const WishList = lazy(() => import("../WishList/WishList"));
const Admin = lazy(() => import("../Admin/Admin"));
const CustomizeProducts = lazy(() =>
  import("../Admin/components/CustomizeProducts")
);
const CustomizationPage = lazy(() => import("../Customization/App"));
const MyAccount = lazy(() => import("../My Account/MyAccount"));
const MyOrders = lazy(() => import("../My Account/MyOrders"));
const Settings = lazy(() => import("../My Account/Settings"));
const Help = lazy(() => import("../My Account/Help"));
const Dashboard = lazy(() => import("../Admin/components/Dashboard"));
const AddNewItem = lazy(() => import("../Admin/components/AddNewItem"));
const DeleteAll = lazy(() => import("../Admin/components/DeleteAll"));
const DeleteOne = lazy(() => import("../Admin/components/DeleteOne"));
const DeleteCategory = lazy(() => import("../Admin/components/DeleteCategory"));
const UpdatePrice = lazy(() => import("../Admin/components/UpdatePrice"));
const UpdateFooter = lazy(() => import("../Admin/components/UpdateFooter"));
const UpdateBanners = lazy(() => import("../Admin/components/UpdateBanners"));
const CustomerDetails = lazy(() => import("../Admin/components/CustomerDetails"));
class Routes extends React.Component {
  render() {
    return (
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              padding: "20vw 0",
            }}
          >
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          </div>
        }
      >
        <Switch>
          <Route path="/checkout" exact component={checkout} />
          <Route path="/" exact component={Login} />
          <Route path="/customer" exact component={Customer} />
          <Route path="/signup/customer" exact component={Customersignup} />
          <Route path="/homePage" exact component={HomePage} />
          <Route path="/myAccount" exact component={MyAccount} />
          <Route path="/customizationPage" exact component={CustomizationPage} />
          <Route path="/myOrders" exact component={MyOrders} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/help" exact component={Help} />
          <Route path="/all/user/:_id" exact component={AllProduct} />
          <Route
            path="/product/:productId/:_id"
            exact
            component={ProductPage}
          />
          <Route path="/cart/all/:userId" exact component={Cart} />
          <Route
            path="/search/all/:_id/:searchQuery"
            exact
            component={SearchItem}
          />
          <Route path="/:userId/wishlist" exact component={WishList} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Route
            path="/admin/customizeProducts"
            exact
            component={CustomizeProducts}
          />
          <Route
            path="/admin/customizeProducts/additem"
            exact
            component={AddNewItem}
          />
          <Route
            path="/admin/customizeProducts/deleteAll"
            exact
            component={DeleteAll}
          />
          <Route
            path="/admin/customizeProducts/deleteOne"
            exact
            component={DeleteOne}
          />
          <Route
            path="/admin/customizeProducts/deleteCategory"
            exact
            component={DeleteCategory}
          />
          <Route
            path="/admin/customizeProducts/updatePrice"
            exact
            component={UpdatePrice}
          />
          <Route path="/admin/updateFooter" exact component={UpdateFooter} />
          <Route path="/admin/updateBanners" exact component={UpdateBanners} />
          <Route path="/admin/customerDetails" exact component={CustomerDetails} />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
