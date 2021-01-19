import React from "react";
import Axios from "axios";
import { Button, FormControl, FormGroup, Row, Col } from "react-bootstrap";
class DeleteCategory extends React.Component {
  state = { text: "", status: "" };
  handleChange = (e) => {
    this.setState({ text: e.target.value, status: "" });
  };
  handleClick = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.setState({ status: "Category name cannot be empty" });
    } else {
      Axios.delete(
        `http://localhost:8000/admin/delete/${this.state.text}`
      ).then((resp) => {
        if (resp.data === "no data") {
          this.setState({ status: "No such category exists." });
        } else {
          this.setState({ status: "Successfully deleted the category" });
        }
      });
    }
  };
  render() {
    return (
      <div style={{
        margin: " 50px auto 50px auto",
        boxShadow: "1px 1px 50px 0 rgba(0, 0, 0, 0.3)",
        maxWidth: "800px", backgroundColor: 'rgb(157, 186, 238)', textAlign: 'center', padding: '20px 50px 20px 50px'
      }}>
        <h1 style={{ margin: '10px auto 30px auto' }}><strong>Enter the category which you want to delete</strong></h1>
        <p>Category names are case-sensitive</p>
        <FormGroup as={Row}>
          <Col sm="10">
            <FormControl
              onChange={this.handleChange}
              type="text"
              name="subCategory"
              value={this.state.text}
            /></Col>
          <Col sm='2'>
            <Button onClick={this.handleClick} style={{ backgroundColor: "#ffd662ff", borderColor: "#ffd662ff", color: "black" }}>Delete</Button>
          </Col>
        </FormGroup>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default DeleteCategory;
