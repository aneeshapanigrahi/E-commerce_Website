import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Container, Dropdown, FormControl, FormLabel, FormGroup, Button, Form } from 'react-bootstrap';
import { Drawer, createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerOpen: false };
    }
    // componentDidMount() {
    //     axios.get('http://localhost:8000/users/')
    //         .then((res) => {
    //             this.setState({
    //                 name: res.data.name
    //             });
    //         });
    // }
    render() {
        const contentStyle = { transition: 'margin-left 450ms' };

        if (this.state.drawerOpen) {
            contentStyle.marginLeft = 256;
        }
        return (
            <div>
                <MuiThemeProvider >
                    <div className="col-12">
                        <Drawer open={this.state.drawerOpen}>
                            <h2 style={{ margin: '20px auto 10px auto', paddingLeft: '20px', paddingRight: '20px' }} onClick={() => this.setState({ drawerOpen: false })} >My Account <FontAwesomeIcon icon={faArrowLeft} size="sm" />  </h2>

                            <div style={{ textAlign: 'left' }, { paddingRight: '5em', marginTop: '20px' }}>


                                <Link to='/myAccount' style={{ textDecoration: 'none' }}><h5 style={{ textDecoration: 'none', marginLeft: '1.5em', color: 'black' }}>My Account</h5>
                                </Link>

                                <Link to='/myOrders' style={{ textDecoration: 'none' }}><h5 style={{ textDecoration: 'none', marginLeft: '1.5em', color: 'black' }}>My Orders</h5>
                                </Link>

                                <Link to='/myChat' style={{ textDecoration: 'none' }}><h5 style={{ textDecoration: 'none', marginLeft: '1.5em', color: 'black' }}>My Chats</h5>
                                </Link>

                                <Link to='/settings' style={{ textDecoration: 'none' }}><h5 style={{ textDecoration: 'none', marginLeft: '1.5em', color: 'black' }}>Settings</h5>
                                </Link>

                                <Link to='/help' style={{ textDecoration: 'none' }}><h5 style={{ textDecoration: 'none', marginLeft: '1.5em', color: 'black' }}>Help</h5>
                                </Link>
                            </div>
                        </Drawer>
                        <div style={contentStyle}>
                            <AppBar style={{ backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0 20px 0' }} onLeftIconButtonClick={() => this.setState({ drawerOpen: true })} >
                                <h2 style={{ color: 'black', marginRight: '55em' }}> Hello {this.state.name}</h2>
                            </AppBar>

                            <Container style={{ boxShadow: '0 0 5px rgba(0,0,0,0.3)', padding: '20px 50px 20px 50px', marginLeft: '20px', marginRight: '20px', margin: 'auto', marginBottom: '20px' }} fluid>
                                <Form style={{ margin: '40px' }}>
                                    <FormGroup>
                                        <FormLabel style={{ fontSize: '20px', marginBottom: '10px' }}>Change Password</FormLabel><br />
                                        <FormLabel>Old Password</FormLabel>
                                        <FormControl type='text' placeholder='Old Password' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl type='text' placeholder='New Password' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl type='text' placeholder='Confirm Password' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <Button type='submit' style={{ backgroundColor: '#ffd662ff', borderColor: '#ffd662ff', color: 'black' }}>Update</Button>
                                    </FormGroup>
                                </Form>
                                <Form style={{ margin: '40px' }}>
                                    <FormGroup>
                                        <FormLabel style={{ fontSize: '20px' }}>Address</FormLabel><br />
                                        <FormLabel>Area and Street</FormLabel>
                                        <FormControl as="textarea" rows="3" placeholder='Area and Street' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <FormLabel>City</FormLabel>
                                        <FormControl type='text' placeholder='City' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <FormLabel>State</FormLabel>
                                        <FormControl as="select" style={{ maxWidth: '400px', margin: '0 0 20px 0' }}>
                                            <option>Select State</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </FormControl>
                                        <FormLabel>Landmark</FormLabel>
                                        <FormControl type='text' placeholder='Landmark' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <FormLabel>Pincode</FormLabel>
                                        <FormControl type='text' placeholder='Pincode' style={{ maxWidth: '400px', margin: '0 0 20px 0' }}></FormControl>
                                        <Button type='submit' style={{ backgroundColor: '#ffd662ff', borderColor: '#ffd662ff', color: 'black' }}>Update</Button>
                                    </FormGroup>
                                </Form>
                            </Container>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Settings;