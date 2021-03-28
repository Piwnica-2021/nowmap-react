import React from "react";
import "./styles.scss";
import Api from "modules/api";

class FeedPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.post.upvotes,
            liked: false,
        };
        this.imageUrl = `/api/v1/posts/${this.props.post.postID}/image`;
    }

    handleLike = async () => {
        await Api.likePost(this.props.post.postID);
        const post = await Api.getPost(this.props.post.postID);
        this.setState({likes: post.upvotes + 1, liked: true});
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
                        <div onClick={this.handleLike} className={`like-button ${this.state.liked ? "liked" : ""} me-auto d-flex align-items-center`}>
                            <i className="material-icons me-2">thumb_up</i>
                            {this.state.likes}
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
