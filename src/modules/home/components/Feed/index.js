import React from "react";
import "./styles.scss";
import FeedPost from "../FeedPost";

class Feed extends React.Component {

<<<<<<< HEAD
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
=======
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
>>>>>>> devel
            </div>
        );
    }
}

export default Feed;
