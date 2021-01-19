import React from 'react';
import './Custombtn.css';
import { Container, Card } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

class Filter extends React.Component {
  render() {
    const card = this.props.cards
      .map(card => {
        return (
          <div
            key={Math.random()}
            className="col-3 col-lg-2 m-2" style={{margin: 'auto'}}>
            <Card className="item-holder" onClick={() => this.props.cardSelect(card.id)}>
              <img className="item" src={card} alt={card.name} />
            </Card>
          </div>
        );
      });

    return (
      <div>
        <Container className="area">
          <Scrollbars style={{ height: '400px'}}>
            <div className="d-flex" style={{objectFit: "fill"}}>{card}</div>
          </Scrollbars>
        </Container>
      </div>
    );
  }
}
export default Filter;
