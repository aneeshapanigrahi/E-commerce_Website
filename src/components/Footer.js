import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Footer extends React.Component {
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
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <footer>
        <div id="footer-main">
          <div id="site-desc">
            <h1>Mirror</h1>
            <p>{this.state.description}</p>
          </div>

          <div id="footer-table">
            <div className="table-rows">
              <Link to="/">Menu</Link>
              <Link to="/">Shop</Link>
              <Link to="/">About</Link>
              <Link to="/blog">Blogs</Link>
              <Link to="/">Features</Link>
            </div>
            <div className="table-rows">
              <Link to="/">Help</Link>
              <Link to="/">Shipping Information</Link>
              <Link to="/">Returns and exchange</Link>
              <Link to="/">Terms and Conditions</Link>
              <Link to="/">Privacy policy</Link>
            </div>
            <div className="table-rows">
              <Link to="/">Contact</Link>
              <Link to="/">{this.state.location}</Link>

              <Link to="/">{this.state.phNumber}</Link>

              <Link to="/">{this.state.email}</Link>
              <div>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
        <div id="copyright-div">
          <p>copyright © 2020 | All rights reserved | Mirror</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
