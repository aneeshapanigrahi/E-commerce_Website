import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllProduct.css";

class AllProduct extends React.Component {
constructor(props, {match}){
  super(props, {match})
  this.state = { allProducts: [] };

}

  componentDidMount() {
    axios.get("http://localhost:8000/all").then((items) => {
      this.setState({ allProducts: items.data });
    });
  }

  render() {
    const userId = this.props.match.url.split("/")[3]
    console.log(userId)
    return (
      <div id="product-container">
        {this.state.allProducts.map((item) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={item.productId}
              to={`/product/${item.productId}/${userId}`}
            >
              <img src={item.itemImageUrl} alt={item.productName} />
              <p>₹ {item.itemAmount}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default AllProduct;
