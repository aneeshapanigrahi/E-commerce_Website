import React, { Component } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import './Custombtn.css';
import Summary from './Summary';
import Custombtn from './Custombtn';
import Display from './Display';
import Filter from './Filter';
import history from '../history';
import axios from 'axios'
import Measure from './Measure';

class CustomizationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            selectedCard: null,
            cardFilter: null,
            id: null,
            id_1: null,
            id_2: null,
            value: '',
            size: ''
        };
    }
    componentDidMount() {
        let id_1 = window.location.href.split('/')[3];
        let id_2 = window.location.href.split('/')[5];
        axios.get(`http://localhost:8000/customize/` + id_1 + '/tags/' + id_2)
            .then(res => {
                this.setState({
                    cards: res.data.images,
                    id: res.data._id,
                    id_1: window.location.href.split('/')[3]
                })
            })

        axios.get(`http://localhost:8000/customize/` + id_1)
            .then(res => {
                this.setState({
                    value: res.data.items
                })
            })
    }
    cardSelect(cardId) {
        this.setState({ selectedCard: cardId });
    }
    sizeUpdate = (e) => {
        this.setState({ size: e })
    }
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><h2 className="header">{this.state.value}</h2></Row>
                    <Row >
                        <Col md={7}>
                            <Custombtn />
                        </Col>
                    </Row>
                    <Row className="main">
                        <Col md={7}>
                            <Filter
                                cards={this.state.cards}
                                cardSelect={cardId => this.cardSelect(cardId)} />
                        </Col>
                        <Col md={5}>
                            <Display card={
                                this.state.cards.filter(
                                    card => card.id === this.state.selectedCard)[0]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Container align="center" className="measure" style={{ marginTop: '40px', alignItems: "center" }}>
                                <Measure />
                            </Container>
                        </Col>
                        <Col>
                            <Container align="center">
                                <Summary value={this.state.value} size={this.state.size} />
                            </Container>
                        </Col>
                    </Row>
                    <a href={'/' + this.state.id_1} style={{ textDecoration: 'none' }}><Button type="submit" variant="secondary" id="post" style={{ marginTop: '50px', width: "7em" }} onClick={() => history.push('/' + this.state.id_1)} block>Post</Button></a>
                </div>
            </div>
        );
    }
}

export default CustomizationPage;