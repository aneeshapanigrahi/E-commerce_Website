import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class SideNav extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <Scrollbars style={{ width: "100%", height: "100%" }}>
          <div id="sideNav">
            <Link
              to="/admin/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1 style={{ margin: "20px 0px 0px 0px" }}>Dashboard</h1>
            </Link>
            <Link
              to="/admin/customizeProducts"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1 style={{ margin: "20px 0px 0px 0px" }}>Customize products</h1>
            </Link>
            <Link to="/admin/updateBanners" style={{ textDecoration: "none", color: "black" }}>
              <h1 style={{ margin: "20px 0px 0px 0px" }}>Update banners</h1>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h1 style={{ margin: "20px 0px 0px 0px" }}>Customize blogs</h1>
            </Link>
            <Link to="/admin/customerDetails" style={{ textDecoration: "none", color: "black" }}>
              <h1 style={{ margin: "20px 0px 0px 0px" }}>
                View all customer details
              </h1>
            </Link>
            <Link
              to="/admin/updateFooter"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1 style={{ margin: "20px 0px 0px 0px" }}>update footer</h1>
            </Link>
          </div>
        </Scrollbars>
      </nav>
    );
  }
}

export default SideNav;
