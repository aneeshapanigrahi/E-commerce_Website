import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Container, Dropdown, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import { Drawer, createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class MyOrders extends Component {
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
        const contentStyle = { transition: 'margin-left 450ms ' };

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
                            <AppBar className="bar" style={{zIndex:'0', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0 20px 0' }} onLeftIconButtonClick={() => this.setState({ drawerOpen: true })} >
                                <h2 style={{ color: 'black', marginRight: '55em' }}> Hello {this.state.name}</h2>
                            </AppBar>

                            <Container style={{ boxShadow: '0 0 5px rgba(0,0,0,0.3)', padding: '20px 50px 20px 50px', marginLeft: '20px', marginRight: '20px', margin: 'auto', marginBottom: '20px' }} fluid>
                                <FormLabel style={{ fontSize: '20px' }}>My Orders</FormLabel>
                            </Container>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


}

export default MyOrders;