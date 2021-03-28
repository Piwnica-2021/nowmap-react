import React from "react";
import "./styles.scss";

class FeedPost extends React.Component {
    constructor(props) {
        super(props);
        this.imageUrl = `/api/v1/posts/${this.props.post.postID}/image`;
    }

    render() {
        const tags = this.props.post.tags.split(' ').map(t => `#${t}`).join(' ');
        return (
            <a className="feed-post-card shadow rounded" onClick={() => this.props.setCurrentCord(this.props.post.latitude, this.props.post.longitude, this.props.index)} onMouseOver={() => this.props.setCurrentCord(this.props.post.latitude, this.props.post.longitude, this.props.index)}
               style={{backgroundImage: `url(${this.imageUrl})`}}>
                <div className="feed-post-card__footer">
                    <div className="feed-post-card__title">
                        {this.props.post.title}
                    </div>

                    <div className="feed-post-card__tags">
                        {tags}
                    </div>
                </div>

                <div className="feed-post-card__content">
                    {this.props.post.description}
                </div>
            </a>
        );
    }
}

export default FeedPost;
