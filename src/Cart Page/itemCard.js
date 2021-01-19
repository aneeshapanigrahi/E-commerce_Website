import React from "react";
import "./itemCard.css";
import axios from "axios";
import { connect } from 'react-redux';
import { TotalPrice } from '../actions';
import { Link, useLocation } from "react-router-dom";
class ItemCard extends React.Component {
  constructor(props, { match }) {
    super(props, { match });
    this.state = {
      total: 0,
      onDataLoad: false,
      userId: window.location.href.split("/")[5],
    };
    console.log(this.state.userId);
  }

  componentDidMount() {
    this.setState({ onDataLoad: true });
  }

  decrement = (event, id) => {
    const { cartArray } = this.props;
    cartArray.forEach((item) => {
      if (item.prodId === id) {
        item.quantity === "1"
          ? (item.quantity = 1)
          : (item.quantity = +item.quantity - 1);
        axios.put(
          `http://localhost:8000/api/${this.state.userId}/customize/cart/${id}/${item.quantity}`
        );
      }
    });

    this.setState({ cartArray: cartArray, onDataLoad: false });
    event.preventDefault();
    this.totalPrice();
  };
  increment = (event, id) => {
    const { cartArray } = this.props;
    cartArray.forEach((item) => {
      if (item.prodId === id) {
        item.quantity === "10"
          ? (item.quantity = 10)
          : (item.quantity = +item.quantity + 1);
        axios.put(
          `http://localhost:8000/api/${this.state.userId}/customize/cart/${id}/${item.quantity}`
        );
      }
    });
    this.setState({ cartArray: cartArray, onDataLoad: false });
    event.preventDefault();
    this.totalPrice();
  };

  removeItem = (id) => {
    const { cartArray } = this.props;
    cartArray.forEach((item, index) => {
      if (item.prodId === id) {
        cartArray.splice(index, 1);
        axios.put(
          `http://localhost:8000/api/${this.state.userId}/customize/cart/${id}/`
        );
      }
      this.setState({ cartArray: cartArray, onDataLoad: false });
      this.totalPrice();
    });
    window.location.reload(true);
  };

  totalPrice = () => {
    const { cartArray } = this.props;

    const res = cartArray.reduce((prev, item) => {
      return prev + item.quantity * item.prodPrice;
    }, 0);
    this.setState({ total: res, onDataLoad: false });
  };

  payumoney = () => {

    const makeid = (length) => {
      let result = '';
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    let txnid = makeid(2);

    let pd = {
      key: 'sU7hGkFk',
      txnid: txnid,
      amount: this.state.onDataLoad ? this.props.initialTotal : this.state.total + 50,
      firstname: this.state.userId,
      email: this.state.userId,
      phone: 8920654112,
      productinfo: 'Shipping',
      surl: 'http://localhost:8000/paynow/success',
      furl: 'http://localhost:8000/paynow/fail',
      hash: ''
    };

    let data = {
      'txnid': pd.txnid,
      'email': pd.email,
      'amount': pd.amount,
      'productinfo': pd.productinfo,
      'firstname': pd.firstname,
      //'userId': pd.userId
    };

    fetch('http://localhost:8000/paynow/payment/payumoney', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((a) => {
      return a.json();
    }).then((json) => {
      pd.hash = json['hash'];
      this.redirectToPayU(pd);
    })
  }

  redirectToPayU = (pd) => {

    let data = {
      'txnid': pd.txnid,
      'email': pd.email,
      'amount': pd.amount,
      'productinfo': pd.productinfo,
      'firstname': pd.firstname,
      //'userId': pd.userId
    };

    window.bolt.launch(pd, {
      responseHandler: (response) => {
        console.log(response);
        fetch('http://localhost:8000/paynow/payment/payumoney/response', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response.response)
        }).then((a) => {
          return a.json();
        }).then((json) => {
          this.props.totalPrice(data);
          axios.post(`http://localhost:8000/paid/${this.props.userId}`, data)
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
            })
        });
      },
      catchException: (response) => {
        console.log(response)
      }
    });
  }

  render() {
    const { cartArray } = this.props;

    return (
      <div>
        {cartArray.length === 0 ? (
          <div id="no-items-text">
            <h1>No items in cart</h1>
          </div>
        ) : (
            <div id="items-div">
              <div>
                <h1>Total cart item: {cartArray.length}</h1>

                {cartArray.map((item, index) => {
                  return (
                    <div key={index} id="items-card">
                      <div>
                        <img src={item.imgSrc} alt="" />
                      </div>
                      <div>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/product/${item.prodId}/`}
                        >
                          <p>{item.prodName}</p>
                        </Link>

                        <h1>₹ {item.prodPrice * item.quantity}</h1>
                        <div style={{ position: "relative" }}>
                          <p style={{ textDecoration: "line-through" }}>
                            ₹
                          {item.prodPrice * item.quantity +
                              0.35 * item.prodPrice}
                          </p>
                          <p
                            style={{
                              position: "absolute",
                              top: "0.5vw",
                              left: "90px",
                              fontSize: "0.9rem",
                              color: "red",
                            }}
                          >
                            35% OFF
                        </p>
                        </div>

                        <p style={{ marginTop: "2vw" }} id="prodId">
                          {item.prodId}
                        </p>
                        <p>{item.availability}</p>

                        <div id="counter">
                          <button
                            onClick={(event) =>
                              this.decrement(event, item.prodId)
                            }
                          >
                            -
                        </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={(event) =>
                              this.increment(event, item.prodId)
                            }
                          >
                            +
                        </button>
                        </div>
                        <div id="remove-button">
                          <button onClick={() => this.removeItem(item.prodId)}>
                            Remove item
                        </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div id="price-div">
                {this.state.onDataLoad === true ? (
                  <div>
                    <p>Total product price:</p>{" "}
                    <h1>₹ {this.props.initialTotal}</h1>
                  </div>
                ) : (
                    <div>
                      <p>Total product price:</p> <h1>₹ {this.state.total}</h1>
                    </div>
                  )}
                <div>
                  <p>Shipping charge: </p>
                  <h1>₹ 50</h1>
                </div>

                {this.state.onDataLoad === true ? (
                  <div>
                    <p>Total amount:</p> <h1>₹ {this.props.initialTotal + 50}</h1>
                  </div>
                ) : (
                    <div>
                      <p>Total amount:</p> <h1>₹ {this.state.total + 50}</h1>
                    </div>
                  )}

                <button onClick={() => this.payumoney()}>Proceed to checkout</button>
              </div>
            </div>
          )}
      </div>
    );
  }
}


export default connect(null, { TotalPrice })(ItemCard);
