import React, { useState, useEffect } from "react";
// import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dropdown, Button, ButtonGroup, Navbar, Nav, NavDropdown, FormControl, Form } from "react-bootstrap";

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
    <header id="header" style={{zIndex:"5000", marginBottom:"70px"}}>
        <Navbar bg="light" expand="lg" fixed='top'>
  <Navbar.Brand href="/homePage">Mirror</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse >
    <Nav
      className="m-auto"
      style={{ maxHeight: '100px' }}
    >
      <Nav.Link href="/homePage">Home</Nav.Link>
      <Nav.Link href="/customizationPage">Customize</Nav.Link>
      <Nav.Link href="/homePage">Shop</Nav.Link>
      <Link to="/myAccount">
      <NavDropdown title="Account" style={{position: 'relative', top: '0', width: 'auto', opacity: '100', transform: 'none'}} >
        <NavDropdown.Item href="/myAccount">My Account</NavDropdown.Item>
        <NavDropdown.Item href="/myOrders">Orders and Returns</NavDropdown.Item>
        <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => logout()} href="/">Logout</NavDropdown.Item>
      </NavDropdown>
      </Link>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
      />
      <Link to={`/search/all/${userId}/${searchQuery}`}>
          <Button type='submit' style={{padding: 'auto', border: 'none', borderRadius: '4px', lineHeight:'0', fontSize: '15px', height: '32px'}}><i className="fa fa-search" /></Button>
    </Link>
    </Form>
    </Nav>
    <Nav className="ml-auto">
    <NavDropdown title={<div style={{display: "inline-block"}} className="fa fa-bell"> </div>} 
    style={{position: 'relative', top: '0', width: 'auto', opacity: '100', transform: 'none'}} >
        <NavDropdown.Item href="/settings">You have 0 Notifications</NavDropdown.Item>
        {/* <NavDropdown.Divider />*/}
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
            </Nav>
  </Navbar.Collapse>
</Navbar>
    </header>
  );
};

export default Header;
