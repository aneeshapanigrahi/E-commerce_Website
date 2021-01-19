import React from "react";
import Axios from "axios";
import Popup from "reactjs-popup";
import "./styles/AddNewItem.css";
import { Link } from "react-router-dom";
import { Button, FormGroup, Col, Row, FormLabel } from "react-bootstrap";
class AddNewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      productId: "",
      productName: "",
      itemAmount: "",
      originalAmount: "",
      itemImageUrl: "",
      originalAmount: "",
      description: "",
      url1: "",
      url2: "",
      url3: "",
      availability: "",
      stocks: 10,
      category: "",
      subCategory: "",
      disabled: true,
    };
  }
  handleTextChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "productName") {
      this.setState({
        productName: e.target.value,
      });
    } else if (e.target.name === "productId") {
      this.setState({
        productId: e.target.value,
      });
    } else if (e.target.name === "category") {
      this.setState({
        category: e.target.value,
      });
    } else if (e.target.name === "subCategory") {
      this.setState({
        subCategory: e.target.value,
      });
    } else if (e.target.name === "itemAmount") {
      this.setState({
        itemAmount: e.target.value,
      });
    } else if (e.target.name === "description") {
      this.setState({
        description: e.target.value,
      });
    } else if (e.target.name === "originalAmount") {
      this.setState({
        originalAmount: e.target.value,
      });
    } else if (e.target.name === "itemImageUrl") {
      this.setState({
        itemImageUrl: e.target.value,
      });
    } else if (e.target.name === "url1") {
      this.setState({
        url1: e.target.value,
      });
    } else if (e.target.name === "url2") {
      this.setState({
        url2: e.target.value,
      });
    } else if (e.target.name === "url3") {
      this.setState({
        url3: e.target.value,
      });
    } else if (e.target.name === "availability") {
      this.setState({
        availability: e.target.value,
        disabled: false,
      });
    } else if (e.target.name === "stocks") {
      this.setState({
        stocks: e.target.value,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submtted");
    Axios.post("http://localhost:8000/admin", {
      productName: this.state.productName,
      productId: this.state.productId,
      itemAmount: this.state.itemAmount,
      originalAmount: this.state.originalAmount,
      itemImageUrl: this.state.itemImageUrl,
      category: this.state.category,
      url1: this.state.url1,
      url2: this.state.url2,
      url3: this.state.url3,
      availability: this.state.availability,
      stocks: this.state.stocks,
      description: this.state.description,
      subCategory: this.state.subCategory,
    })
      .then((resp) => {
        console.log(resp);
        if (resp.data !== "Exists") {
          this.setState({
            status: "",
            productId: "",
            productName: "",
            itemAmount: "",
            originalAmount: "",
            itemImageUrl: "",
            originalAmount: "",
            url1: "",
            url2: "",
            url3: "",
            availability: "",
            stocks: 10,
            category: "",
            subCategory: "",
            disabled: true,
            status: "Succuessfully Added",
            description: "",
          });
        } else {
          this.setState({
            status: "",
            productId: "",
            productName: "",
            itemAmount: "",
            originalAmount: "",
            itemImageUrl: "",
            originalAmount: "",
            url1: "",
            url2: "",
            url3: "",
            availability: "",
            stocks: 10,
            category: "",
            subCategory: "",
            disabled: true,
            description: "",
            status: "Error in adding the product. Please try again.",
          });
        }
      })
      .catch((err) => console.log(err));
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <div
          style={{
            margin: " 50px auto 50px auto",
            boxShadow: "1px 1px 50px 0 rgba(0, 0, 0, 0.3)",
            maxWidth: "800px",
          }}
        >
          <form
            id="AddNewItem"
            onSubmit={this.handleSubmit}
            style={{ padding: "50px 10px 50px 10px" }}
          >
            <div className="form-group">
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Product Id</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="productId"
                    onChange={this.handleTextChange}
                    value={this.state.productId}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Product name</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="productName"
                    onChange={this.handleTextChange}
                    value={this.state.productName}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Category</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="category"
                    onChange={this.handleTextChange}
                    value={this.state.category}
                    placeholder="Men, Women or kids"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Sub category</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="subCategory"
                    onChange={this.handleTextChange}
                    value={this.state.subCategory}
                    placeholder="Kurta, Lehenga ..."
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Discounted Price</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="number"
                    name="itemAmount"
                    onChange={this.handleTextChange}
                    value={this.state.itemAmount}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Original Price</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="number"
                    name="originalAmount"
                    onChange={this.handleTextChange}
                    value={this.state.originalAmount}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Image Url</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="url"
                    name="itemImageUrl"
                    onChange={this.handleTextChange}
                    value={this.state.itemImageUrl}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Preview Images</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="url1"
                    onChange={this.handleTextChange}
                    value={this.state.url1}
                    required
                    style={{ marginBottom: "20px" }}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="url2"
                    onChange={this.handleTextChange}
                    value={this.state.url2}
                    required
                    style={{ marginBottom: "20px" }}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="url3"
                    onChange={this.handleTextChange}
                    value={this.state.url3}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Availability</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="text"
                    name="availability"
                    onChange={this.handleTextChange}
                    value={this.state.availability}
                    placeholder="true or false"
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Description</h1>
                </FormLabel>
                <Col sm="8">
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.handleTextChange}
                    value={this.state.description}
                    rows="10"
                    style={{ width: "80%", margin: "auto" }}
                    required
                  />
                </Col>
              </FormGroup>
              <FormGroup as={Row}>
                <FormLabel column sm="4">
                  <h1>Stocks</h1>
                </FormLabel>
                <Col sm="8">
                  <input
                    className="form-control"
                    type="number"
                    name="stocks"
                    onChange={this.handleTextChange}
                    value={this.state.stocks}
                  />
                </Col>
              </FormGroup>
              <div>
                <Popup
                  trigger={
                    <Button
                      type="submit"
                      disabled={this.state.disabled}
                      style={{
                        backgroundColor: "#ffd662ff",
                        borderColor: "#ffd662ff",
                        color: "black",
                      }}
                    >
                      Submit
                    </Button>
                  }
                  modal
                  closeOnDocumentClick
                >
                  <span>
                    <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
                      {this.state.status}
                    </h1>
                    {/* <Link to="/admin/customizeProducts/additem">
                      <button>Add another product</button>
                    </Link> */}
                    <Link to="/admin/customizeProducts">
                      <button>Go back</button>
                    </Link>
                  </span>
                </Popup>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewItem;
