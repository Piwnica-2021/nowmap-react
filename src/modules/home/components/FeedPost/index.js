import React from "react";
import "./styles.scss";

class FeedPost extends React.Component {
    render() {
        return (
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
        );
    }
}

export default FeedPost;
