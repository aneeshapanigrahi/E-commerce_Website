import React from "react";
import "./MainContent.css";
class MainContent extends React.Component {
  render() {
    return (
      <div id="mainContent" style={{ marginLeft: '54px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>Hello content</h1>
      </div>
    );
  }
}

export default MainContent;
