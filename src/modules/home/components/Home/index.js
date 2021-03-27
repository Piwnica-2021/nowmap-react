import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"
import Api from "modules/api";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullFeed: false,
            posts: [],
        }
    }

    componentDidMount() {
        Api.getRecent(100).then(posts => {
            if (posts !== null) {
                this.setState({posts: posts});
            }
        });
    }

    handleFullFeed = () => {
        this.setState({fullFeed: !this.state.fullFeed})
    }

    render() {
        return (
            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col">
                        <Feed posts={this.state.posts} className={this.state.fullFeed ? "feed-container feed-full" : "feed-container"}/>
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
