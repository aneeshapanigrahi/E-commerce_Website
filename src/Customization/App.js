import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import CustomizationPage from "./Customize/customizationPage";
import Itempage from './itemPage/Itempage';
import Custombtn from './Customize/Custombtn';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

library.add( faArrowCircleLeft )

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Route path="/" exact component={Home} />
          <Route path="/customizationPage/:item_id/customization" exact component={Custombtn} />
          <Route path="/customizationPage/:item_id/customization/:tagId" exact component={CustomizationPage} />
          <Route path="/:item_id" exact component={Itempage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
