import React from "react";
import SideNav from "../SideNav";
import Toolbar from '../SidenavComponents/Toolbar';
import Backdrop from '../SidenavComponents/Backdrop';
import "../Admin.css";
class Dashboard extends React.Component {
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
      <div id="admin-div" style={{ display: 'flex', flexDirection: 'row', marginLeft: '54px' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav show={this.state.sideDrawerOpen} />
        {backdrop}
        <h1>Hi I am the dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
