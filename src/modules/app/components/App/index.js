import React from "react";
import "./styles.css";
import Home from "modules/home";

class App extends React.Component {
    render() {
        return (
            <div>
                <div>I AM APP</div>
                <Home />
            </div>
        );
    }
}

export default App;
