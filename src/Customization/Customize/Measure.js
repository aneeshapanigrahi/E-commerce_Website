import React from 'react';
import { Container, Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import './Custombtn.css'

class Measure extends React.Component {
    constructor() {
        super();
        this.state = {
            radioValue: ''
        }
        this.setRadioValue = this.setRadioValue.bind(this);
    }
    setRadioValue(e) {
        this.setState({
            radioValue: e.currentTarget.value
        })
    }

    render() {
        const radios = [
            { name: 'XS', value: 'XS' },
            { name: 'S', value: 'S' },
            { name: 'M', value: 'M' },
            { name: 'L', value: 'L' },
            { name: 'XL', value: 'XL' },
            { name: 'XXL', value: 'XXL' }
        ];
        return (
            <div>
                <Container fluid className="measure" >
                    <h2 className="scale" style={{ marginBottom: "20px", fontWeight: "bolder" }}> Measurements:</h2>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                className='measurebtn'
                                variant="light"
                                name="radio"
                                id="options"
                                value={radio.value}
                                checked={this.state.radioValue === radio.value}
                                onClick={() => { this.props.selectedRadio(radio.value) }}
                                style={this.state.radioValue === radio.value ? { borderRadius: '4px', margin: '2px', backgroundColor: '#ffd662ff', borderColor: '#ffd662ff' } : { borderRadius: '4px', margin: '2px' }}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                        <Button type="submit" id="scale">Scale</Button>
                    </ButtonGroup>
                </Container>
            </div>
        );
    }
}


export default (Measure);