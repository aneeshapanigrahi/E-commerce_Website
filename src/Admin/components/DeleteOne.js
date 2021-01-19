import React from "react";
import Axios from "axios";
import { Button, FormControl, Col, Row, FormGroup } from "react-bootstrap";
class DeleteOne extends React.Component {
  state = { id: "", status: "" };
  handleChange = (e) => {
    this.setState({ id: e.target.value, status: "" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.id);
    if (this.state.id === "") {
      this.setState({ status: "Id cannot be empty" });
    } else {
      Axios.delete(`http://localhost:8000/admin/delete/${this.state.id}`)
        .then((resp) => {
          if (resp.data === "no data") {
            this.setState({ status: "No such product id exists" });
          } else {
            this.setState({
              status: "Successfully deleted product",
            });
          }
        })
        .catch((err) => console.log(err));

      this.setState({ id: "" });
    }
  };
  render() {
    return (
      <div style={{
        margin: " 50px auto 50px auto",
        boxShadow: "1px 1px 50px 0 rgba(0, 0, 0, 0.3)",
        maxWidth: "800px", backgroundColor: 'rgb(157, 186, 238)', textAlign: 'center', padding: '20px 50px 50px 50px'
      }}>
        <form onSubmit={this.handleSubmit}>
          <h1 style={{ margin: '10px auto 30px auto' }}>Enter the id of the product to be deleted</h1>
          <FormGroup as={Row}>
            <Col sm="10">
              <FormControl
                value={this.state.id}
                onChange={this.handleChange}
                type="text"
                placeholder="Product id"
              /></Col>
            <Col sm='2'>
              <Button type="submit" style={{ backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", color: "black" }}>Delete</Button>
            </Col>
          </FormGroup>
          <p style={{margin:'10px', position: 'absolute' }}>{this.state.status}</p>
        </form>
      </div>
    );
  }
}

export default DeleteOne;
