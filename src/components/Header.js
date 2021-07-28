import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dropdown, Button, ButtonGroup, Navbar, Nav, NavDropdown, FormControl, Form } from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";

const userId = window.location.href.split("/")[5];
const Header = () => {
  const [cartCount, setcartCount] = useState(0);
  const [wishCount, setwishCount] = useState(0);
  const [searchQuery, setsearchQuery] = useState("");
  console.log(userId)
  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${userId}`)
      .then((data) => {
        setcartCount(data.data.usercart.length);
        setwishCount(data.data.cartWishList.length);
      })
      .catch((err) => console.log(err));
  }, [cartCount, wishCount]);

  useEffect(() => {
    if (cartCount != -1) {
      axios
        .get(`http://localhost:8000/user/${userId}`)
        .then((data) => {
          setcartCount(data.data.usercart.length);
          setwishCount(data.data.cartWishList.length);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleTextChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const logout = () => {
    localStorage.clear();
  };

  return (
    <header id="header">
        <Navbar bg="light" expand="lg" fixed='top'>
  <Navbar.Brand href="/homePage">Mirror</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="m-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/homePage">Home</Nav.Link>
      <Nav.Link href="/customizationPage">Customize</Nav.Link>
      <Nav.Link href="/homePage">Shop</Nav.Link>
      <NavDropdown title="Account" id="navbarScrollingDropdown">
        <NavDropdown.Item href="/myAccount">My Account</NavDropdown.Item>
        <NavDropdown.Item href="/myOrders">Orders and Returns</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => logout()} href="/">Logout</NavDropdown.Item>
      </NavDropdown>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Nav>
    <Nav className="m-auto">
    <NavDropdown title={`fa fa-bell`} className="fa fa-bell">
        <NavDropdown.Item href="/myAccount">My Account</NavDropdown.Item>
        <NavDropdown.Item href="/myOrders">Orders and Returns</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => logout()} href="/">Logout</NavDropdown.Item>
      </NavDropdown>
    <Nav.Link href={`/${userId}/wishList`}>
              <i
                href="/"
                className="fa fa-heart"
                style={{ position: "relative" }}
              >
                <span className="badge badge-pill badge-light">
                  {wishCount}
                </span>
              </i>
            </Nav.Link>
      <Nav.Link href={`/cart/all/${userId}`}> 
      <i
                className="fa fa-shopping-cart"
                style={{ position: "relative" }}
              >
                <span className="badge badge-pill badge-light">
                  {cartCount}
                </span>
              </i></Nav.Link>
      
            <a href="" className="fa fa-bell dropdown" id="navbarDropdown" type="button" data-toggle="dropdown" aria-expanded="true" />
            <div size="2" className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdowndiv" style={{ width: "300px", maxHeight: "600px", zIndex: '2000' }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              <Dropdown.Divider />
              <div>
                <Dropdown.Item eventKey="1">
                  <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/users-yellow/60/50_-Blank_Profile-_user_people_group_team-512.png" alt="" style={{ height: '50px', width: "auto", borderRadius: "50%", margin: "0px 10px 10px 0px" }} />
                Designer1
                <p style={{ color: "gray" }}>I will charge Rs.100 for your post </p>
                    <ButtonGroup>
                      <Button variant="light" style={{ color: "black", backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", borderRadius: "4px", marginRight: "5px" }}>Accept</Button>
                      <Button variant="secondary" style={{ borderRadius: "4px" }}>Reject</Button>
                    </ButtonGroup>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">
                  <img src="https://www.asiancancerinstitute.com/public/images/blank-user.png" alt="" style={{ height: '50px', width: "auto", borderRadius: "50%", margin: "0px 10px 10px 0px" }} />
                Designer2
                <p style={{ color: "gray" }}>I will charge Rs.100 for your post </p>
                  <ButtonGroup>
                    <Button variant="light" style={{ color: "black", backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", borderRadius: "4px", marginRight: "5px" }}>Accept</Button>
                    <Button variant="secondary" style={{ borderRadius: "4px" }}>Reject</Button>
                  </ButtonGroup>
                </Dropdown.Item>
                <Dropdown.Divider />
              </div>
            </div>
           
            </Nav>
  </Navbar.Collapse>
</Navbar>
      <nav id="header-nav" className="navbar navbar-expand-lg navbar-light ">
        <a href="/homePage" className="navbar-brand">
          Mirror
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/homePage">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/customizationPage">
                Customize
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/myAccount">
                Shop
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="/"
              >
                Account
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ zIndex: '1500' }}>
                <a className="dropdown-item" href="/myAccount">
                  My account
                </a>
                <a className="dropdown-item" href="/myOrders">
                  returns and orders
                </a>

                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" onClick={() => logout()} href="/">
                  Logout
                </a>
              </div>
            </li>
          </ul>
          <form>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={(e) => handleTextChange(e)}
              value={searchQuery}
              autoComplete="off"
            />

            <Link to={`/search/all/${userId}/${searchQuery}`}>
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </Link>
          </form>

          <div className="icons container-fluid">
            <a href="" className="fa fa-bell dropdown" id="navbarDropdown" type="button" data-toggle="dropdown" aria-expanded="true" />
            <div size="2" className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdowndiv" style={{ width: "300px", maxHeight: "600px", zIndex: '2000' }}>
              <Dropdown.Header>Notifications</Dropdown.Header>
              <Dropdown.Divider />
              <div>
                <Dropdown.Item eventKey="1">
                  <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/users-yellow/60/50_-Blank_Profile-_user_people_group_team-512.png" alt="" style={{ height: '50px', width: "auto", borderRadius: "50%", margin: "0px 10px 10px 0px" }} />
                Designer1
                <p style={{ color: "gray" }}>I will charge Rs.100 for your post </p>
                    <ButtonGroup>
                      <Button variant="light" style={{ color: "black", backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", borderRadius: "4px", marginRight: "5px" }}>Accept</Button>
                      <Button variant="secondary" style={{ borderRadius: "4px" }}>Reject</Button>
                    </ButtonGroup>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">
                  <img src="https://www.asiancancerinstitute.com/public/images/blank-user.png" alt="" style={{ height: '50px', width: "auto", borderRadius: "50%", margin: "0px 10px 10px 0px" }} />
                Designer2
                <p style={{ color: "gray" }}>I will charge Rs.100 for your post </p>
                  <ButtonGroup>
                    <Button variant="light" style={{ color: "black", backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", borderRadius: "4px", marginRight: "5px" }}>Accept</Button>
                    <Button variant="secondary" style={{ borderRadius: "4px" }}>Reject</Button>
                  </ButtonGroup>
                </Dropdown.Item>
                <Dropdown.Divider />
              </div>
            </div>
            <Link to={`/${userId}/wishList`}>
              <i
                href="/"
                className="fa fa-heart"
                style={{ position: "relative" }}
              >
                <span className="badge badge-pill badge-light">
                  {wishCount}
                </span>
              </i>
            </Link>

            <Link to={`/cart/all/${userId}`}>
              <i
                className="fa fa-shopping-cart"
                style={{ position: "relative" }}
              >
                <span className="badge badge-pill badge-light">
                  {cartCount}
                </span>
              </i>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
