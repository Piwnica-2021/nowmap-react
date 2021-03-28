import React from "react";
import "./styles.scss";
import FeedPost from "../FeedPost";

class Feed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="feed-grid">
                {this.props.posts.map((post, index) => <FeedPost distance={this.props.dist[post.postID]} post={post} key={index} setCurrentCord={this.props.setCurrentCord} index={index}/>)}
                <div style={{height: "300px", opacity: 0}}>spacer</div>
            </div>
        );
    }
}

export default Feed;
