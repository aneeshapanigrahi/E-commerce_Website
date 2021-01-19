import React from 'react';
import './cart-style.css'
import axios from 'axios';

class Checkout extends React.Component {

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
            amount: 10,
            firstname: 'lakshy',
            email: 'test@cb.lk',
            //userId: 'test@cb.lk',
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
                    console.log(json);
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
        return (
            <div style={{ backgroundColor: "white", fontSize: "20px" }}>

                <div >

                    <div className="container-fluid" style={{ backgroundColor: "white", fontSize: "20px" }}>
                        <div className="row" style={{ backgroundColor: "white", fontSize: "20px" }}>
                            <div className="col-md-10 col-11 mx-auto" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                <div className="row mt-5 mb-5 gx-3" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                    {/* <!-- left side div --> */}

                                    <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                        <h2 className="py-1 font-weight-bold mb-5">Contact Details</h2>

                                        <div className="form-group" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                            <input type="text" className="form-control" placeholder="Name" style={{ backgroundColor: "white", fontSize: "20px" }} />
                                        </div>
                                        <div className="form-group">

                                            <input type="number" className="form-control" placeholder="Mobile Number" style={{ backgroundColor: "white", fontSize: "20px" }} />
                                        </div>
                                        <h4 style={{ backgroundColor: "white", fontSize: "20px" }}>Address</h4>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Area and Street" style={{ backgroundColor: "white", fontSize: "20px" }}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="City" style={{ backgroundColor: "white", fontSize: "20px" }} />
                                        </div>
                                        <div className="form-group" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                            <select className="form-control">
                                                <option value="" style={{ backgroundColor: "white", fontSize: "400px" }}>--State--</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Landmark" style={{ backgroundColor: "white", fontSize: "20px" }} />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Pincode" style={{ backgroundColor: "white", fontSize: "20px" }} />
                                        </div>
                                        <br />
                                        <h4 style={{ fontSize: "20px", }}>Save Address as</h4>
                                        <button type="submit" className="btn btn-primary" style={{ fontSize: "20px", marginBottom: "20px", backgroundColor: "#68ebd1", borderRadius: "5px", color: " black" }}>Home</button>
                                        <button type="submit" className="btn btn-primary" style={{ fontSize: "20px", marginBottom: " 20px", backgroundColor: " #68ebd1", fontSize: "20px", borderRadius: "5px", color: "black" }}>Office</button>
                                        <br />
                                        <p style={{ color: "black" }}><input type="checkbox" style={{ backgroundColor: "white", fontSize: "20px" }} /> Make This is my default address</p>
                                        <br />
                                        <button type="submit" className="btn btn-primary" style={{ fontSize: "20px", marginBottom: "20px", marginTop: "-10px", backgroundColor: "#68ebd1", borderRadius: "5px", color: "black" }}>Add Address</button>




                                    </div>


                                    {/* <!-- right side div --> */}
                                    <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                        <div className="right_side p-3 shadow bg-white" >

                                            <div className="price_indiv mb-10 d-flex justify-content-between">
                                                <h2>Total amount</h2>
                                                <h2>Rs.<span id="product_total_amt">1550</span></h2>
                                            </div>
                                            <div className="price_indiv d-flex justify-content-between">
                                                <p>Men's Blazer</p>
                                                <p>Rs.<span id="shipping_charge">1000.0</span></p>
                                            </div>
                                            <div className="price_indiv d-flex justify-content-between">
                                                <p>Men's shirt</p>
                                                <p>Rs.<span id="shipping_charge">500.0</span></p>
                                            </div>
                                            <div className="price_indiv d-flex justify-content-between">
                                                <p>Shipping Charge</p>
                                                <p>Rs.<span id="shipping_charge">50.0</span></p>
                                            </div>
                                            <button type="submit" className="btn btn-primary" style={{ fontSize: "20px", marginBottom: "20px", backgroundColor: "#68ebd1", borderRadius: "5px", color: "black" }} onClick={() => this.payumoney()}>Continue</button>

                                        </div>






                                        {/* <!-- choose address --> */}
                                        <div className="mt-3 shadow p-3 bg-white" style={{ backgroundColor: "white", fontSize: "20px" }}>
                                            <div className="pt-4">
                                                <h5 className="mb-4">Choose Address <i className="fa fa-truck"></i></h5>

                                                <div className="home" style={{ border: "1px solid black", padding: "5px", backgroundColor: "white", fontSize: "20px" }}  >
                                                    <input style={{ backgroundColor: "white", fontSize: "20px" }} type="checkbox" name="" /> Home
<br />
564, Mumbai, Maharastra, 564355
<br />
8721****96
</div>
                                                <br />
                                                <div className="office" style={{ border: "1px solid black", padding: "5px" }}>
                                                    <input style={{ backgroundColor: "white", fontSize: "20px" }} type="checkbox" name="" /> Office
<br />
6457, thane, Mumbai, Maharastra, 564388
<br />
8721****66
</div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default Checkout;