import React from "react";
import "./styles.scss";
import FeedPost from "../FeedPost";

class Feed extends React.Component {

    render() {
        return (
          <div>
            <div className={this.props.className}>
              {this.props.posts.map((post, index) =>{
                return(
                  <div key={index}>
                    <FeedPost
                      onFeedPostClick={this.props.onFeedPostClick}
                      />
                  </div>
                )
              } )}
            </div>
          </div>
        );
    }
}

export default Feed;
