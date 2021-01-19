import React from "react";
import axios from "axios";
class BuyNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "S", hash: "" };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  launchBOLT = () => {
    axios
      .post(`http://localhost:8000/api/${this.props.userId}/generatehash`, {
        key: "DOyLZmhW",
        salt: "DyQQqzLXy1",
        amount: this.props.price,
        name: this.props.name,
        value: this.state.value,
        userId: this.props.userId,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <form id="payment_form" onSubmit={this.launchBOLT}>
        <h2>Select size</h2>
        <select
          name="userChoice"
          value={this.state.value}
          id=""
          onChange={this.handleChange}
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <div style={{ marginTop: "2vw" }} className="buttons-b">
          <button>Buy now</button>
        </div>
      </form>
    );
  }
}
export default BuyNow;
