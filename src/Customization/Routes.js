import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import history from './history';
import Collar from "./Product/Collar";
import Cuffs from "./Product/Cuff";
import Back from "./Product/Back";
import Front from "./Product/Front";
import Pocket from "./Product/Pocket";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Collar" component={Collar} />
                    <Route path="/Cuffs" component={Cuffs} />
                    <Route path="/Back" component={Back} />
                    <Route path="/Front" component={Front} />
                    <Route path="/Pocket" component={Pocket} />
                </Switch>
            </Router>
        )
    }
}
