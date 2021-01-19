import React from "react";
import Axios from "axios";
import SideNav from "../SideNav";
import Toolbar from '../SidenavComponents/Toolbar';
import Backdrop from '../SidenavComponents/Backdrop';
import { Button, FormGroup, Col, Row, FormLabel } from "react-bootstrap";
class UpdateFooter extends React.Component {
  state = { email: "", phNumber: "", description: "", location: "" };
  componentDidMount() {
    Axios.get("http://localhost:8000/updateFooter")
      .then((data) => {
        console.log(data);
        this.setState({
          email: data.data.email,
          phNumber: data.data.phNumber,
          description: data.data.description,
          location: data.data.location,
          status: "",
        });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (e) => {
    this.setState({ status: "" });
    const { value, name } = e.target;
    if (name === "description") {
      this.setState({ description: value });
    } else if (name === "phNumber") {
      this.setState({ phNumber: value });
    } else if (name === "email") {
      this.setState({ email: value });
    } else if (name === "location") {
      this.setState({ location: value });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    if (
      this.state.email === "" ||
      this.state.phNumber === "" ||
      this.state.descriptio === "" ||
      this.state.location === ""
    ) {
      this.setState({ status: "All above fields should be filled." });
    } else {
      Axios.put("http://localhost:8000/updateFooter", this.state)
        .then((resp) =>
          this.setState({ status: "Successfully updated the footer" })
        )
        .catch((err) => console.log(err));
    }
  };
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
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideNav show={this.state.sideDrawerOpen} />
        {backdrop}
        <div style={{
          margin: " 50px auto 50px 54px",
          maxWidth: "800px", textAlign: 'center', padding: '20px 30px 20px 30px'
        }}>
          <h1 style={{ margin: '10px auto 30px auto' }}><strong>Update footer details: </strong></h1>
          <FormGroup as={Row}>
            <FormLabel column sm="4">
              Description
            </FormLabel>
            <Col sm="8">
              <textarea
                className="form-control"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                rows="8"
              /></Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="4">
              Location
            </FormLabel>
            <Col sm="8">
              <input
                className="form-control"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              /></Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="4">
              Phone number            </FormLabel>
            <Col sm="8">
              <input
                className="form-control"
                type="text"
                value={this.state.phNumber}
                name="phNumber"
                onChange={this.handleChange}
              /></Col>
          </FormGroup>
          <FormGroup as={Row}>
            <FormLabel column sm="4">
              Email            </FormLabel>
            <Col sm="8">
              <input
                className="form-control"
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              /></Col>
          </FormGroup>
          <Button onClick={this.handleClick} style={{ backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", color: "black" }}>Update</Button>
          <h1>{this.state.status}</h1>
        </div>
      </div>
    );
  }
}
export default UpdateFooter;
