import React from "react";
import "./styles.scss";
import FeedPost from "../FeedPost";

class Feed extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        posts: [1, 2, 3, 4, 5, 6, 7]
      };
    }

    render() {
        return (
            <div className="feed-grid">
                {this.state.posts.map((post, index) => <FeedPost key={index} />)}
            </div>
        );
    }
}

export default Feed;
