import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        fullFeed: false,
      }
    }

    handleFullFeed = () => {
      this.setState({fullFeed: !this.state.fullFeed})
    }

    render() {
        return (
          <div className="home-container">
            <Feed className={this.state.fullFeed ? "feed-container feed-full": "feed-container"}/>
            <Map visibility={!this.state.fullFeed}/>
            <div className="full-feed-button">
              <button onClick={this.handleFullFeed}>{this.state.fullFeed ? "Show": "Hide"}</button>
            </div>
          </div>
        );
    }
}

export default Home;
