import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from "modules/home";
import About from "modules/about";
import Navbar from "../Navbar";

import "./styles.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>

                    <Route path="/comingsoon">
                        <About/>
                    </Route>

                    <Route path="/">
                        <Redirect to="/home"/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
