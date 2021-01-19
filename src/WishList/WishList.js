import React from "react";

import CartWishList from "./CartWishList";
import TrendingWishList from "./TrendingWishList";

class WishList extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = { show: <CartWishList /> };
  }
  wishClick = () => {
    this.setState({ show: <CartWishList /> });
  };
  trendingClick = () => {
    console.log("cart is clicked");
    this.setState({ show: <TrendingWishList /> });
  };
  render() {
    // const userId = this.props.match.url.split("/wishList")[0];

    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <button
          style={{
            border: "none",
            backgroundColor: "#FFD662",
          }}
          onClick={this.wishClick}
        >
          Cart Wishlist
        </button>
        <button
          style={{
            marginLeft: "10px",
            border: "none",
            backgroundColor: "#FFD662",
          }}
          onClick={this.trendingClick}
        >
          Trending Wishlist
        </button>
        {this.state.show}
      </div>
    );
  }
}

export default WishList;
