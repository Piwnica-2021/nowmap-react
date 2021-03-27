import React from "react";
import "./styles.scss";
import FeedPost from "../FeedPost";

class Feed extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        posts: [1,2,3,4,5],
      }
    }

    render() {
        return (
          <div>
            <div className={this.props.className}>
              {this.state.posts.map((post, index) =>{
                return(
                  <div key={index}>
                    <FeedPost
                      onFeedPostClick={this.props.onFeedPostClick}/>
                  </div>
                )
              } )}
            </div>
          </div>
        );
    }
}

export default Feed;
