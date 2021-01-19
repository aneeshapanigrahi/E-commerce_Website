import React from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import './Customersignup.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import history from "../../history";
import Navigation from '../components/Navigation';

class Customersignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            gender: '',
            dob: "",
            number: '',
            password: '',
            password2: '',
            errorMessage: '',
            policyAccepted: true
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/user/signup/', this.state)
            .then(res => {
                console.log(res)
                history.push(`/customer`);
                window.location.reload();
            })
            .catch(err => {
                console.log(err.request.status);
                if (err.request.status === 422 && this.state.password2 !== this.state.password) {
                    this.setState({
                        errorMessage: 'Passwords do not match!'
                    })
                }
                else if (err.request.status === 422 && (this.state.email === '' || this.state.name === '' || this.state.gender === '' || this.state.number === '' || this.state.password === '' || this.state.password2 === '')) {
                    this.setState({
                        errorMessage: 'Please enter all the fields!'
                    })
                }
                else if (err.request.status === 409) {
                    this.setState({
                        errorMessage: 'User already exists!'
                    })
                }
                else if (err.request.status === 422 && this.state.password.length <= 6) {
                    this.setState({
                        errorMessage: 'Password should be at least 6 characters!'
                    })
                }
            })
    }
    render() {
        const { email, name, gender, number, password, password2, dob } = this.state
        return (
            <div>
                <Navigation />
                <div className="root" style={{ margin: '20px 0px 40px 0px' }}>
                    <h1 style={{ textAlign: 'center', color: 'black', margin: '20px 20px 40px 20px', fontFamily: 'Merriweather sans-serif' }}><strong>Customer Sign Up</strong></h1>
                    <Container className="form" style={{ maxWidth: '500px', boxShadow: '0px 0px 30px 0 rgba(0, 0, 0, 0.3)', padding: '30px 20px 30px 20px', textAlign: "center" }}>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Full Name</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name='name' value={name} onChange={this.changeHandler} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Gender</Form.Label>
                                <Col sm="8">
                                    <Form.Control as="select" name='gender' value={gender} onChange={this.changeHandler}>
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">DOB</Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        value={dob}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Email Address</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name='email' value={email} onChange={this.changeHandler} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Mobile Number</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name='number' value={number} onChange={this.changeHandler} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Password</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" name='password' value={password} onChange={this.changeHandler} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="4">Confirm Password</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="password" name='password2' value={password2} onChange={this.changeHandler} />
                                </Col>
                            </Form.Group>
                            <p style={{ color: "red", margin: "auto" }}>{this.state.errorMessage}</p>
                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I Accept The Terms Of Use And Policy"
                                    style={{ marginTop: '20px' }}
                                    onChange={() => this.setState({ policyAccepted: false })} />
                            </Form.Group>
                            <Button className="submit-btn" type="submit" disabled={this.state.policyAccepted} block>
                                Submit
                            </Button>
                        </Form>
                        <p>Already have an account? <Link to='/customer'> Login.</Link></p>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Customersignup