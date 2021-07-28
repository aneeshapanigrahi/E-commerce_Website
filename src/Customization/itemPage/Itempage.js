import React, { Component } from "react";
import { Button, Col, Form, Container, Row } from 'react-bootstrap';
import Measure from '../Customize/Measure'
import axios from 'axios';
import '../Customize/Custombtn.css'

export default class Itempage extends Component {
    state = {
        image: 'https://www.siliconvalleymedicalclinic.com/wp-content/plugins/complianz-gdpr/assets/images/placeholder.jpg',
        disabled: false,
        sideDrawerOpen: false,
        id: null,
        value: '',
        size: '',
        id_0: null
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
    componentDidMount() {
        let id = this.props.match.params.item_id;
        axios.get(`http://localhost:8000/customize/` + id)
            .then(res => {
                this.setState({
                    value: res.data.items,
                    id: res.data._id
                })
            })
        axios.get(`http://localhost:8000/customize/` + id + `/tags`)
            .then(res => {
                this.setState({
                    id_0: res.data[0]._id
                })
            })
            .catch(res => { console.log(res) })
    }
    sizeUpdate = (e) => {
        this.setState({ size: e })
    }
    render() {
        const { image, id_0 } = this.state
        return (
            <div style={{ height: '100%' }} className="Home">
                <div className="lander">
                    <Container className="customize">
                        <Row>
                            <Col>
                                <div className="img-holder">
                                    <img src={image} alt="" id="img" className="img" />
                                </div>
                                <input type="file" id="input" accept="image/*" onChange={this.imageHandler}></input>
                                <label htmlFor="input" className="image-upload">
                                    Upload Image
                            </label>
                            </Col>
                            <Col style={{ paddingTop: "50px" }}>
                                <Measure />
                                <div style={{marginTop:'50px'}}>
                                    <Container style={{ width: "400px" }} >
                                        <h5><b>Instructions To Upload:</b></h5>
                                        <ul align="left" style={{marginTop:'20px'}}>
                                            <li>Uploaded image should be clear.</li>
                                            <li>Mention if there are any addtional requirements.</li>
                                            <li>Open the page where you want insert the image.</li>
                                            <li>Use your keywords in photo option.</li>
                                            <li>In the Add images select, add selected to insert image into the page.</li>
                                        </ul>
                                    </Container>
                                </div>
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
                    {/* <div className="instructions" >
                    <Container style={{width:"500px"}} >
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
                </div>
            </div >
        );
    }
}
