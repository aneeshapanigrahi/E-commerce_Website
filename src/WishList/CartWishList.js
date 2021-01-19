import React from "react";
import axios from "axios";
import "./CartWishList.css";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

class CartWishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  componentDidMount() {
    const userId = window.location.href.split("/")[3];//localStorage.getItem('userId');
    
    axios
      .get(`http://localhost:8000/api/${userId}/wishList/cartWishList`)
      .then((resp) => {
        this.setState({ array: resp.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div id="cartWishList-main">
        <p style={{ paddingTop: "8px" }}>
          Wishlist items : {this.state.array.length}
        </p>
        <div className="hr"></div>
        <div
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            textAlign: "center",

            display: "flex",
            justifyContent: "center",
            fontSize: "1rem",
          }}
        >
          <ScrollToTop
            style={{
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              backgroundColor: "orange",
            }}
            className="container"
            showUnder={800}
          >
            <span
              style={{
                position: "auto",
                paddingLeft: "8px",
                display: "flex",
              }}
            >
              Go to top
              <img
                style={{ width: "20px", height: "20px", marginLeft: "7px" }}
                src="https://img.icons8.com/ios-glyphs/30/000000/up-squared.png" alt=""
              />
            </span>
          </ScrollToTop>
        </div>
        {this.state.array.length === 0 ? (
          <h1 id="empty-text">Your wishlist for cart is empty</h1>
        ) : (
          <div id="cartWishList-div">
            {this.state.array.map((x, index) => {
              return (
                <div id="wishList-card" key={index}>
                  <Link to={`/product/${x.prodId}`}>
                    <LazyLoad debounce={false} offsetVertical={200}>
                      <img src={x.imgSrc} alt={x.prodName} />
                    </LazyLoad>
                    <p style={{ marginTop: "15px" }}>{x.prodName}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default CartWishList;
