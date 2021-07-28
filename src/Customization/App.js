import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Itempage from './itemPage/Itempage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

library.add( faArrowCircleLeft )

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Route path="/:item_id" exact component={Itempage} />
          <Route path="/" exact component={Itempage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
