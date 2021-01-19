import React from 'react';
import { Container, ToggleButton, ButtonGroup } from 'react-bootstrap';
import './Custombtn.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Custombtn extends React.Component {
    constructor() {
        super();
        this.state = {
            id: null,
            route: null,
            header: '',
            details: [],
            radioValue: '1'
        }
        this.setRadioValue = this.setRadioValue.bind(this);
    }

    componentDidMount() {
        let id = window.location.href.split('/')[3];
        axios.get(`http://localhost:8000/customize/` + id)
            .then(res => {
                this.setState({
                    header: res.data.items,
                    id: res.data._id
                })
            })
        axios.get(`http://localhost:8000/customize/` + id + '/tags/')
            .then(res => {
                this.setState({
                    route: res.data[0]._id,
                    details: res.data
                })
            })
    }
    setRadioValue(e) {
        this.setState({
            radioValue: e.currentTarget.value
        })
    }
    render() {
        const { id, details } = this.state
        const detailItems = details.map((detail, idx) => {
            return (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="light"
                    name={detail.name}
                    id="options"
                    style={{ borderRadius: '4px', margin: '2px', backgroundColor: '#ffd662ff' }}
                    value={detail.name}
                    checked={this.state.radioValue === detail.name}
                    onChange={this.setRadioValue}>
                    <a style={{ textDecoration: "none", color: 'black' }} href={"/" + id + "/customization/" + detail._id}>
                        {detail.name}</a>
                </ToggleButton>
            )
        })
        return (
            <div>
                <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} fluid>
                    <ButtonGroup toggle>{detailItems}</ButtonGroup>
                </Container>
            </div>
        );
    }
}


export default withRouter(Custombtn);