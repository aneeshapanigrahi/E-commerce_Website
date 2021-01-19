import React from "react";
import axios from "axios";
import ItemCard from "./itemCard";

class Cart extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = { cartArray: [], userId: this.props.match.url.split("/")[3] };
    console.log(this.state.userId);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/${this.state.userId}/cart`)
      .then((userData) => {
        console.log(userData);
        this.setState({ cartArray: userData.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let initialTotal = 0;
    this.state.cartArray.forEach((item) => {
      initialTotal += +item.quantity * item.prodPrice;
    });
    return (
      <div>
        <ItemCard
          cartArray={this.state.cartArray}
          initialTotal={initialTotal}
        />
      </div>
    );
  }
}

export default Cart;
