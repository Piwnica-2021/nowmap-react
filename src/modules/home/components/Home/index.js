import React from "react";
import "./styles.scss";
import Map from "../Map"
import Feed from "../Feed"
import Api from "modules/api";
import CreateModal from "../CreateModal"

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            createModalOn: false,
        }
    }

    componentDidMount() {
        Api.getRecent(100).then(posts => {
            if (posts !== null) {
                this.setState({posts: posts});
            }
        });
    }

    onCreateModalCall = () => {
      this.setState({createModalOn: !this.state.createModalOn});
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
                    <button onClick={this.onCreateModalCall}>Post</button>
                </div>

                {
                  this.state.createModalOn ?
                      <CreateModal
                        createModalOn={this.state.createModalOn}
                        onCreateModalCall={this.onCreateModalCall}/>: null
                  }

            </div>
        );
    }
}

export default Home;
