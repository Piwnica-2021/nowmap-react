import React from "react";
import "./styles.scss";

class FeedPost extends React.Component {
    constructor(props) {
        super(props);
        this.imageUrl = `/api/v1/posts/${this.props.post.postID}/image`;
    }

    render() {
        return (
            <a className="feed-post-card shadow rounded"
               style={{backgroundImage: `url(${this.imageUrl})`}}>
                <div className="feed-post-card__title">{this.props.post.title}</div>
            </a>
        );
    }
}

export default FeedPost;
