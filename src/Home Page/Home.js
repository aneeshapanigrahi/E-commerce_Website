import React, { useEffect } from "react";
import './HomePage.css';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export default class HomePage extends React.Component {
    render(){
        return(
            <div>
                <Row>
                    <div className="col-md-6 no-gutters">
                        <div className="left" data-aos="fade-right">
                            <div className="landing-top-img">
                                <div className="landing-top">
                                    <div className="inner">
                                        <h6 style={{ fontSize: "18px" }}>MIRROR CUSTOMIZATION WORLD</h6>
                                        <div className="act1"></div>
                                        <h2 style={{ margin: "40px 0px 30px 0px" }}>You Order We <br /><strong>Design !!</strong></h2>
                                        <p>Get Smart, Dress Smart with Customized Dresses. Branded Dresses are must in a fashionable wardrobe.</p>
                                        <button className="btn btn-light" >Explore Us</button>
                                    </div>
                                </div>

                                <div className="about-img">
                                    <img src="/images/about.jpg" alt="about_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}


// function HomePage() {
//     useEffect(() => {
//         AOS.init({
//             duration: 1500,
//         });

//     });

//     return (
//         <div>

//             <div className="home-header">
                // <div className="row no-gutters ">
                //     <div className="col-md-6 no-gutters">
                //         <div className="left" data-aos="fade-right">
                //             <div className="landing-top-img">
                //                 <div className="landing-top">
                //                     <div className="inner">
                //                         <h6 style={{ fontSize: "18px" }}>MIRROR CUSTOMIZATION WORLD</h6>
                //                         <div className="act1"></div>
                //                         <h2 style={{ margin: "40px 0px 30px 0px" }}>You Order We <br /><strong>Design !!</strong></h2>
                //                         <p>Get Smart, Dress Smart with Customized Dresses. Branded Dresses are must in a fashionable wardrobe.</p>
                //                         <button className="btn btn-light" >Explore Us</button>
                //                     </div>
                //                 </div>

                //                 <div className="about-img">
                //                     <img src="/images/about.jpg" alt="about_img" />
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
//                 </div>
//             </div>

//             <div className="about-container">
//                 <section id="abt-sec">
//                     <div className="about" data-aos="fade-down">
//                         <div className="about-title" data-aos="fade-up" >
//                             <br />
//                             <p style={{ fontSize: "50px", color: "white", fontWeight: "bolder" }}>About us</p>

//                         </div>
//                         <div className="abt" data-aos="fade-up">
//                             <p style={{ textAlign: "justify", color: "white", fontSize: "30px", }}>Our mission is to deliver fashion and make our customers happy! Mirror makes fashion available to everyone at a reasonable price. We love the work we do, the people we work for and the <span id="dots">...</span><span id="more"> people we work alongside! Did you guys ever wait for so many weeks to get your dress from the designer? or did you ever visit them too many times for alteration or just because you didn’t like design? No worries. You are at the right place Mirror lets customers to style their personal clothes and get them tailored with our exclusive designers.For reference you can even send or post some pictures regarding how to style your dresses or exactly in which style do you want them to be. You can even buy designer clothes specially designed in boutiques. If you are a designer you register and wait for the verification of your boutique, post your designs and sell them by logging on designer section. Mirror offers people a platform where they can get their desired clothes designed effortlessly. (This platform also offers designers to sell and design for the designers).So, what are you waiting for? Go on and make your design with us!</span>
//                                 <a onclick="myFunction()" id="myBtn" className="read"> Read More.. </a></p>
//                             <br />
//                             <br />
//                             <div className="row" style={{ display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "center" }} >
//                                 <div className="col b1"> <button className="btn btn-light" style={{ textTransform: "none", fontSize: "16px" }}>Customize</button></div>
//                                 <div className="col b2"> <button className="btn btn-light" style={{ textTransform: "none", fontSize: "16px" }}>Post</button></div>
//                             </div>



//                         </div>

//                     </div>
//                 </section>
//             </div>
//             <br />
//             <br />
//             <br />
//             <div className="carousel" id="sliderimg">
//                 <AliceCarousel autoPlay autoPlayInterval="4000">
//                     <img src={"/images/shop1.jpg"} className="sliderimg" />
//                     <img src={"/images/designimg.jpg"} className="sliderimg" />
//                     <img src={"/images/home.jpg"} className="sliderimg" />
//                     <img src={"/images/shop2.jpg"} className="sliderimg" />
//                 </AliceCarousel>
//             </div>

//             {/*slider boxes*/}
//             <div className="carousel" id="sliderimg">
//                 <AliceCarousel autoPlay autoPlayInterval="4000">

//                     <div style={{ marginLeft: "400px" }}>

//                         <Card style={{ width: '45rem', }}>
//                             <Card.Img variant="top" src="/images/shop1.jpg" />
//                             <Card.Body>
//                                 <Card.Title>Attractive Prices</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of
//                                     card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Read More.</Button>
//                             </Card.Body>
//                         </Card>

//                     </div>

//                     <div style={{ marginLeft: "400px" }}>

//                         <Card style={{ width: '45rem', }}>
//                             <Card.Img variant="top" src="/images/designimg.jpg" />
//                             <Card.Body>
//                                 <Card.Title>Amazing Discounts</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of
//                                     card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Read More.</Button>
//                             </Card.Body>
//                         </Card>

//                     </div>

//                     <div id="boxslider" style={{ marginLeft: "400px", }}>

//                         <Card style={{ width: '45rem', }}>
//                             <Card.Img variant="top" src="/images/shop2.jpg" />
//                             <Card.Body>
//                                 <Card.Title>Shirts</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of
//                                     card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Read More.</Button>
//                             </Card.Body>
//                         </Card>

//                     </div>
//                     <div id="boxslider" style={{ marginLeft: "400px", }}>

//                         <Card style={{ width: '45rem', }}>
//                             <Card.Img variant="top" src="/images/d1.jpg" />
//                             <Card.Body>
//                                 <Card.Title>Flat 40% off !!</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the bulk of
//                                     card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Read More.</Button>
//                             </Card.Body>
//                         </Card>

//                     </div>


//                 </AliceCarousel>
//             </div>
//             <div className="about-container">
//                 <section id="services">
//                     <p style={{
//                         textAlign: "center", fontFamily: 'sans-serif',
//                         fontSize: "35px", marginTop: " -16px", fontWeight: "bolder"
//                     }}>Our Services</p>
//                     <div className="container">
//                         <br />
//                         <br />

//                         <div className="row services" style={{
//                             textAlign: "center", fontFamily: 'sans-serif',
//                             fontSize: "25px", marginTop: " -16px", fontWeight: "bolder"
//                         }}>
//                             <div className="col-md-3 text-center" data-aos="zoom-in-up">
//                                 <div className="icon">
//                                     <i className="fa fa-truck"></i>
//                                 </div>
//                                 <br />
//                                 <h5>Fast Delivery</h5>
//                                 <p>we provide on-time delivery for our customers.</p>
//                             </div>
//                             <div className="col-md-3 text-center" data-aos="zoom-in-up">
//                                 <div className="icon">
//                                     <i className="fa fa-volume-control-phone"></i>
//                                 </div>
//                                 <br />
//                                 <h5>Support</h5>
//                                 <p>24/7 customer care.</p>
//                             </div>
//                             <div className="col-md-3 text-center" data-aos="zoom-in-up">
//                                 <div className="icon">
//                                     <i className="fa fa-shield"></i>
//                                 </div>
//                                 <br />
//                                 <h5>100% Payment secure</h5>
//                                 <p>Your payments are secure with us.</p>
//                             </div>
//                             <div className="col-md-3 text-center" data-aos="zoom-in-up">
//                                 <div className="icon">
//                                     <i className="fa fa-desktop"></i>
//                                 </div>
//                                 <br />
//                                 <h5>Customize your Design</h5>
//                                 <p>Choose your fit, fabric and design from our easy to select options.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//             </div>
//         </div>

//     );
// }


