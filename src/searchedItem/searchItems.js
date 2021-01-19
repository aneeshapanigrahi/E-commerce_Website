import React from "react";
import axios from "axios";
import LazyLoad from "react-lazy-load";
import "./searchItems.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

class SearchItem extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = { text: "", matchingItems: [] };
    console.log(this.props.match.url.split("/")[4]);
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/all/products/${
          this.props.match.url.split("/")[4]
        }`
      )

      .then((resp) => {
        this.setState({
          text: resp.data.searchQuery,
          matchingItems: resp.data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    if (this.props.match.url.split("/")[4] !== this.state.text) {
      window.location.reload(true);
      axios
        .get(
          `http://localhost:8000/all/products/${
            this.props.match.url.split("/")[4]
          }`
        )
        .then((resp) => {
          this.setState({
            text: resp.data.searchQuery,
            matchingItems: resp.data.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  // handleClick = (i) => {
  //   console.log("i got clicked", i);
  // };

  render() {
    console.log(this.props.match);
    return (
      <div id="search-items-div">
        <h1 className="query-info">
          Found {this.state.matchingItems.length} results for your query "
          {this.state.text}"
        </h1>
        <div className="hr"></div>
        <div
          style={{
            position: "fixed",
            top: "0",
            width: "100%",
            textAlign: "center",
            zIndex: "2",
            display: "flex",
            justifyContent: "center",
            fontSize: "1rem",
          }}
        >
          <ScrollToTop
            style={{
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              backgroundColor: "orange",
            }}
            className="container"
            showUnder={800}
          >
            <span
              style={{
                position: "auto",
                paddingLeft: "8px",
                display: "flex",
              }}
            >
              Go to top
              <img
                style={{ width: "20px", height: "20px", marginLeft: "7px" }}
                src="https://img.icons8.com/ios-glyphs/30/000000/up-squared.png" alt=""
              />
            </span>
          </ScrollToTop>
        </div>
        <div id="search-contents">
          {this.state.matchingItems.map((x, index) => (
            <div key={index} id="search-card">
              <Link
                to={`/product/${x.productId}/${
                  this.props.match.url.split("/")[4]
                }`}
              >
                <LazyLoad debounce={false} offsetVertical={500}>
                  <img
                    className="img-fluid"
                    src={x.itemImageUrl}
                    alt={x.productName}
                  />
                </LazyLoad>
                <div>
                  <h1>{x.productName}</h1>
                  <div style={{ position: "relative" }}>
                    <p className="price-tag">₹ {x.itemAmount}</p>
                    <p
                      style={{
                        position: "absolute",
                        top: "6px",
                        left: "60px",
                        textDecoration: "line-through",
                      }}
                    >
                      {x.originalAmount}
                    </p>
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        marginTop: "0",
                      }}
                    >
                      {Math.floor(
                        100 - (x.itemAmount / x.originalAmount) * 100
                      )}
                      % OFF
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchItem;
