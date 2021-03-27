import React from "react";
import "./styles.scss";
import Map from "../Map";
import Feed from "../Feed";
import Post from "../Post";

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        fullFeed: false,
        isPostOpen: false,
      }
    }

    handleFullFeed = () => {
      this.setState({fullFeed: !this.state.fullFeed})
    }

    onFeedPostClick = () => {
      this.setState({isPostOpen: !this.state.isPostOpen})
    }

    render() {
        return (
          <div className="home-container">
            { this.state.isPostOpen ?
              <Post
                className={this.state.fullFeed ? "post-container feed-full": "post-container"}
                onFeedPostClick={this.onFeedPostClick}/>:
              <Feed
                className={this.state.fullFeed ? "feed-container feed-full": "feed-container"}
                onFeedPostClick={this.onFeedPostClick}/>
            }
            <Map visibility={!this.state.fullFeed}/>
            <div className="full-feed-button">
              <button onClick={this.handleFullFeed}>{this.state.fullFeed ? "Show": "Hide"}</button>
            </div>
          </div>
        );
    }
}

export default Home;
