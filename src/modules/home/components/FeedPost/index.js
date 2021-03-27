import React from "react";
import "./styles.scss";

class FeedPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="fedd-post" onClick={this.props.onFeedPostClick}>
              <div className="post-info">
                Post created by (username) (time_ago)
              </div>
              <div className="post-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis sit amet quam vitae mattis.
              </div>
              <div className="post-img">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71LaTazW6eL._AC_SL1500_.jpg" alt=""/>
              </div>
            </div>
=======
            <a className="feed-post-card shadow rounded"
               style={{backgroundImage: `url(https://screendb.ftp.sh/api/v1/stickers/2/image)`}}>
                <div className="feed-post-card__title">My awesome post</div>
            </a>
>>>>>>> devel
        );
    }
}

export default FeedPost;
