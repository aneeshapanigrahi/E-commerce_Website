import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CartWish extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = {
      dataLoad: false,
      cartText: false,
      wishText: false,
    };
    console.log(this.props.userId)
  }
  ///---------------Checking if the item is already in cart-------------///
  componentDidMount() {
    let thisProduct = window.location.href.split("/")[4];
    axios
      .get(
        `http://localhost:8000/api/check/${this.props.userId}/cart/${thisProduct}`
      )
      .then((res) => this.setState({ cartText: res.data }))
      .catch((err) => console.log(err));
    axios
      .get(
        `http://localhost:8000/api/check/${this.props.userId}/cartWishList/${thisProduct}`
      )
      .then((res) => {
        this.setState({ wishText: res.data });
      })
      .catch((err) => console.log(err));
  }
  // ----------------Adding a product to cart-------------------

  cartClick = (event) => {
    this.setState({ dataLoad: true });
    axios
      .post(
        `http://localhost:8000/api/${this.props.userId}/cart/${this.props.buttonValue}`,
        {
          prodName: this.props.prodName,
          prodId: this.props.prodId,
          prodPrice: this.props.prodPrice,
          availability: this.props.availability,
          imgSrc: this.props.imgSrc,
          quantity: "1",
        }
      )
      .then((resp) => this.setState({ cartText: true, dataLoad: false }))
      .catch((err) => console.log(err));
    window.location.reload(true);
  };

  wishClick = (event) => {
    this.setState({ dataLoad: true });
    axios
      .post(
        `http://localhost:8000/api/${this.props.userId}/cartWishList/${this.props.buttonValue}`,
        {
          prodId: this.props.prodId,
          prodName: this.props.prodName,
          prodPrice: this.props.prodPrice,
          imgSrc: this.props.imgSrc,
        }
      )
      .then((resp) => {
        this.setState({ wishText: resp.data.new, dataLoad: false });
      })
      .catch((err) => console.log(err));
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <div className="container buttons-a">
          {this.state.cartText === true ? (
            <Link to={`/cart/all/${this.props.userId}`}>
              <button>Go to cart</button>
            </Link>
          ) : (
            <button onClick={this.cartClick} disabled={this.state.dataLoad}>
              Add to cart
            </button>
          )}

          <button
            value={this.props.buttonValue}
            onClick={this.wishClick}
            disabled={this.state.dataLoad}
            type="submit"
          >
            {this.state.wishText === true ? (
              <>Added to Wishlist</>
            ) : (
              <> Add to Wishlist</>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default CartWish;
