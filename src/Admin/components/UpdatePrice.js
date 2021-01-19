import React from "react";
import Axios from "axios";
import { Col, FormGroup, Row, FormLabel, Button, FormControl } from "react-bootstrap";
class UpdatePrice extends React.Component {
  state = { productId: "", status: "", updatedPrice: "" };
  handleChange = (e) => {
    this.setState({ status: "" });
    if (e.target.name === "ProductId") {
      this.setState({ productId: e.target.value });
    } else if (e.target.name === "UpdatedPrice") {
      this.setState({ updatedPrice: e.target.value });
    }
  };
  handleClick = (e) => {
    console.log(this.state.text);
    if (this.state.productId === "" || this.state.updatedPrice === "") {
      this.setState({ status: "Both fields are required" });
    } else {
      Axios.put(
        `http://localhost:8000/admin/updatePrice/${this.state.productId}/${this.state.updatedPrice}`
      )
        .then((resp) => {
          if (resp.data === "no data") {
            this.setState({
              status: "Product id doesnot match any items",
              productId: "",
              updatedPrice: "",
            });
          } else {
            this.setState({
              status: "Successfully updated the price",
              productId: "",
              updatedPrice: "",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <div style={{
        margin: " 50px auto 50px auto",
        boxShadow: "1px 1px 50px 0 rgba(0, 0, 0, 0.3)",
        maxWidth: "800px", backgroundColor: 'rgb(157, 186, 238)', textAlign: 'center', padding: '20px 30px 20px 30px'
      }}>
        <h1 style={{ margin: '10px auto 30px auto' }}><strong>Update price if a product</strong></h1>
        <FormGroup as={Row}>
          <FormLabel column sm="4">
            <h3>Enter product id</h3>
          </FormLabel>
          <Col sm="8">
            <FormControl
              name="ProductId"
              value={this.state.productId}
              type="text"
              onChange={this.handleChange}
            /></Col>
        </FormGroup>
        <FormGroup as={Row}>
          <FormLabel column sm="4">
            <h3>Enter the updated price</h3>
          </FormLabel>
          <Col sm="8">
            <FormControl
              name="UpdatedPrice"
              value={this.state.updatedPrice}
              type="text"
              onChange={this.handleChange}
            /></Col>
        </FormGroup>
        <Button onClick={this.handleClick} style={{ backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", color: "black" }}>Update Price</Button>
        <p style={{ margin: '30px', position: 'relative' }}>{this.state.status}</p>
      </div>
    );
  }
}

export default UpdatePrice;
