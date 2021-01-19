import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Customer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Navigation from '../components/Navigation';
import history from '../../history';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/user/signin/', this.state)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('jwtToken', res.data.token);
                localStorage.setItem('userId', res.data.user._id);
                history.push('/homePage');
                window.location.reload();
            })
            .catch(err => {
                console.log(err.request.status)
                this.setState({
                    hasErrors: "true",
                    status: err.request.status
                })
                if (err.request.status === 422 && this.state.email !== '' && this.state.password !== '') {
                    this.setState({
                        errorMessage: 'Incorrect email or password!'
                    })
                }
                else if (err.request.status === 422 && (this.state.email === '' || this.state.password === '')) {
                    this.setState({
                        errorMessage: 'Please enter all the fields!'
                    })
                }
            })
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                <Navigation/>
                <div className="main" style={{ display: 'flex' }}>
                    <Row>
                        <Col className="col" md={{ order: '2' }} lg={{ order: '1' }}
                            style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                                <h3 style={{fontFamily: 'Merriweather sans-serif', marginTop:'20px'}} >Are you Designer ?</h3>
                                <p>So what are you waiting for, Sign in and make money with us</p>
                                {/* <Link to='/designer'> */}
                                <button className="btn transparent" id="sign-in-btn">Sign in</button>
                                {/* </Link> */}
                            </div>
                            <img src="images/register.svg" className="image" alt="" />
                        </Col>
                        <Col className="col" md={{ order: '1' }} lg={{ order: '2' }}
                            style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <form action="#" className="sign-up-form" onSubmit={this.submitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h1 className="title" style={{ fontSize: '2.2rem', color: '#444', fontWeight: '1000', fontFamily: 'Merriweather sans-serif' }}><strong>Customer Sign in</strong></h1>
                                <div className="input-field" style={{ height: '55px', width: '400px', backgroundColor: '#f0f0f0', margin: '10px', borderRadius: '40px' }}>
                                    <p style={{ padding: '10px', position: 'relative' }}>
                                        <span>
                                            <FontAwesomeIcon className="faicons" icon="user" />
                                        </span>
                                        <input type="text" placeholder="Username or Email ID" name='email' value={email} onChange={this.changeHandler} />
                                    </p>
                                </div>
                                <div className="input-field" style={{ height: '55px', width: '400px', backgroundColor: '#f0f0f0', margin: '10px', borderRadius: '40px' }}>
                                    <p style={{ padding: '10px', position: 'relative' }}>
                                        <span>
                                            <FontAwesomeIcon className="faicons" icon="lock" />
                                        </span>
                                        <input type="password" placeholder="Password" name='password' value={password} onChange={this.changeHandler} />
                                    </p>
                                </div>
                                <p style={{ color: "red", margin:"auto" }}>{this.state.errorMessage}</p>
                                <div className="btn-field">
                                    <Button type="submit" className="btn" value="Login">Login</Button>
                                </div>
                                <p className="social-text">Forgot Password?</p>
                                <p className="social-text">Don't have account?<Link to='/signup/customer' style={{ textDecoration: 'none' }}> Signup </Link></p>
                            </form>
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
export default Customer;