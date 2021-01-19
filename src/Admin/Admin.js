import React from "react";
import SideNav from "./SideNav";
import MainContent from "./MainContent";
import Toolbar from './SidenavComponents/Toolbar';
import Backdrop from './SidenavComponents/Backdrop';
import "./Admin.css";


class Admin extends React.Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let backdrop
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div id="admin-div">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav show={this.state.sideDrawerOpen} />
        {backdrop}
        <MainContent />
      </div>
    );
  }
}

export default Admin;
