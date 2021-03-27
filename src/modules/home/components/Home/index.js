import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"
import Api from "modules/api";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        return (
            <div className="container-fluid home-container">
                <div className="row">
                    <div className="col">
                        <Feed posts={this.state.posts} className="feed-container" />
                    </div>

                    <div className="col">
                        <Map posts={this.state.posts} />
                    </div>
                </div>

                <div className="full-feed-button">
                    <button>Post</button>
                </div>
            </div>
        );
    }
}

export default Home;
