import React, { Component } from "react";
import { Button, Col, Form, Container, Row, Alert } from 'react-bootstrap';
import "./Home.css";
import Sidenav from './components/Sidenav';
import Summary from '../Customize/Summary';
import Toolbar from './components/Toolbar';
import Backdrop from './components/Backdrop';
import Measure from '../Customize/Measure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {
    state = {
        image: 'https://www.siliconvalleymedicalclinic.com/wp-content/plugins/complianz-gdpr/assets/images/placeholder.jpg',
        disabled: false,
        sideDrawerOpen: false

    }
    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ image: reader.result, disabled: true })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    render() {
        const { image } = this.state
        let backdrop

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        const handleShow = () => this.setState({ show: true });
        return (
            <div style={{ height: '100%' }} className="Home">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <Sidenav show={this.state.sideDrawerOpen} />
                {backdrop}
                <div className="lander">
                    <Alert style={{ position: 'absolute', backgroundColor: "#ffd662ff", flex: 'display', alignItems: "center" }} id="alert" show={this.state.show}>
                        <FontAwesomeIcon icon="arrow-circle-left" style={{ position: 'relative', marginRight: '10px' }} /> Choose a category to proceed
                        </Alert>
                    <Container className="customize">
                        <Row>
                            <Col>
                                <div className="img-holder">
                                    <img src={image} alt="" id="img" className="img" />
                                </div>
                                <input type="file" id="input" accept="image/*" onChange={this.imageHandler} disabled></input>
                                <label htmlFor="input" className="image-upload" onClick={handleShow} >
                                    Upload Image
                            </label>
                            </Col>
                            <Col style={{ paddingTop: "50px" }}>

                                {/* className="scale"className="instructions" */}
                                {/* <div align="left">
                                    <Container style={{ width: "500px" }} >
                                        <h2>Instructions To Upload</h2>
                                        <ul >
                                            <li>Uploaded image should be clear.</li>
                                            <li>Mention if there are any addtional requirements.</li>
                                            <li>Open the page where you want insert the image.</li>
                                            <li>Use your keywords in photo option.</li>
                                            <li>In the Add images select, add selected to insert image into the page.</li>
                                        </ul>
                                    </Container>
                                </div> */}
                                <Measure />
                                <Summary />
                                <Button type="submit" variant="secondary" style={{ marginTop: "2em", }} className="scalebtn" disabled={this.state.disabled} block onClick={handleShow}>Customize</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Form>
                        <Container className="form mx-auto">
                            <Form.Group as={Row} className="field">
                                <Form.Label column><h5>Get designer home</h5> </Form.Label>
                                <Col align='right'>
                                    <input type="checkbox" value="getdes" name="getdesigner" />
                                </Col>
                            </Form.Group>
                        </Container>
                        <Container className="form mx-auto">
                            <Form.Group as={Row} className="field">
                                <Form.Label column><h5>Don't have the material</h5> </Form.Label>
                                <Col align='right'>
                                    <input type="radio" value="no-mat" name="material" defaultChecked />
                                </Col>
                            </Form.Group>
                        </Container>
                        <Container className="form mx-auto">
                            <Form.Group as={Row} className="field">
                                <Form.Label column><h5>Have the material</h5> </Form.Label>
                                <Col align='right'>
                                    <input type="radio" value="mat" name="material" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Mobile Number: </Form.Label>
                                <Col>
                                    <Form.Control type="digit" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Email ID: </Form.Label>
                                <Col>
                                    <Form.Control type="email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Address: </Form.Label>
                                <Col>
                                    <Form.Control type="textarea" rows="1" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>City: </Form.Label>
                                <Col>
                                    <Form.Control as="select" placeholder="Select city">
                                        <option>Select City</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>State: </Form.Label>
                                <Col>
                                    <Form.Control as="select">
                                        <option>Select State</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Country: </Form.Label>
                                <Col>
                                    <Form.Control as="select">
                                        <option>Select Country</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Pincode: </Form.Label>
                                <Col>
                                    <Form.Control type="textarea" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="field">
                                <Form.Label column>Quantity: </Form.Label>
                                <Col>
                                    <Form.Control as="select">
                                        <option>Select Quantity</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Container>
                        <Button id="post" variant="secondary" type="submit" block>Post</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
