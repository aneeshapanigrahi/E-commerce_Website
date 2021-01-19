import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

class Summary extends React.Component {
    render() {
        return (
            <div>
                <Container fluid className="summary" >
                    <h5 style={{ marginBottom: "1em", marginTop: "2em", fontWeight: "bolder" }}> Customization Summary: </h5>
                    <p><strong>Item:</strong> {this.props.value} </p>
                    <p><strong>Size:</strong> {this.props.radioValue} </p>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { radioValue: state.selectedradioValue }

}

export default connect(mapStateToProps)(Summary);