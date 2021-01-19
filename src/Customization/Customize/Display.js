import React from 'react';
import './Custombtn.css';

class Display extends React.Component {
  renderCard(card) {
    return (
      <div className="display">
        <img className="display-img" src={card.image} alt={card.name} />
      </div>
    )
  }
  render() {
    const card = this.props.card;
    if (card != null)
      return (
        <div>{this.renderCard(card)}</div>
      )
    else return <div className="display mx-auto" >
      <img className="display-img" alt="" src="https://www.siliconvalleymedicalclinic.com/wp-content/plugins/complianz-gdpr/assets/images/placeholder.jpg" />
    </div>;
  }
}
export default Display;