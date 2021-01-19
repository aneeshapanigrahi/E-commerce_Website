import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigation from './components/Navigation';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="main">
                    <Card align="center" className="card">
                        <h1 className="text">Who are you?</h1>
                        <Row>
                            <Col className="col">
                                {/* <Link to='/designer' style={{ textDecoration: 'none' }}> */}
                                <Container>
                                    <FontAwesomeIcon className="icon" icon='user' />
                                </Container>
                                <h5 className="info" style={{ color: 'black', margin: 'auto', fontFamily: 'Merriweather sans-serif' }}>Designer</h5>
                                {/* </Link> */}
                            </Col>
                            <Col className="col">
                                <Link to='/customer' style={{ textDecoration: 'none' }}>
                                    <Container>
                                        <FontAwesomeIcon className="icon" icon='user' />
                                    </Container>
                                    <h5 className="info" style={{ color: 'black', margin: 'auto', fontFamily: 'Merriweather sans-serif' }}>Customer</h5>
                                </Link>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Login;