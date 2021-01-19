import React from "react";
import axios from "axios";
import "./DeliveryChecker.css";

class DeliveryChecker extends React.Component {
  //not able to handle the request from react
  constructor(props, { match }) {
    super(props, { match });

    this.state = {
      userPin: "",
      deliveryTime: "",
      dataisLoaded: false,
      text: "",
    };
  }
  onChange = (e) => {
    this.setState({ userPin: e.target.value });
  };
  onClickEvent = (e) => {
    e.preventDefault();
    console.log(this.state.userPin.length);
    this.state.userPin.length === 6
      ? axios
          .get(`http://localhost:8000/pin/${this.state.userPin}`)
          .then((resp) => {
            if (resp.data.deliveryTime === undefined) {
              this.setState({ text: "Delivery not yet available." });
            } else {
              this.setState({
                dataisLoaded: true,
                deliveryTime: resp.data.deliveryTime,
                text:
                  "Delivery within " +
                  resp.data.deliveryTime +
                  " business days.",
              });
            }
          })
          .catch((err) => console.log(err))
      : this.setState({ text: "Not a valid pin" });
  };

  render() {
    return (
      <div id="delivery-box">
        <h2>Delivery:</h2>

        <div className="container-main">
          <p>Check for delivery time</p>
          <div className="box-search container-fluid ">
            <input
              className="form-control"
              type="number"
              value={this.state.userPin}
              onChange={this.onChange}
              name="Pincode"
              placeholder="Enter pincode"
            />
            <button onClick={(e) => this.onClickEvent(e)}>Check</button>
          </div>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}
//nBot fixed delivery

export default DeliveryChecker;
