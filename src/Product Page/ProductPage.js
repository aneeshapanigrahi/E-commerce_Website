import React from "react";
import axios from "axios";
import PreviewImages from "../Product Page/PreviewImages";
import DeliveryChecker from "../Product Page/DeliveryChecker";
import CartWish from "../Product Page/CartWish";
import "./ProductPage.css";
import BuyNow from "../Product Page/BuyNow";

class ProductPage extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = {
      imgSrc: "",
      prodName: "",
      prodId: "",
      prodDetails: "",
      prodPrice: "",
      originalAmount: "",
      subCategory: "",
      availability: null,
      itemUrl: this.props.match.params.productId,
      previewImages: [],
      userId: this.props.match.url.split("/")[3],
    };
    // console.log(this.props.match.url.split("/")[3])
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/all/product/${this.state.itemUrl}`)
      .then((item) => {
        var selectedItem = item.data[0];

        this.setState({
          imgSrc: selectedItem.itemImageUrl,
          prodName: selectedItem.productName,
          prodId: selectedItem.productId,
          category: selectedItem.category,
          originalAmount: selectedItem.originalAmount,
          prodDetails: selectedItem.description,
          prodPrice: selectedItem.itemAmount,
          subCategory: selectedItem.subCategory,
          previewImages: selectedItem.previewImages,
          availability: selectedItem.availability,
        });
      });
  }
  render() {
    return (
      <div id="main">
        <div id="topDiv">
          <div id="imageDiv" className="container">
            <PreviewImages images={this.state.previewImages} />
            <CartWish
              prodName={this.state.prodName}
              prodId={this.state.prodId}
              prodPrice={this.state.prodPrice}
              availability={this.state.availability}
              imgSrc={this.state.imgSrc}
              buttonValue={this.state.prodId}
              userId={this.state.userId}
            />
          </div>
          <div id="specsDiv" className="container">
            <h1>{this.state.prodName}</h1>
            <p>Product Id: {this.state.prodId}</p>

            <div id="priceDetails-div" style={{ display: "flex" }}>
              <h2 id="price">₹ {this.state.prodPrice}</h2>
              <p
                style={{
                  textDecoration: "line-through",

                  marginTop: "6px",
                  marginLeft: "20px",
                  fontSize: "1.5rem",
                }}
              >
                ₹ {this.state.originalAmount}
              </p>
              <p
                style={{
                  color: "red",
                  fontSize: "0.9rem",
                  marginLeft: "10px",
                  marginTop: "15px",
                }}
              >
                {Math.floor(
                  100 - (this.state.prodPrice / this.state.originalAmount) * 100
                )}
                % OFF
              </p>
            </div>
            <h2>Category: </h2>
            <p style={{ color: "dark-grey" }}>{this.state.subCategory}</p>
            <h2 style={{ marginTop: "1vw" }}>Availability: </h2>
            {this.state.availability === true ? (
              <p id="available" style={{ marginBottom: "2vw" }}>
                In Stock
              </p>
            ) : (
              <p style={{ marginBottom: "1vw" }} id="not-available">
                Not available
              </p>
            )}
            {/* <BuyNow price={this.state.prodPrice===""?"":} /> */}
            {this.state.prodPrice === "" || this.props.prodName === "" ? (
              <></>
            ) : (
              <BuyNow
                price={this.state.prodPrice}
                name={this.state.prodName}
                userId={this.state.userId}
              />
            )}
            <DeliveryChecker />
          </div>
        </div>
        <div id="bottomDiv">
          <h1>Product Details</h1>
          <div>
            <p>{this.state.prodDetails}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
