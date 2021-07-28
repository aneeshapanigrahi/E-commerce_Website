import React, { useEffect } from "react";
import './HomePage.css';
import { Card, Button, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });

    });

    return (
        <div style={{marginTop:'-50px'}}>

            <div className="home-header">
                <div className="row no-gutters ">
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
                </div>
            </div>

            <div className="about-container">
                <section id="abt-sec">
                    <div className="about" data-aos="fade-down">
                        <div className="about-title" data-aos="fade-up" >
                            <br />
                            <p style={{ fontSize: "50px", color: "white", fontWeight: "bolder" }}>About us</p>

                        </div>
                        <div className="abt" data-aos="fade-up">
                            <p style={{ textAlign: "justify", color: "white", fontSize: "30px", }}>Our mission is to deliver fashion and make our customers happy! Mirror makes fashion available to everyone at a reasonable price. We love the work we do, the people we work for and the <span id="dots">...</span><span id="more"> people we work alongside! Did you guys ever wait for so many weeks to get your dress from the designer? or did you ever visit them too many times for alteration or just because you didn’t like design? No worries. You are at the right place Mirror lets customers to style their personal clothes and get them tailored with our exclusive designers.For reference you can even send or post some pictures regarding how to style your dresses or exactly in which style do you want them to be. You can even buy designer clothes specially designed in boutiques. If you are a designer you register and wait for the verification of your boutique, post your designs and sell them by logging on designer section. Mirror offers people a platform where they can get their desired clothes designed effortlessly. (This platform also offers designers to sell and design for the designers).So, what are you waiting for? Go on and make your design with us!</span>
                                <a onclick="myFunction()" id="myBtn" className="read"> Read More.. </a></p>
                            <br />
                            <br />
                            <div style={{display:'flex', justifyContent:'center'}} >
                            <Link to='/customizationPage'>
                                <button className="btn btn-light col b1 " style={{ textTransform: "none", backgroundColor:'#FFD662FF',borderRadius:'4px',border:'none' , fontSize: "16px", maxWidth:'200px' }}>Customize</button>
                                </Link>
                                </div>
                        
                        </div>

                    </div>
                </section>
            </div>
           
            <div className="about-container">
                <section id="services">
                    <p style={{
                        textAlign: "center", fontFamily: 'sans-serif',
                        fontSize: "35px", marginTop: " -16px", fontWeight: "bolder"
                    }}>Our Services</p>
                    <div className="container">
                        <br />
                        <br />

                        <div className="row services" style={{
                            textAlign: "center", fontFamily: 'sans-serif',
                            fontSize: "25px", marginTop: " -16px", fontWeight: "bolder"
                        }}>
                            <div className="col-md-3 text-center" data-aos="zoom-in-up">
                                <div className="icon">
                                    <i className="fa fa-truck"></i>
                                </div>
                                <br />
                                <h5>Fast Delivery</h5>
                                <p>we provide on-time delivery for our customers.</p>
                            </div>
                            <div className="col-md-3 text-center" data-aos="zoom-in-up">
                                <div className="icon">
                                    <i className="fa fa-volume-control-phone"></i>
                                </div>
                                <br />
                                <h5>Support</h5>
                                <p>24/7 customer care.</p>
                            </div>
                            <div className="col-md-3 text-center" data-aos="zoom-in-up">
                                <div className="icon">
                                    <i className="fa fa-shield"></i>
                                </div>
                                <br />
                                <h5>100% Payment secure</h5>
                                <p>Your payments are secure with us.</p>
                            </div>
                            <div className="col-md-3 text-center" data-aos="zoom-in-up">
                                <div className="icon">
                                    <i className="fa fa-desktop"></i>
                                </div>
                                <br />
                                <h5>Customize your Design</h5>
                                <p>Choose your fit, fabric and design from our easy to select options.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>

    );
}
export default HomePage;