import React from "react";
import SideNav from "../SideNav";
import Toolbar from "../SidenavComponents/Toolbar";
import Backdrop from "../SidenavComponents/Backdrop";
import "../Admin.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Customize extends React.Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div
        id="admin-div"
        style={{ display: "flex", flexDirection: "row", margin: "40px" }}
      >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav show={this.state.sideDrawerOpen} />
        {backdrop}
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "54px" }}
        >
          <Link to="/admin/customizeProducts/additem">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Add a new item
            </Button>
          </Link>
          <Link to="">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Add designer products
            </Button>
          </Link>
          <Link to="/admin/customizeProducts/deleteOne">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Delete a product
            </Button>
          </Link>
          <Link to="/admin/customizeProducts/updatePrice">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Update a product price
            </Button>
          </Link>
          <Link to="/admin/customizeProducts/deleteCategory">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Delete all products of a specific category
            </Button>
          </Link>
          <Link to="/admin/customizeProducts/deleteAll">
            <Button
              style={{
                backgroundColor: "#ffd662ff",
                color: "black",
                borderColor: "#ffd662ff",
                margin: "10px",
              }}
            >
              Delete everything
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Customize;
