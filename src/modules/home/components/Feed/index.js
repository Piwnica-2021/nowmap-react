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
                {this.props.posts.map((post, index) => <FeedPost post={post} key={index}/>)}
            </div>
        );
    }
}

export default Feed;
