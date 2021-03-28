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
            <a className="feed-post-card shadow rounded"
               style={{backgroundImage: `url(${this.imageUrl})`}}>
                <div className="feed-post-card__footer">
                    <div className="feed-post-card__title">
                        {this.props.post.title}
                    </div>

                    <div className="d-flex">
                        <div className="me-auto d-flex align-items-center">
                            <i className="material-icons me-1" style={{fontSize: "20px"}}>thumb_up</i>
                            {this.props.post.upvotes}
                        </div>

                        <div className="feed-post-card__tags">
                            {tags}
                        </div>
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
