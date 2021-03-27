import React from "react";
import "./styles.scss";

class FeedPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="feed-post-card shadow rounded"
               style={{backgroundImage: `url(https://screendb.ftp.sh/api/v1/stickers/2/image)`}}>
                <div className="feed-post-card__title">My awesome post</div>
            </a>
        );
    }
}

export default FeedPost;
