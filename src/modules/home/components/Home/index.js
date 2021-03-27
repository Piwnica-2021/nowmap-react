import React from "react";
import "./styles.scss";
import Map from "../Map";
import Feed from "../Feed";
import Post from "../Post";
import Api from "modules/api";

class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        fullFeed: false,
        isPostOpen: false,
        posts: [],
        defLat: 50.06,
        defLang: 19.93333,
      }
    }

    handleFullFeed = () => {
        this.setState({fullFeed: !this.state.fullFeed})
    }

    onFeedPostClick = () => {
      this.setState({isPostOpen: !this.state.isPostOpen})
    }

    async getPosts(){
      const data = await Api.getRecent(30);
      this.setState({
        posts: data,
      });
    }

    render() {
        this.getPosts();
        return (
            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col">
                        <Feed className={this.state.fullFeed ? "feed-container feed-full" : "feed-container"}/>
                    </div>

                    <div className="col">
                        <Map visibility={!this.state.fullFeed}/>
                    </div>
                </div>

                <div className="full-feed-button">
                    <button onClick={this.handleFullFeed}>{this.state.fullFeed ? "Show" : "Hide"}</button>
                </div>
            </div>
        );
    }
}

export default Home;
